angular.module("taskApp").factory("AuthService", function () {
  var myAuthKey = "myAuthKey";

  return {
    // Local Storage Se Mujhe Saare Users Ke Baare Main Main Batao
    getUsersFromLocalStorage: function () {
      try {
        var users = localStorage.getItem(myAuthKey);
        if (users) {
          return JSON.parse(users);
        } else return [];
      } catch (error) {
        console.error("Failed to parse users from localStorage", error);
        return [];
      }
    },

    // Utility for saving users to local storage
    saveUsersToLocalStorage: function (users) {
      localStorage.setItem(myAuthKey, JSON.stringify(users));
    },
    registerMyUser: function (user) {
      var users = this.getUsersFromLocalStorage();
      var checkIfUserExists = users.some(function (userInUsers) {
        return userInUsers.username === user.username;
      });
      if (checkIfUserExists) {
        return false;
      } else {
        user.password = CryptoJS.SHA256(user.password).toString();
        users.push(user);
        this.saveUsersToLocalStorage(users);
        return true;
      }
    },
    loginToApplication: function (user) {
      var users = this.getUsersFromLocalStorage();
      var hashedPassword = CryptoJS.SHA256(user.password).toString();
      var checkIfUserExists = users.some(function (userInUsers) {
        return (
          userInUsers.username === user.username &&
          userInUsers.password === hashedPassword
        );
      });

      if (checkIfUserExists) {
        return true;
      } else {
        return false;
      }
    },
  };
});

angular.module("taskApp").factory("TodoService", function () {
  function myTodoKey(user) {
    return "myTodoAppKey_" + user.username;
  }

  return {
    getTodosFromLocalStorage: function (user) {
      try {
        var todos = localStorage.getItem(myTodoKey(user));
        if (todos) {
          return JSON.parse(todos);
        } else return [];
      } catch (error) {
        console.error(
          "Error occured while fetching todos from local storage : ",
          error
        );
        return [];
      }
    },

    saveTodosToLocalStorage: function (user, todos) {
      localStorage.setItem(myTodoKey(user), JSON.stringify(todos));
    },

    addTodosToLocalStorage: function (user, todo) {
      var todos = this.getTodosFromLocalStorage(user);
      todos.push(todo);
      this.saveTodosToLocalStorage(user, todos);
    },

    updateTodos: function (user, index, todo) {
      var todos = this.getTodosFromLocalStorage(user);
      todos[index] = todo;
      this.saveTodosToLocalStorage(user, todos);
      
    },

    deleteTodos: function (user, index) {
      var todos = this.getTodosFromLocalStorage(user);
      todos.splice(index, 1);
      this.saveTodosToLocalStorage(user, todos);
    },
  };
});

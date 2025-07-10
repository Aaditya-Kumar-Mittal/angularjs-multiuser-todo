angular.module("taskApp").controller("TodoController", [
  // In-built services
  "$scope",
  "$location",
  "$routeParams",

  // Custom Service
  "TodoService",

  function ($scope, $location, $routeParams, TodoService) {
    // Route params se username fetch karo
    $scope.user = { username: $routeParams.username };

    var loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    if (!loggedInUser || loggedInUser.username !== $routeParams.username) {
      alert("Unauthorized access. Please log in.");
      $location.path("/").replace();
      return;
    }

    // Sample new Todo object
    $scope.newTodo = {
      title: "",
      description: "",
      dueDate: "",
      status: "Pending",
      createdAt: null,
      updatedAt: null,
    };

    $scope.indexToEdit = -1;
    $scope.filterStatus = "";
    $scope.todos = TodoService.getTodosFromLocalStorage($scope.user);

    $scope.resetForm = function () {
      // Function to set back to default configuration
      $scope.newTodo = {
        title: "",
        description: "",
        dueDate: "",
        status: "Pending",
        createdAt: null,
        updatedAt: null,
      };
      $scope.indexToEdit = -1;
    };

    $scope.addTodo = function () {
      if (
        $scope.newTodo.title &&
        $scope.newTodo.description &&
        $scope.newTodo.dueDate
      ) {
        $scope.newTodo.createdAt = new Date().toISOString();
        TodoService.addTodosToLocalStorage(
          $scope.user,
          angular.copy($scope.newTodo)
        );
        $scope.todos = TodoService.getTodosFromLocalStorage($scope.user);
        $scope.resetForm();
      } else {
        alert("Please fill all the fields!");
      }
    };

    $scope.editTodo = function (index) {
      // Select karlo us index ko
      $scope.indexToEdit = index;

      // Copy karlo us index par stored todo ke data ko
      $scope.newTodo = angular.copy($scope.todos[index]);
    };

    $scope.updateTodo = function () {
      if ($scope.indexToEdit !== -1) {
        $scope.newTodo.updatedAt = new Date().toISOString();
        TodoService.updateTodos(
          $scope.user,
          $scope.indexToEdit,
          angular.copy($scope.newTodo)
        );
        $scope.todos = TodoService.getTodosFromLocalStorage($scope.user);
        $scope.resetForm();
      }
    };

    $scope.deleteTodo = function (index) {
      TodoService.deleteTodos($scope.user, index);
      $scope.todos = TodoService.getTodosFromLocalStorage($scope.user);
    };

    $scope.markDone = function (todo) {
      todo.status = "Done";
      TodoService.saveTodosToLocalStorage($scope.user, $scope.todos);
    };

    $scope.getFilteredTasks = function () {
      return $scope.todos.filter(function (todo) {
        return !$scope.filterStatus || todo.status === $scope.filterStatus;
      });
    };

    $scope.logout = function () {
      console.log("logout");

      localStorage.removeItem("loggedInUser");
      $location.path("/").replace();
    };

    $scope.toggleUpdateFunctionality = function () {
      if (indexToEdit === -1) {
        return "Add Todo";
      } else {
        return "Update Todo";
      }
    };
  },
]);

angular.module("taskApp").config([
  "$routeProvider",
  function ($routeProvider) {
    $routeProvider
      .when("/", {
        templateUrl: "views/login.html",
        controller: "AuthController",
      })
      .when("/signup", {
        templateUrl: "views/signup.html",
        controller: "AuthController",
      })
      .when("/todos/:username", {
        templateUrl: "views/todo.html",
        controller: "TodoController",
      })
      .otherwise({
        redirectTo: "/",
      });
  },
]);

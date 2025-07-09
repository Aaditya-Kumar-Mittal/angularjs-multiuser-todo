angular.module("taskApp").controller("AuthController", [
  // in-built services
  "$scope",
  "$location",
  // custom service
  "AuthService",
  function ($scope, $location, AuthService) {
    $scope.signupInformation = {};
    $scope.loginInformation = {};

    $scope.signUpUser = function () {
      if (AuthService.registerMyUser($scope.signupInformation)) {
        alert("User Registered Successfully! Kindly login now!");
        $location.path("/");
      } else {
        alert("User Already Exists! Kindly login!");
      }
    };
    $scope.loginUser = function () {
      if (AuthService.loginToApplication($scope.loginInformation)) {
        $location.path("/todos/" + $scope.loginInformation.username);
      } else {
        alert("Invalid Credentials! Kindly Try Again!");
      }
    };
  },
]);

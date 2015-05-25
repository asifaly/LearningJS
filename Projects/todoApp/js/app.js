var app = angular.module('todoApp', []);

app.controller('MainCtrl', ['$scope', function ($scope) {

    $scope.todos = [{}];

    $scope.addTodo = function (newTodo, status) {
        $scope.todos.push({
            desc: newTodo,
            status: 'open'
        })
        $scope.newTodo = "";
    };

    $scope.removeTodo = function (todo) {
        $scope.todos.pop(todo)
        console.log("todo is now removed")
    };


}]);
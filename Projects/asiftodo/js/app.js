/*global angular*/
/*global console*/
(function () {
    'use strict';

    var todoApp = angular.module('todoApp', ['ngRoute', 'ngResource', 'firebase']);

    todoApp.config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: '/partials/due.html'
            })
            .when('/done', {
                templateUrl: '/partials/done.html'
            })
            .otherwise({
                redirectTo: '/'
            });

    }]);

    todoApp.controller('MainCtrl', ['$location', function ($location) {

        this.hello = "hello world";

        this.todosDone = [];

        this.todosDue = [];

        this.addTodo = function (newtodo) {
            this.todosDue.push({
                'name': newtodo,
                'status': true
            });
            this.newTodo = "";
            $location.path('/');
        };

        this.markDone = function (todo) {
            var done = {
                'name': this.todosDue[todo].name,
                'status': false
            };
            this.todosDue.splice(todo, 1);
            this.todosDone.push(done);
        };

        this.clearDone = function () {
            this.todosDone = [];
        };

    }]);

}());
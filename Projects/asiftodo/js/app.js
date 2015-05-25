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

    todoApp.controller('MainCtrl', ['$location', '$firebaseArray', function ($location, $firebaseArray) {

        var due = new Firebase("https://asiftodo.firebaseio.com/due"),
            done = new Firebase("https://asiftodo.firebaseio.com/done"),
            doneref = $firebaseArray(done),
            dueref = $firebaseArray(due),
            that = this;

        this.hello = "hello world";

        //this.todosDone = [];
        doneref.$loaded().then(function () {
            that.todosDone = doneref;
        }, function (error) {
            console.log(error);
        });

        dueref.$loaded().then(function () {
            that.todosDue = dueref;
        }, function (error) {
            console.log(error);
        });

        //this.todosDue = [];
        //this.todosDue = $firebaseArray(dueref);

        this.addTodo = function (newtodo) {
            this.todosDue.$add({ //push
                'name': newtodo,
                'status': true
            }).then(function (ref) {
                that.newTodo = "";
                $location.path('/');
                console.log(ref);
            }, function (error) {
                console.log(error);
            });
        };

        this.markDone = function (todo) {
            var done = {
                'name': this.todosDue[todo].name,
                'status': false
            };
            this.todosDue.$remove(todo).then(function (ref) {
                that.todosDone.$add(done); //push
            }, function (error) {
                console.log(error);
            });
        }; //splice

        this.clearDone = function () {
            this.todosDone = [];
        };

    }]);

}());
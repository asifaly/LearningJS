'use strict';
var app = angular.module('testApp', []);

app.controller('MainCtrl', ['$scope', function ($scope) {
    $scope.datas = [
        {
            name: "test1",
            age: 30
                },
        {
            name: "test2",
            age: 23
                },
        {
            name: "test3",
            age: 12
                },
        {
            name: "test4",
            age: 45
                }];

    $scope.addData = function (name, age) {
        $scope.datas.push({
            name: name,
            age: age
        });
        $scope.name = "";
        $scope.age = "";
    };

    $scope.removeData = function (data) {
        $scope.datas.pop(data);
        console.log($scope.datas);
    };

            }]);
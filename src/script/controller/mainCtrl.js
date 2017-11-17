'use strict';

angular.module('app').controller('mainCtrl', ['$http', '$scope', function ($http, $scope) {
    $http.get('/data/positionList.json').then(function(_res) {
        $scope.list = _res.data;
        console.log(_res)
    });

    // 在positionList.js中设置scope: {data: '='}后，可以创建不同的属性绑定在$scope上，比如$scope.xxx
    // 在main.html调用时只需选择不同的绑定属性即可，如<div app-position-list data="xxx"></div>
}])
'use strict';

angular.module('app').directive('appHeadBar', [function () {
    return {
        restrict: 'A',
        replace: true,
        templateUrl: 'view/template/headBar.html',
        scope: {
            text: '@'   // text为自定义指令，@对应常量、字符串
        },
        link: function ($scope) {   // $scope绑定的函数，类似vue里的methods，其中形参$scope和下面的$scope.back中的$scope都可以简写为scope
            $scope.back = function () {
                window.history.back();
            };
        }
    };
}]);

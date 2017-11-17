'use strict';

angular.module('app').controller('positionCtrl', ['$scope', '$http', '$state', '$q', function ($scope, $http, $state, $q) {
    $scope.isLogin = false;

    function getPosition() {
        var def = $q.defer();

        $http.get('data/position.json', {
            params: {
                id: $state.params.id
            }
        }).then(function (_res) {
            $scope.position = _res.data;
            console.log(_res.data)
            def.resolve(_res);
        }).catch(function (err) {
            def.reject(err);
        });

        return def.promise;
    };

    function getCompany(id) {
        var def = $q.defer();

        $http.get('data/company.json', {
            params: {
                id: id
            }
        }).then(function (_res) {
            $scope.company = _res.data;
            console.log(_res.data)
        });

    };

    getPosition().then(function(_pos) {
        console.log('position success')
        getCompany(_pos.companyId);
    });
}]);
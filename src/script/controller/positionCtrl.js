'use strict';

angular.module('app').controller('positionCtrl', ['$scope', function ($scope) {
    $scope.company = {
        "id": "c1",
        "imageUrl": "/image/company-1.png",
        "name": "慕课网",
        "industry": "移动互联网",
        "state": "A轮",
        "people": "50-150人",
        "positionClass": [
            {
                "id": "jishu",
                "name": "技术",
                "positionList": [
                    {
                        "id": "p1",
                        "name": "IOS前端工程师",
                        "createdDate": "2016-04-16 23:30",
                        "salary": "15k-25k"
                    }
                ]
            },
            {
                "id": "yunying",
                "name": "运营",
                "positionList": [
                    {
                        "id": "y1",
                        "name": "运营总监",
                        "createdDate": "2016-04-10 13:30",
                        "salary": "25k以上"
                    }
                ]
            }
        ]
    }
    $scope.position = {
        "id": "p3",
        "imageUrl": "/image/company-3.png",
        "name": "销售",
        "companyId": "c3",
        "companyName": "千度",
        "cityId": "c1",
        "cityName": "上海",
        "scaleId": "s3",
        "scaleName": "500人以上",
        "industryId": "i1",
        "industryName": "互联网",
        "salaryId": "s2",
        "salaryName": "3k-5k",
        "experience": "1-3年",
        "education": "专科",
        "benefit": "成长空间大",
        "description": "岗位职责：\n1.销售产品；..."
    };
}]);




// angular.module('app').controller('positionCtrl', ['$log', '$q', '$http', '$state', '$scope', 'cache', function ($log, $q, $http, $state, $scope, cache) {
//     $scope.isLogin = !!cache.get('name');
//     $scope.message = $scope.isLogin ? '投个简历' : '去登录';
//     function getPosition() {
//         var def = $q.defer();
//         $http.get('data/position.json', {
//             params: {
//                 id: $state.params.id
//             }
//         }).success(function s(resp) {
//             $scope.position = resp;
//             if (resp.posted) {
//                 $scope.message = '已投递';
//             }
//             def.resolve(resp);
//         }).error(function (err) {
//             def.reject(err);
//         });
//         return def.promise;
//     }
//     function getCompany(id) {
//         $http.get('data/company.json?id=' + id).success(function (resp) {
//             $scope.company = resp;
//         })
//     }
//     getPosition().then(function (obj) {
//         getCompany(obj.companyId);
//     });
//     $scope.go = function () {
//         if ($scope.message !== '已投递') {
//             if ($scope.isLogin) {
//                 $http.post('data/handle.json', {
//                     id: $scope.position.id
//                 }).success(function (resp) {
//                     $log.info(resp);
//                     $scope.message = '已投递';
//                 });
//             } else {
//                 $state.go('login');
//             }
//         }
//     }
// }]);

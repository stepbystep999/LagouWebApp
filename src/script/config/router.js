'use strict';

// 路由配置
// 调用app模块，执行config方法
// 函数形参$stateProvider,$urlRouterProvider可以命名成其他名字，但是通常和前面参数的命名保持一致，文件压缩时，形参命名会被替换
// 如果使用隐式声明，类似config(function(x, y){...})，则需要插件将其转换成显式声明，防止代码压缩式产生额外影响
// 此处直接使用显式声明，'$stateProvider'和'$urlRouterProvider'意味着对应的方法入口
angular.module('app').config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    // 配置路由
    // state可以连写，比如$stateProvider.state(xxx).state(yyy)...
    $stateProvider.state('main', {  // main为定义的对应路由的唯一id
        url: '/main',   // url的hash值
        templateUrl: 'view/main.html',  // 对应的template地址
        controller: 'mainCtrl'  // 对应的逻辑控制地址
    }).state('position', {
        url: '/position/:id',
        templateUrl: 'view/position.html',
        controller: 'positionCtrl'
    }).state('company', {
        url: '/company/:id',
        templateUrl: 'view/company.html',
        controller: 'companyCtrl'
    });
    // 若先前的路由都不满足条件，则跳转至下面的路由id
    $urlRouterProvider.otherwise('main');
}]);


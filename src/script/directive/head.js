'use strict';

// 调用app模块，执行directive方法
// 此处的appHead对应html中的app-head，-h即为H，这是因为html中不能识别大写字母
angular.module('app').directive('appHead', [function() {
    return {
        restric: 'A',    // restrict有4个属性：AEMC，属性、元素、样式、注释；即以不同的方式调用指令
        replace: true,  // 把外层的元素替换掉，即<div app-head></div>
        templateUrl: 'view/template/head.html'
    };
}]);
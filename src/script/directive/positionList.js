'use strict';

// 调用app模块，执行directive方法
// 此处的positionList对应html中的app-position-list，-h即为H，这是因为html中不能识别大写字母
angular.module('app').directive('appPositionList', [function() {
    return {
        restric: 'A',    // restrict有4个属性：AEMC，属性、元素、样式、注释；即以不同的方式调用指令
        replace: true,  // 把外层的元素替换掉，即<div position-list></div>，因此要求html模板中只能有一个根元素
        templateUrl: 'view/template/positionList.html',
        scope: {
            data: '='   // scope类似vue中的data属性，其子元素为键值对，键和值都可以指定。指令和控制器中，scope属性里的键值对是共享的，如果为@则接收常量，=接收变量，&接收回调函数
        }
    };
}]);
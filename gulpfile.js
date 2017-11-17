var gulp = require('gulp');
var $ = require('gulp-load-plugins')();   // 非必须，定义好以后要实例化，即()，其他gulp-相关文件可以直接用$来引入，而非声明变量
var open = require('open');

var app = {
    srcPath: 'src/',    // 此目录初始内容从实战项目源代码中获取
    devPath: 'build/',
    prdPath: 'dist/'
};

// 拷贝项目js文件，该方法命名为lib，编写完成后键入gulp lib运行
gulp.task('lib', function () {
    gulp.src('bower_components/**/*.js')    // 读取bower_components文件夹中的js文件，如果是全部文件，就是/**/*
        .pipe(gulp.dest(app.devPath + 'vendor'))    // 拷贝至上述文件到开发目录build/下的vendor文件夹
        .pipe(gulp.dest(app.prdPath + 'vendor'))    // 拷贝至上述文件到生产目录dist/下的vendor文件夹
        .pipe($.connect.reload());  // 通知服务器对浏览器进行刷新，仅针对高级浏览器
});

// 拷贝项目html文件，该方法命名为html，编写完成后键入gulp html运行
gulp.task('html', function () {
    gulp.src(app.srcPath + '**/*.html')    // 读取srvPath文件夹中的html文件
        .pipe(gulp.dest(app.devPath))    // 拷贝至上述文件到开发目录build/下
        .pipe(gulp.dest(app.prdPath))   // 拷贝至上述文件到生产目录dist/下
        .pipe($.connect.reload())   // 通知服务器对浏览器进行刷新，仅针对高级浏览器
        .pipe($.connect.reload());  // 通知服务器对浏览器进行刷新，仅针对高级浏览器
});

// 拷贝项目json文件，该方法命名为json，编写完成后键入gulp json运行
gulp.task('json', function () {
    gulp.src(app.srcPath + 'data/**/*.json')    // 读取srvPath/data文件夹中的json文件
        .pipe(gulp.dest(app.devPath + 'data'))    // 拷贝至上述文件到开发目录build/下的data文件夹
        .pipe(gulp.dest(app.prdPath + 'data'))  // 拷贝至上述文件到生产目录dist/下的data文件夹
        .pipe($.connect.reload());  // 通知服务器对浏览器进行刷新，仅针对高级浏览器
});

// 拷贝项目less文件，该方法命名为less，编写完成后键入gulp less运行
gulp.task('less', function () {
    gulp.src(app.srcPath + 'style/index.less')    // 读取srvPath/style/index.less文件
        .pipe($.less()) // 编译上述文件为css
        .pipe(gulp.dest(app.devPath + 'css'))    // 拷贝至上述文件到开发目录build/下的css文件夹
        .pipe($.cssmin())   // 压缩生成的文件
        .pipe(gulp.dest(app.prdPath + 'css'))   // 拷贝至上述文件到生产目录dist/下的css文件夹
        .pipe($.connect.reload());  // 通知服务器对浏览器进行刷新，仅针对高级浏览器
});

// 拷贝项目js文件，该方法命名为js，编写完成后键入gulp js运行
gulp.task('js', function () {
    gulp.src(app.srcPath + 'script/**/*.js')    // 读取srcPath/script文件夹的js文件
        .pipe($.concat('index.js')) // 合并上述js文件至index.js中
        .pipe(gulp.dest(app.devPath + 'js'))    // 拷贝至上述文件到开发目录build/下的js文件夹
        .pipe($.uglify())   // 压缩合并后的js文件
        .pipe(gulp.dest(app.prdPath + 'js'))    // 拷贝至上述文件到生产目录dist/下的js文件夹
        .pipe($.connect.reload());  // 通知服务器对浏览器进行刷新，仅针对高级浏览器
});

// 拷贝项目image文件，该方法命名为image，编写完成后键入gulp image运行
gulp.task('image', function () {
    gulp.src(app.srcPath + 'image/**/*')    // 读取srcPath/image文件夹的所有文件
        .pipe(gulp.dest(app.devPath + 'image'))    // 拷贝至上述文件到开发目录build/下的image文件夹
        .pipe($.imagemin())   // 压缩合并后的image文件
        .pipe(gulp.dest(app.prdPath + 'image')) // 拷贝至上述文件到生产目录dist/下的image文件夹
        .pipe($.connect.reload());  // 通知服务器对浏览器进行刷新，仅针对高级浏览器
});

// 对于编写过的任务进行统一的编译运行
// 该方法命名为build，编写完成后键入gulp build运行
gulp.task('build', ['lib', 'html', 'json', 'less', 'js', 'image']);

// 项目每次部署前，需要清除原先的devPath和prdPath目录
// 清理项目目录文件，该方法命名为image，编写完成后键入gulp clean运行
gulp.task('clean', function() {
    gulp.src([app.devPath, app.prdPath])    // 指定要清理的目录
        .pipe($.clean());   // 清理文件
});

// 自动部署运行服务器，该方法命名为serve，编写完成后键入gulp serve运行
// 每次运行前，先调用build命令对项目文件进行编译
gulp.task('serve', ['build'], function() {
    $.connect.server({   //设置运行参数
        root: [app.devPath],
        livereload: true,   // 自动刷新浏览器
        port: 1234
    });
    open('http://127.0.0.1:1234');  //  打开指定路径

    // 服务器启动后，监测对应文件的修改变化，然后执行对应的方法
    gulp.watch('bower_components/**/*.js', ['lib']);
    gulp.watch(app.srcPath + '**/*.html', ['html']);
    gulp.watch(app.srcPath + 'data/**/*.json', ['json']);
    gulp.watch(app.srcPath + 'style/**/*.less', ['less']);
    gulp.watch(app.srcPath + 'script/**/*.js', ['js']);
    gulp.watch(app.srcPath + 'image/**/*', ['image']);
});

// 设置serve方法为gulp的默认方法，如此可以只输入gulp来运行serve方法
gulp.task('default', ['serve']);

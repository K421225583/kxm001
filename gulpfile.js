
//引入gulp
var gulp=require("gulp");

var minCss=require("gulp-minify-css")

//创建一个任务 gulp.task（“任务名”，[任务名].callback）
gulp.task("aaa",function(){
	console.log("我创建gulp成功")
	//要执行的文件
	gulp.src("css/*.css")
	//我去压缩css文件
	.pipe(minCss())
	//生成一个新文件
	.pipe(gulp.dest("dist/mincss"))
})
//创建一个默认任务
gulp.task("default",function(){
	//监听文件变化
	gulp.watch("css/*.css",["aaa"])
})
gulp.task("concatJs",function(){
	gulp.src(["js/demo1.js","js/demo2.js"])
	.pipe(concat("index.js"))
	.pipe(gulp.dest("dist/js"))
})

//全局安装 gulp  -- npm install gulp -g
//在你的项目里 package.json  -- npm init
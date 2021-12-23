1,配置:
	1,如果在html文件中用了模板字符串,字符串模板中用到了变量,
		那么html-plugin无法处理,需要用到html-loader
	2,postcss-pxtorem 将px自动转为rem
	3,借助fastclick解决移动端100-300毫秒延迟问题
		npm i fastclick
		import fastclick from 'fastclick'
		fastclick.attach(document.body)

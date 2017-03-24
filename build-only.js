/**
 * Created by Administrator on 2017/3/24.
 */
({
	baseUrl: 'js',
	name: 'a',
	out: 'js/a.min.js',
	paths: {
		text: "combo/text",
		css: "combo/css",
		
		"css-builder": "combo/css-builder",
		normalize: "combo/normalize",
		domReady: 'combo/domReady'
	},
	
	optimize: 'uglify', //混淆压缩 none 为不混淆压缩
	skipDirOptimize: true,  //只压缩 modules 中 name 所对应的文件
	inlineText: true,   //html 也要压缩进来
	preserveLicenseComments: false  //去掉授权注释
})
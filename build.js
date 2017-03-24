/**
 * Created by Administrator on 2017/3/23.
 */
({
	baseUrl: 'js',
	dir: 'build',
	// name: 'a',
	// out: 'js/a.min.js',
	paths: {
		text: "combo/text",
		css: "combo/css",
		
		"css-builder": "combo/css-builder",
		normalize: "combo/normalize",
		domReady: 'combo/domReady'
	},
	modules: [
		{
			name: 'a'
		}, {
			name: 'm1/e',
			exclude: ['core/d', 'core/g']
		}, {
			name: 'm2/h',
			exclude: ['core/g']
		}, {
			name: 'm3/j',
			exclude: ['text']
		}, {
			name: 'core/g'
		}
	],
	
	optimize: 'uglify', //混淆压缩 none 为不混淆压缩
	skipDirOptimize: true,  //只压缩 modules 中 name 所对应的文件
	inlineText: true,   //html 也要压缩进来
	preserveLicenseComments: false  //去掉授权注释
})
/**
 * Created by Administrator on 2017/3/23.
 */
require.config({
	paths: {
		text: "combo/text",
		css: "combo/css",
		
		"css-builder": "combo/css-builder",
		normalize: "combo/normalize",
		domReady: 'combo/domReady'
	}
});

require(['text!./base/c.html', './base/b', './core/d'], function (c) {
	console.log('-------------------a-------------------');
	document.getElementById('aht').innerHTML = c;
	document.getElementById('e').onclick = function () {
		require(['./m1/e'], function () {
			console.log('load e');
		})
	};
	
	document.getElementById('h').onclick = function () {
		require(['./m2/h'], function () {
			console.log('load h');
		})
	};
	
	document.getElementById('j').onclick = function () {
		require(['./m3/j'], function () {
			console.log('load j');
		})
	};
	
	
});
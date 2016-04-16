require.config({
	paths:{
		'jquery':'../module/jquery/jquery',
        'layer':'../module/layer/layer',
        'currency':'../js/currency',
        'zclip':'../module/zclip/jquery.zclip',
        'validata':'../module/validata/jquery.validate.min',
        'validMethod':'../module/validata/validMethod',
		//css文件的定义方法
        "layercss": "../module/layer/skin/layer"				//异步请求layer插件需要的layer.css文件
	},
	map: {
        '*': {
            'cssjs': '../module/requirejs/css',
        }
    },    
    shim:{
        'layer':{
            "layer":{
                deps:['jquery'],
                exports:"layer"
            },
            "currency":{
                deps:['jquery'],
                exports:"currency"
            },
            "zclip":{
                deps:['jquery'],
                exports:"zclip"
            }
        }
    }
});












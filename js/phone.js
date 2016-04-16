//通过主模块，运用AMD规范定义的的require()函数调用其他模块。这里分别是(jquery.js)、、、等子模块。
require(['jquery','currency','validata'], function (){
    //require()函数接受两个参数。
    //第一个参数是一个数组，表示所依赖的模块，上例就是['moduleA', 'moduleB', 'moduleC']，即主模块依赖这三个模块；
    //第二个参数是一个回调函数，当前面指定的模块都加载成功后，它将被调用。
    //加载的模块会以参数形式传入该函数，从而在回调函数内部就可以使用这些模块。
    $.ajax({ 
        url:"../js/json/phone.json",    /*请求的页面地址*/
        dataType:"json",                /*数据类型*/
        type:"get",                     /*加载方式*/
        success:function(data){         //0:未实名 1:已实名
            if(data.phone == 0){       
              $('.phoneone').show();
              $('.phonetwo').hide();
            }else if(data.phone == 1){
              $('.phoneone').hide();
              $('.phonetwo').show();
            }
        }
    });

    

});

//通过主模块，运用AMD规范定义的的require()函数调用其他模块。这里分别是(jquery.js)、、、等子模块。
require(['jquery','layer','currency','cssjs!layercss'], function (){
    //require()函数接受两个参数。
    //第一个参数是一个数组，表示所依赖的模块，上例就是['moduleA', 'moduleB', 'moduleC']，即主模块依赖这三个模块；
    //第二个参数是一个回调函数，当前面指定的模块都加载成功后，它将被调用。
    //加载的模块会以参数形式传入该函数，从而在回调函数内部就可以使用这些模块。

    /*删除地址*/
    $('.delate_add').click(function(){
        layer.open({
          type: 1,
          title:false,
          skin: 'de_txt', //样式类名
          closeBtn: 0, //不显示关闭按钮
          shift: 2,
          area:['570px','185px'],
          shadeClose: true, //开启遮罩关闭
          content: '<div class="tlt"><a href="javascript:" class="iconfont">&#xe627;</a><p>确认删除您的地址？</p><a id="de_ok" href="javascript:">确认</a><a id="de_no" href="javascript:">取消</a></div>'
        });
    });
    
    /*设为默认地址*/    
    var $default=$('.do_default');      //默认按钮
    var $default_add=$('.default_add'); //默认地址图标

    $default.click(function(){
      var index=$default.index(this);                   //默认按钮索引值
      $('.do_default').eq(index).hide();
      $('.default_add').eq(index).show();
    });



});
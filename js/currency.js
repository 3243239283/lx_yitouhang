//通过主模块，运用AMD规范定义的的require()函数调用其他模块。这里分别是(jquery.js)、、、等子模块。
require(['jquery','layer','currency','cssjs!layercss'], function (){
    //require()函数接受两个参数。
    //第一个参数是一个数组，表示所依赖的模块，上例就是['moduleA', 'moduleB', 'moduleC']，即主模块依赖这三个模块；
    //第二个参数是一个回调函数，当前面指定的模块都加载成功后，它将被调用。
    //加载的模块会以参数形式传入该函数，从而在回调函数内部就可以使用这些模块。
    /*反馈意见或建议*/
    $('#proposal').click(function(){
        layer.open({
          type: 1,
          title:false,
          skin: 'pro_txt', //样式类名
          closeBtn: 0, //不显示关闭按钮
          area:['620px','300px'],
          shadeClose: true, //开启遮罩关闭
          content: '<div class="pro"><p class="pro_head">请描述您的意见或建议</p><div class="pro_area"><textarea placeholder="请输入200字以内信息"></textarea></div><a id="pro_yes" href="javascript:">提交</a></div>'
        });
    });
    
});
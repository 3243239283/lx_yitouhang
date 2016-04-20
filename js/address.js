//通过主模块，运用AMD规范定义的的require()函数调用其他模块。
require(['jquery','layer','validata','currency','cssjs!layercss'], function (){
  //我的地址
  $.ajax({
    url:"../js/json/address.json",
    dataType:"json",
    type:"get",
    success:function(data){         //0:未实名 1:已实名
      for (var i = 0; i<data.length; i++) {
        var address_txt='<div class="addson">'
                      +'<div class="son_tlt">'
                      +    '<span>'+data[i].name+'</span>'
                      +    '<span>'+data[i].phone+'</span>'
                      +    '<span class="default_add right" style="display:none;">默认地址</span>'
                      +    '<br/>'
                      +    '<span>'+data[i].address+'</span>'
                      +  '</div>'
                      +  '<div class="add_btn right">'
                      +      '<a href="javascript:">修改</a>'
                      +      '<a class="delate_add" href="javascript:">删除</a>'
                      +      '<a class="do_default font_blue" href="javascript:">设为默认</a>'
                      +  '</div>'
                      +'</div>'
        $('.add').prepend(address_txt);
      }
    }
  });    

  $('.add').on('click', '.delate_add', function(event) {
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

  $('.add').on('click', '.do_default', function(event) {
    var index=$('.do_default').index(this);                   //默认按钮索引值
    $('.do_default').eq(index).hide();
    $('.default_add').eq(index).show();
  });

});
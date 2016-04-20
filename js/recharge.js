//通过主模块，运用AMD规范定义的的require()函数调用其他模块。
require(['jquery','currency','validata'], function (){
  $('#re_money').validate({
        rules: {
          chargemoney:{
              required: true,
              digits:true,
              min:1
          }
      },
      messages: {
          chargemoney:{
              required:'充值金额不能为空',
              digits:'金额必须是整数',
              min:'充值金额不能小于1'
          }
      },
      errorPlacement:function(error,element) {  
        error.appendTo(element.next(".errorbox"));
      }
    });
  $('#go_pay').click(function(){
    $('#re_money').submit();
  });

});
//通过主模块，运用AMD规范定义的的require()函数调用其他模块。
require(['jquery','currency','WdatePicker'], function (){
	//投资类型分类
    var $record=$('.re_class a');
    $record.click(function(){
      $(this).addClass('re_click').siblings().removeClass('re_click');
      var index=$record.index(this);
      $('.record_content>div').eq(index).show().siblings().hide();      
    });

});

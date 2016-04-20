//通过主模块，运用AMD规范定义的的require()函数调用其他模块。
require(['jquery','currency','validata'], function (){
    $('#money_form').validate({
      	rules: {
        	drawinput:{
          		required: true,
          		digits:true,
        		min:10
	        },
	        txpassword:{
	          	required: true,
	          	remote:{                                          //验证交易密码是否正确
	          		type:"POST",
               		url:"",
                	data:{
                		txpassword:function(){return $(".tx_password").val();}
               		}
             	}
	        }
	    },
    	messages: {
        	drawinput:{
          		required:'提现金额不能为空',
         		digits:'提现金额必须是整数',
          		min:'提现金额不得少于10元'
        	},
        	txpassword:{
          		required: '交易密码不能为空',
          		remote:'交易密码错误'
        	}
    	},
      	errorPlacement:function(error,element) {  
      		error.appendTo(element.next(".errorbox"));
   	  	}

    });
    $('#next_btn').click(function(){
    	$('#money_form').submit();
    });

});
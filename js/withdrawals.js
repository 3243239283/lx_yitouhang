//通过主模块，运用AMD规范定义的的require()函数调用其他模块。这里分别是(jquery.js)、、、等子模块。
require(['jquery','currency','validata'], function (){
    //require()函数接受两个参数。
    //第一个参数是一个数组，表示所依赖的模块，上例就是['moduleA', 'moduleB', 'moduleC']，即主模块依赖这三个模块；
    //第二个参数是一个回调函数，当前面指定的模块都加载成功后，它将被调用。
    //加载的模块会以参数形式传入该函数，从而在回调函数内部就可以使用这些模块。
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
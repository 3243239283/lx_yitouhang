//通过主模块，运用AMD规范定义的的require()函数调用其他模块。
require(['jquery','currency','validata'], function (){
    $('#signin_form').validate({
      	rules: {
        	pwd:{
          		required: true,
              rangelength:[6,20]
	        },
	        newpwd:{
	          	required: true,
	          	remote:{
	          		type:"POST",
               		url:"",
                	data:{
                		txpassword:function(){return $(".newpwd").val();}
               		}
             	}
	        },
          newpwd_two:{
            required: true,
             equalTo:'.newpwd',
              remote:{
                type:"POST",
                  url:"",
                  data:{
                    txpassword:function(){return $(".newpwd_two").val();}
              }
            }
          }
	    },
    	messages: {
        	pwd:{
          		required:'旧密码不能为空',
              rangelength:'密码长度为6~20个字符长度之间'
        	},
        	newpwd:{
          		required: '新登录密码不能为空',
          		remote:'登录密码错误'
        	},
          newpwd_two:{
              required: '登录密码不能为空',
              equalTo:'两次输入密码不相同',
              remote:'登录密码错误'
          }
    	},
      errorPlacement:function(error,element) {  
        error.appendTo(element.next(".errorbox"));
      }

    });
    $('#keep').click(function(){
    	$('#signin_form').submit();
    });

});
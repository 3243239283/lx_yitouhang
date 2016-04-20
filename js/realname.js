//通过主模块，运用AMD规范定义的的require()函数调用其他模块。
require(['jquery','currency','validata','validMethod'], function (){
    $('#rename').validate({
      	rules: {
        	name:{
          		required: true,
          		remote:{
	          		type:"POST",
               		url:"",
                	data:{
                		txpassword:function(){return $(".tx_password").val();}
               		}
             	}
	        },
	        idcard:{
	          	required: true,
	          	isIdCardNo:true,
	          	remote:{
	          		type:"POST",
               		url:"",
                	data:{
                		txpassword:function(){return $(".tx_password").val();}
               		}
             	}
	        }
	    },
    	messages: {
        	name:{
          		required:'姓名不能为空',
          		remote:'姓名信息错误'
        	},
        	idcard:{
          		required: '身份证号码不能为空',
          		remote:'身份证号码错误'
        	}
    	},
    	errorPlacement:function(error,element) {  
    		error.appendTo(element.next(".error_txt"));
 	  	}

    });
    $('#re_start').click(function(){
      $('#rename').submit();
    })

});
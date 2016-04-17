//通过主模块，运用AMD规范定义的的require()函数调用其他模块。这里分别是(jquery.js)、、、等子模块。
require(['jquery','layer','currency','validata','validMethod','cssjs!layercss'], function (){
    //require()函数接受两个参数。
    //第一个参数是一个数组，表示所依赖的模块，上例就是['moduleA', 'moduleB', 'moduleC']，即主模块依赖这三个模块；
    //第二个参数是一个回调函数，当前面指定的模块都加载成功后，它将被调用。
    //加载的模块会以参数形式传入该函数，从而在回调函数内部就可以使用这些模块。
    $('#tran_formtwo').validate({
      rules: {
        code:{
          required: true,
          digits:true,
          rangelength:[6,6]
          remote:{            //验证验证码是否存在
            type:"POST",
            url:"",
            data:{
              code:function(){return $(".code").val();}
            }
          }                
        },
        name:{
          required: true,
          remote:{            //验证验姓名是否存在
            type:"POST",
            url:"",
            data:{
              name:function(){return $(".name").val();}
            }
          }
        },
        idcard:{
          required: true,
          isIdCardNo:true,
          remote:{            //验证验身份证号码是否存在
            type:"POST",
            url:"",
            data:{
              idcard:function(){return $(".idcard").val();}
            }
          }
        }
      },
      messages: {
        code:{
          required:'验证码不能为空',
          digits:'验证码必须是整数',
          rangelength:'请输入6位字符的正确验证码',
          remote:'验证码错误'
        },
        name:{
          required: '姓名不能为空',
          remote:'姓名不存在'
        },
        idcard:{
          required: '身份证号码不能为空',
          remote:'身份证号码错误'
        }
      }
    });

    $('#tr_next').click(function(){
      
      if($('#tran_formtwo').submit()){
        $('.trantwo').hide();
        $('.tranone').show();
        return true;        
      }else{
        return false;
      }
    });
    

});
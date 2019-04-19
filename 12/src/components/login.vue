<template>
    <div class="login_wrap">
    <div class="from_wrap">
<el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm ">
  <el-form-item label="用户名" prop="user">
    <el-input type="text" v-model="ruleForm.user" autocomplete="off"></el-input>
  </el-form-item>
  <el-form-item label="密码" prop="pass">
    <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
  </el-form-item>
  <el-form-item label="手机号" prop="phone" v-show="isShow">
    <el-input v-model="ruleForm.phone"></el-input>
  </el-form-item>
  <el-form-item class="submit">
    <el-button type="primary" @click="submitForm" v-show="!isShow">登陆</el-button>
    <el-button type="primary" @click="registerForm" v-show="isShow">注册</el-button>
  </el-form-item>
</el-form>
 <a href="javascript:;" @click="toRegister" v-show="!isShow">还没注册？</a>
    </div>
    </div>
</template>

<script>
    export default {
        data(){
         var  validateUser = (rule,value,callback)=>{
              if(!value){
                 return callback(new Error("用户名不能为空"))
              }else{
                  callback()
              }
          };
         var validatePass = (rule,value,callback)=>{
              if(!value){
                 return callback(new Error("密码不能为空"))
              }else if(value>5&&value<20){
                  callback()
              }else{
                  return callback(new Error("密码长度不合格"))
              }
          };
           var validatePhone = (rule,value,callback)=>{
              if(!value){
                 return callback(new Error("请填写手机号"))
              }else if(/^(((13[0-9])|(14[5-7])|(15[0-9])|(17[0-9])|(18[0-9]))+\d{8})$/.test(value)){
                  callback()
              }else{
                  return callback(new Error("请输入合法的手机号"))
              }
          };
            return{
                isShow:false,
                isSub:true,
                ruleForm:{
                    user:'',
                    pass:'',
                    phone:''
                },
                rules:{
                    user:[
                        {
                           validator:validateUser,trigger: 'blur'
                        }
                    ],
                    pass:[
                        {
                           validator:validatePass,trigger: 'blur'
                        }
                    ],
                    phone:[
                        {
                           validator:validatePhone,trigger: 'blur'
                        }
                    ]
                }
            }
        },
        methods:{
            submitForm(){
             
            },
            toRegister(){
             this.isShow = true
            },
            registerForm(){
               setTimeout(()=>{
                this.isShow = false
               },1000)
            }
        }
    }
</script>

<style lang="scss" scoped>
.login_wrap{
    height: 100%;
    background: url("../assets/timg.jpg") no-repeat center;
    background-size:100%;
}
.from_wrap{
     width: 350px;
    height: 350px;
    // border: 1px solid red;
    width: 350px;
    height: 350px;
    box-sizing: border-box;
    position: fixed;
    right: 10%;
    top: 20%;
    background: rgba(0,0,0,0.5);
    padding-top: 55px;
    padding-right: 58px;
    .submit{
        margin-left: 55px
    }
    /deep/ .el-form-item__label{
        color: #fff;
    }
    a{
        display: block;
        text-align: center;
        margin-left: 90px;
    }
}
</style>
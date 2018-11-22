<template>
  <div id='userLogin'>
    <el-form :model="userInfo" :rules="userInfoValidate" ref="userLogin" :hide-required-asterisk='true' class='userLogin' inline>
      <el-form-item label="用户名" prop="user" label-width='70px'>
        <el-input type="text" v-model="userInfo.user" autocomplete="off" name='user' size='small'></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password" label-width='70px'>
        <el-input type="password" v-model="userInfo.password" autocomplete="off" name='password' size='small'></el-input>
      </el-form-item>
      <el-form-item class='loginButtonGroup'>
        <el-button type='primary' size='small'>注册</el-button>
        <el-button type='primary' size='small' @click='sendLogin'>登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
/**
 * @author nimdean 
 * @desc 登录页，后期将使用nodejs的svg-captcha插件做验证码校验之用，加密用crypto-js
 * @date 2018.11.21
 */
  const crypto = require('crypto'); // 引入加密插件
  export default{
      data(){
          return{
              userInfo: {
                user: '',
                password: ''
              },
              userInfoValidate: {
                user: [
                  { required: true, message: '请输入用户名', trigger: 'blur' }
                ],
                password: [
                  { required: true, message: '请输入密码', trigger: 'blur' }
                ]
              }
          }
      },
      methods:{
        sendLogin(){
          const hash = crypto.createHash('md5');
          hash.update(this.userInfo.password);
          let cryptoPassword = hash.digest('hex');

          console.log(cryptoPassword);
        }
      }
  }
</script>

<style scoped>
  #userLogin{
    width:100%;
    height:100%;
    display:flex;
    justify-content: center;
    align-items: center;
  }
  .userLogin{
    width:280px;
    padding:10px;
    background:rgba(0,0,0,0.3);
    border-radius:5px;
  }
  .loginButtonGroup{
    text-align:center;
    width:calc(100% - 20px);
  }
</style>
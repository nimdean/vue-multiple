<template>
  <div id="login">
    <h4>登录页部分</h4>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'Login'
}
</script>

<style>
#login {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

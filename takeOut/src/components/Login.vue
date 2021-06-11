<template>
    <div>
 <van-form>
  <van-field
    v-model="username"
    name="用户名"
    placeholder="用户名"
  />
  
  <van-field
    v-model="password"
    type="password"
    name="密码"
    placeholder="密码"

  >
    <template #right-icon>
    <van-switch v-model="switchChecked" size="20" />
  </template>
  </van-field>
  <div style="margin: 16px;">
    <van-button round block type="primary" native-type="submit">登录</van-button>
  </div>
</van-form>
    </div>
</template>
<script>
export default {
    data(){
        return{
            username:'',
            password:"",
            switchChecked:false
        }
    }
}
</script>
<style>
.van-field{
    border: 1px solid #EAEAEA;
    width: 300px;
    height: 40px;
    margin: 0 auto;
    background: white;
    border-radius: 3px;
    margin-top: 15px;
}
.van-button{
    width: 280px;
      margin: 0 auto;
}
</style>
<template>
    <div>
        <h1>硅谷外卖</h1>
<van-tabs v-model="active">
  <van-tab title="登录"  to="/login">
  </van-tab>
  <van-tab title="注册" to="/register"></van-tab>

</van-tabs>
    </div>
</template>
<script>
export default {
    data(){
        return{
          active:0
        }
    }
}
</script>
<style>
h1{
  color: #02A774;
 text-align: center;
 margin-top: 100px;
}
</style>
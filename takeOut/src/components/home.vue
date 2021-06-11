<template>
    <div>
      <van-nav-bar title="定位" >
  <template #left>
   <van-icon name="search" size="18" />
  </template>
  <template #right>
  <a href="#/homepage">登录</a>|
  <a href="#/homepage">注册</a>
  </template>
</van-nav-bar>
<van-grid :column-num="4">
  <van-grid-item v-for="item in Category" :key="item.id" :icon="'http://47.95.13.193:80/takeOutSystem-1.0-SNAPSHOT/'+item.photo" :text="item.name" />
</van-grid>
<van-tabbar v-model="active">
  <van-tabbar-item icon="home-o" to="/">外卖</van-tabbar-item>
  <van-tabbar-item icon="search" to="/search">搜索</van-tabbar-item>
    <van-tabbar-item icon="bill-o" to="/orderform">订单</van-tabbar-item>
  <van-tabbar-item icon="contact" to="/my">我的</van-tabbar-item>
</van-tabbar>
<div class="wap"> 
<van-icon name="wap-nav"/> 附近商家
</div>

<div v-for="item in merchant" :key="item.id">
  <a :href="'/#/particulars/'+item.id">
<van-card
  num="2"
  :price="item.minPrice+'起送/配送费约'+'¥'+item.transportationPrice" 
  :desc="item.notice"
  :title="item.name"
  :thumb="'http://47.95.13.193:80/takeOutSystem-1.0-SNAPSHOT/'+item.photo"
>
  <template #tags>
 <van-rate v-model="item.goodsScore" /><span>{{item.score}}</span>
   <template >
  <span class="sp">  月销量:{{item.sales}}</span>
  </template>
     <template>
 <van-tag color="#F6CC98" plain>联想教育</van-tag>
  </template>
  </template>
</van-card>
</a>
</div> 
 </div>
</template>
<script>
export default {
    data(){
        return{
        Category:""  ,//存储请求的图片
        active:0,
        merchant:"" //商家信息
        }
    },
 beforeRouteEnter(to,from,next){
    next(function(vm){
        vm.$request.post("/biz/queryBigCategory").then(function(res){   
         vm.Category=res.data
          console.log(res.data)
        });
    
    })
},
beforeRouteUpdata(to,from,next){
    var app=this
      this.$request.post("/biz/queryBigCategory").then(function(res){
            console.log(res)
         app.Category=res.data
        });
      next()
},
created(){
    var app=this
   this.$request.get("/biz/queryAllShopsInfo").then(function(res){
       console.log(res.data)
       app.merchant=res.data
   }) 
}
}
</script>
<style>
.wap{
    font-size: 14px;
    margin-top: 10px;
    margin-left: 10px;
    line-height: 20px;
   
}
.sp{
  color:#F6CC98 ;
}
.van-tag{
  margin-left: 10px;
}
</style>
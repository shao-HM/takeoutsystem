<template>
    <div>
     <div  class="top">搜索</div>
    <van-search
  v-model="value"
  show-action
  placeholder="请输入搜索关键词"
    @search="onSearch"
    @cancel="onCancel"
>
  <template #action>
    <div class="btn" @click="onSearch">搜索</div>
  </template>
</van-search>

<div  v-for="item in merchant" :key="item.id">
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
</div> 


<van-tabbar v-model="active">
  <van-tabbar-item icon="home-o" to="/">外卖</van-tabbar-item>
  <van-tabbar-item icon="search" to="/search">搜索</van-tabbar-item>
    <van-tabbar-item icon="bill-o" to="/orderform">订单</van-tabbar-item>
  <van-tabbar-item icon="contact" to="/my">我的</van-tabbar-item>
</van-tabbar>
    </div>
</template>
<script>
export default {
    data(){
        return{
            merchant:'',
            value:"",
            active:1,
        }
    },

    created(){
    var app=this
   this.$request.get("/biz/queryAllShopsInfo").then(function(res){
       console.log(res.data)
       app.merchant=res.data
   }) 
},
methods:{
       onSearch() {
           var app = this
        this.$request.get("/biz/queryAllShopsInfoByName?name="+this.value).then(function(res){
            console.log(res.data)
                 app.merchant=res.data
           
        })
    },
    onCancel() {
       
    },
}
}
</script>
<style>
.top{
    width: 100%;
    height: 30px;
    background: #00A67C;
    color: white;
    text-align: center;
    line-height: 30px;
}
.btn{
    padding-left: 5px;
    padding-right: 5px;
    background: #4AA478;
    color:white;
}
</style>
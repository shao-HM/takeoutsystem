<template>
    <div>
<div class="top">商家详情</div>
<div class="content">
<van-image
  width="100"
  height="100"
  :src="'http://47.95.13.193:80/takeOutSystem-1.0-SNAPSHOT/'+this.details.photo"
/>
<div>
    <van-tag color="#FFED08"><b style="color:black">品牌</b></van-tag>
    <span>{{details.name}}</span>
</div>
<div>
    <span>{{details.goodsScore}}</span>
    <span>月售{{details.sales}}单</span>
    <span>联想教育</span>
    <span>约{{details.transportationPrice}}分钟</span>
    <span>距离{{details.distance}}米</span>
</div>
<div>
    <van-tag color="#F1EE4D"><b style="color:white">首单</b></van-tag>
    <span  v-for="item in coupons" :key="item.id">{{item.tag}}{{item.contents}}</span>
    <span>{{coupons.length}}个优惠</span>
</div>
</div>
<van-tabs v-model="activeName">
  <van-tab title="点餐" name="a">  
<van-sidebar v-model="activeKey" class="add">
  <van-sidebar-item :title="item.name"  v-for="item in classified" :key="item.id"  @click="onclass(item.id)"/>
</van-sidebar>

  </van-tab>
  <van-tab title="评价" name="b">
      <div class="left">
          <b  style="color:#F19D39; font-size:20px">{{details.score}}</b>
          <div>综合评分</div>
          <div style="color:#ccc">高于周边商家99%</div>
      </div>
      <div class="right">
    
      </div>
  </van-tab>
  <van-tab title="商家" name="c">内容 3</van-tab>
</van-tabs>
<div  v-for="item in commodity" :key="item.id">
   <van-card class="you"
  num="2"
  price="2.00"
  :desc="item.info"
  :title="item.name"
  :thumb="'http://47.95.13.193:80/takeOutSystem-1.0-SNAPSHOT/'+item.photo"
/> 
</div>
    </div>
</template>
<script>
export default {
props:['id'],
data(){
    return{
        details:'',
        coupons:'',
        activeName:'a',
        activeKey:'0',
        value:'',
        classified:"",//分类
        commodity:""//分类商品信息
    }
},
created(){
    var app=this
    //商家基本信息
   this.$request.get("/biz/queryInfoByShopId?shopId="+this.id).then(function(res){
       console.log(res.data)
       app.details=res.data
   }) ;
   //商家优惠活动
      this.$request.get("/biz//querySpecialOfferByShopId?shopId="+this.id).then(function(res){
       console.log(res.data)
       app.coupons=res.data
   }) 
},
//分类信息
beforeRouteEnter(to,from,next){
   next(function(vm){
       vm.$request.get("/biz/queryFoodCategory?id="+vm.id).then(function(res){
           console.log(res.data)
            vm.classified=res.data;
           vm.$request.get("biz/queryFoodinfoByShopIdAndFoodCategoryId?shopId="+vm.id+"&foodcategoryId="+vm.classified[0].id).then(function(res){
            console.log(res.data)
            vm.commodity=res.data
           })
       })
   })
},
beforeRouteUpdata(to,from,next){
    var app=this;
    this.$request.get("/biz/queryFoodCategory?id="+this.id).then(function(res){
        console.log(res.data)
    })

},
methods:{
     onclass(index){
         var app=this
       this.$request.get("biz/queryFoodinfoByShopIdAndFoodCategoryId?shopId="+this.id+"&foodcategoryId="+index).then(function(res){
           console.log(res.data)
           app.commodity=res.data
       }) 
     }
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
.content{
    text-align: center;
}
.left{

    text-align: center;

}
.add{
    float: left;
}
.right{
    width: 200px;
}
.you{

    position: static;
}
</style>
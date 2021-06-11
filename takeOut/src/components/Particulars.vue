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
<van-sidebar v-model="activeKey">
  <van-sidebar-item title="折扣" />
  <van-sidebar-item title="进店必买" />
  <van-sidebar-item title="新品" />
   <van-sidebar-item title="福利优惠" />
  <van-sidebar-item title="精品菜品" />
  <van-sidebar-item title="人气套餐" />
    <van-sidebar-item title="招牌菜区" />
  <van-sidebar-item title="爆款疯抢" />
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
.right{
    width: 200px;
}
</style>
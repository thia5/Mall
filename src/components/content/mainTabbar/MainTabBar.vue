<template>
    <tab-bar>
      <tab-bar-item path="/home"> 
        <img slot='item_icon' src="@/assets/img/tabbar/店铺.png" alt="">
        <div slot="item_text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/category">
        <img slot='item_icon' src="@/assets/img/tabbar/分类.png" alt="">
        <div slot="item_text">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/car">
        <img slot='item_icon' src="@/assets/img/tabbar/购物车.png" alt="">
        <div slot="item_text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/profile">
        <img slot='item_icon' src="@/assets/img/tabbar/我的.png" alt="">
        <div slot="item_text">我的</div>
      </tab-bar-item>
    </tab-bar>
</template>


<script>

import TabBar from '../../common/tabbar/TabBar'
import TabBarItem from '../../common/tabbar/TabBarItem'

export default {
name:'maintabbar',
components:{
    TabBar,
    TabBarItem
}
}
</script>

<style>

</style>
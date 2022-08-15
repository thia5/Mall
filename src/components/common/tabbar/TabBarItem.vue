<template>
  <div class="tabbar-item" @click="itemclick">
    <slot name='item_icon'></slot>
    <slot name='item_text'></slot>
  </div>
</template>

<script>
export default {
name:"tabbaritem",
props: {
    path:String
},
methods: {
    itemclick(){
        this.$router.replace(this.path)
    }
}
}
</script>

<style>
.tabbar-item {
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 14px;
}
.tabbar-item img{
    width: 24px;
    height: 24px;
    vertical-align: middle;
}
</style>
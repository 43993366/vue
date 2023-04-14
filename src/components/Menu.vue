<template>
  <!-- 导航栏 -->
  <div class="nav">
		<div v-for="(item,index) in menus" :key="index" 
		:class="menuIndex==index?`menu-active`:`menu`" 
		@click="menuClick(index)">{{item}} 
		</div>
	</div>
</template>

<script>
export default {
    name:'TopMenu',
    data(){
      return{
          menuIndex:0,
          menus:['动态','热门','精选','推荐'],
      }
		},
		methods:{
			menuClick(index) {
				this.menuIndex = index;
				this.$emit("MenuClick",index);
        //
        console.log(index)
        //
			}
		},
}
</script>

<style scoped>
.nav {
  position: absolute;
  bottom:0;
  width: 100%;
  margin-top: 10px;
  background-color: #db2d1f;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  
}
.menu {
  height: 25px;
  font-size: 20px;
  line-height: 25px;
  margin: 5px 10px;
}
.menu-active {
  box-sizing: border-box;
  font-size: 25px;
  line-height: 25px;
  margin: 5px 10px;
  border-bottom: 2px solid skyblue;
}
</style>
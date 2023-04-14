<template>
  <div>
    <div class="top">
    <!-- 搜索栏 -->
    <TopSearch :Num="2">
      <!-- 插槽 -->
      <template v-slot:left="slotPro">
        <div class="slot slotleft">
          <svg class="icon topicon" aria-hidden="true">
            <use xlink:href="#icon-dianzan"></use>
          </svg>
          <div v-show="slotPro.heartNum != 0" class="heart-num">
            {{ slotPro.heartNum }}
          </div>
        </div>
      </template>
      <template #right>
        <div class="slot slotright">
          <svg class="icon topicon iconright" aria-hidden="true">
            <use xlink:href="#icon-fenxiang"></use>
          </svg>
        </div>
      </template>
    </TopSearch>
    <!--菜单导航 -->
    <Menu @MenuClick="MenuclickHandler"></Menu>
    </div>
    <!-- 内容展示 -->
    <div class="main">
      <router-view name="home"></router-view>
    </div>
  </div>
</template>

<script>
import TopSearch from "../components/TopSearch.vue";
import Menu from "../components/Menu.vue";

export default {
  name: "HomeView",
  components: {
    TopSearch,
    Menu,
  },
  methods: {
    MenuclickHandler: function (e) {
      this.menuIdx = e;
      switch(this.menuIdx){
        case 0: this.$router.push("/home/Dynamic"); console.log('000');break;
        case 1: this.$router.push("/home/HotShow"); console.log('111');break;
        default: this.$router.back();break;
      }
    },
  },
};
</script>

<style scoped lang="less">
@slot-wh:45px;
@slot-top:10px;
@num-left:@slot-wh - 35px;

.top {
  height: calc(12vh);
  min-height: 100px;
  position: relative;
  background-color: #db2d1f;
}
.slot {
  display: inline-block;
  width: @slot-wh;
  height: @slot-wh;
  position: absolute;
  color: rgb(255, 255, 255);
}
.slotleft {
  top: @slot-top;
  left: 8px;
  
}
.slotright {
  top: @slot-top;
  right: 15px;
}
/* 顶部左插件图标单独设置宽高比 */
.topicon {
  width: 100%;
  height: 100%;
}
.heart-num {
  width: 25px;
  text-align: center;
  font-size: 15px;
  position: absolute;
  top: 10px;
  left: @num-left;
  overflow: hidden;
}
</style>



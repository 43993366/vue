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
  data(){
			return{
				imglist:[{
                    url: require('../../public/images/zaogao.jpg'),
                    name: '糟糕!!!'
                  },{
                    url: require('../../public/images/3.jpeg'),
                    name: '蓝色！'
                  },{
                    url: require('../../public/images/2.jpeg'),
                    name: '黄色!'
                  },{
                    url: require('../../public/images/4.jpeg'),
                    name: '蓝黄混合'
                  }
                ]
			}
	},
  methods: {
    MenuclickHandler: function (e) {
      this.menuIdx = e;
      switch(this.menuIdx){
        case 0: this.$router.push({name:"Dynamic",params:{imglist:this.imglist}});break;
        case 1: this.$router.push(
                { 
                  name:"HotShow",
                  params:{
                    imglist:this.imglist
                  }
                }); break;
        case 2: 
          this.$router.push({
            name:"image-list",
            params:{id:"M"}
          });break;
        case 3: 
          this.$router.push({
            name:"image-list",
            params:{id:"F"}
          });break;
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
.main {
  box-sizing: border-box;
  width: 100%;
  height:calc(80vh);
  background-color: #ac6666;
  overflow-y: scroll;
}
</style>



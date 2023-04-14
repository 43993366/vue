<template>
  <div id="app" class="container">
    <router-view/>
    <div class="footer">
      <FooterMenu></FooterMenu>
    </div>
  </div>
</template>

<script>

  import FooterMenu from './components/FooterMenu.vue';

  export default {
    components:{
      FooterMenu
    },
  }
</script>

<style lang="less">
.container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #fcfcfc;
  font-size: 25px;
}

.footer {
  width: 100%;
	bottom:0px;
  height:calc(8vh);
  min-height: 60px;
	left: 0;
  background-color: #db2d1f;
  position: fixed;
}
</style>
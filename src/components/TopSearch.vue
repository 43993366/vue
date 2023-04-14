<template>
   <div class="search">
        <slot name="left" :heartNum="Num">
              {{heartNum}}
        </slot>
        <div class="input-container">
          <svg class="icon-sousuo" aria-hidden="true">
            <use xlink:href="#icon-sousuo"></use>
          </svg>
          <input class="searchInput" type="text" value="" placeholder="请输入要搜索的内容！">
        </div>
        <slot name="right"></slot>
	</div>
</template>

<script>
export default {
    name:'TopSearch',
    props:['Num'],
    data() {
        return {
          
        }
    },
}
</script>

<style scoped="scoped">
.search {
  min-height: 50px;
  width: 100%;
  position: relative;
}

.input-container{
  margin: 0 auto;
  width: 65%;
}
.icon-sousuo{
  width: 35px;
  height: 35px;
  position: absolute;
  top: 15px;
  z-index: 2;
}
input {
  box-sizing: border-box;
  width: 100%;
  height: 45px;
  font-size: 27px;
  padding-left: 35px;
  border-radius: 20px;
  border: none;
  margin-top: 10px;
}
</style>
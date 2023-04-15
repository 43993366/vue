<template>
  <div class="footermenu">
    <router-link class="default" v-for="(item,index) in menus" :key="index" 
    :to="item.link">
      <svg class="icon" aria-hidden="true" >
           <use :xlink:href="`${item.icon}`"></use>
      </svg>
    </router-link> 
  </div>
</template>

<script>
export default {
    name:'FooterMenu',
    data() {
        return {
            menus:[{
                link:'/home',
                icon:'#icon-chakansousuo',
                url:''
            },{
                link:'/about',
                icon:'#icon-daka',
            },{
                link:'/msg',
                icon:'#icon-huodong',
                
            },{
                link:'/user',
                icon:'#icon-yonghu',
            }],
        }
    },
    methods:{
        tabClick(index){
            this.tabIndex=index;
            this.$emit('FooterClick',index);
        },
    }
}
</script>

<style>
.footermenu{
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-around;
}
.default{
  opacity: 0.5;
}
.router-link-exact-active,.router-link-active{
  opacity: 1;
}

a{
  text-decoration: none;
}
</style>
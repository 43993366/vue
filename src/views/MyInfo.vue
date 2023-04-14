<template>
  <div class="container">
    <!-- src="../../public/images/2.jpeg" -->
        <div class="info"> 
            <div class="img"><img  src="../../public/images/4.jpeg"  alt="头像"></div>
            <div class="name">
                学号:5222511135<br>
                姓名:陈世强
            </div>
        </div>
        <div class="showTitle">
            实验6
        </div>
  </div>
</template>

<script>


export default {
    name:'MyInfo',
    props:['img'],
}
</script>

<style scoped>
.container{
    width: 100%;
    height: 100%;
    text-align: center;
    background-color: #ffffff;
}
.info{
    margin: 0 auto;
    margin-top:calc(20vh);
    width: 80%;
}
img{
    height: 100px;
    width: 100px;
    border-radius: 50%;
}
.name{
    font-size: 35px;
}
.showTitle{
    font-size: 50px;
}
</style>
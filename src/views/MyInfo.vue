<template>
  <div class="container">
    <!-- src="../../public/images/2.jpeg" -->
        <div class="info"> 
            <div class="img"><img  src="../../public/images/4.jpeg"  alt="头像"></div>
            <div class="name">
                学号:{{ student.sno }}<br>
                姓名:{{ student.name }}
            </div>
        </div>
        <div class="showTitle">
            {{student.desc}}
        </div>
  </div>
</template>

<script>


export default {
    name:'MyInfo',
    props:['img'],
    data(){
        return{
            student:{}
        }
    },
    created() {
		this.axios.get("/api/student").then(res=>{
			this.student=res.data;
		})
        
	},
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
<template>
	<div class="content">
		<div v-for="(item,index) in imglist" :key="index" class="item">
			<div>
				<img :src="item.url" />
				<div class="name-text">{{item.name}}</div>
			</div>
		</div>

	</div>
</template>

<script>

	import axios from 'axios';	

	export default {
		name:"Dynamic",
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
		methods:{
			async getMockData(){
				let id=this.$route.params.id;
				let url="/api/mockData";
				if((id!=undefined)&&( id!="")) url+=`/${id}`;
				let result =await axios.get(url);
				this.imglist=result.data;
			}
		},
		watch:{
			$route(){
				this.getMockData();
			}
		},
		created() {
			this.getMockData();
		}
	};
</script>

<style scoped="scoped">
	.content {
		width: 100%;
		height: 100%;
		display: flex;
		flex-flow: row wrap;
		align-content: flex-start
	}

	.item {
		margin: 10px auto;
		text-align: center;
		
		height: 150px;
	}

	.name-text {
		margin-top: -50px;
		color:rgb(255, 0, 0);
	}
	img{
		border-radius: 10px;
		width: 150px;
		height: 150px;
		object-fit: cover;
	}
</style>

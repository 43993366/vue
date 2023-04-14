<template>
	<div class="content">
		<div v-for="(item,index) in imglist" :key="index" class="item">
			<div class="show">
				<img :src="item.url" />
				<div class="name-text">{{item.name}}</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name:'HotShow',
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
		}
	}
</script>

<style scoped="scoped">
	.content {
		width: 100%;
		height: 100%;
	}

	.item {
		width: 100%;
		margin: 10px 0;
	}
	.name-text {
		color: rgb(11, 97, 155);
	}
	.show{
		margin: 0 auto;
		text-align: center;
	}
	img{
		border-radius: 10px;
		width: 300px;
		height: 100%;
		object-fit: contain;
	}
</style>

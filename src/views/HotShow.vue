<template>
	<div class="content">
		<div v-for="(item,index) in img" :key="index" class="item">
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
				img:[]
			}
		},
		mounted(){
			this.img=this.$route.params.imglist
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

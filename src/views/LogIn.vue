<template>
  <div class="status">
        <div class="cotent">
                <div class="form">
                    <label for="account">
                        <span>账号:</span> 
                    </label>
                    <input id="account" type="text" placeholder="账号" v-model="user">
                    <label for="pwd">
                        <span>密码:</span> 
                    </label>
                    <input id="pwd"  type="password" placeholder="密码" v-model="pwd">
                    <div class="button">
                        <input type="button" value="登陆" @click="login">
                        <input type="button" value="注册">
                    </div>
                </div>
                
        </div>
    </div>
</template>

<script>
export default {
    name:'LogIn',
    data(){
        return{
            user:'',
            pwd:'',
        }
    },
    methods:{
        login(){
            console.log('---',this.user,this.pwd);
            if(this.user==='123' && this.pwd==='123'){
                //验证通过 修改vuex中的flag
                
                this.$store.state.logFlag='true'
                this.$router.push({
                    name: 'user',
                    params:{
                        flag:this.$store.state.logFlag
                    }
                });
            }
        }
    },
    //每次挂在前判断一下是否登陆 登陆则直接带‘登陆标记’跳转
    mounted(){
        if(this.$store.state.logFlag==='true'){
            this.$router.push({
                name: 'user',
                params:{
                    flag:this.$store.state.logFlag
                }
            });
        }
    }
}
</script>

<style scoped lang="less">
.status{
    height:100vh;
    display: flex;
    justify-content: center;
    align-items: center;

}
.cotent{
    background-color: #ddd;
    height: 270px;
    width: 100%;
    margin: 0 auto;
    border-radius: 20px;
}
.form{
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 270px;
    height: 200px;
    margin: auto;
}
input[type='text'],input[type='password']{
    margin: 10px 0;
    padding-left: 10px;
    outline: none;
    height: 27px;
    width: 200px;
    border-radius: 7px;
    font-size: 20px;
    line-height: 20px;
}
label>span{
    font-size: 20px;
}
.form input[type='text']:focus,input[type='password']:focus{
    border-style:solid;
    border-color: #03a9f4;
    box-shadow: 0 0 10px #03a9f4;
}
.button{
    width:150px;
    margin: 20px auto;
    
}
input[type='button']{
    font-size: 20px;
    line-height: 20px;
    height: 30px;
    width: 50px;
    border-radius: 5px;
    margin-left: 20px;
}
</style>
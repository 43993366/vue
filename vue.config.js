const { defineConfig } = require('@vue/cli-service')
const fs = require("fs");
module.exports = defineConfig({
  transpileDependencies: true,
	devServer: {
		setupMiddlewares:(middlewares,devServer)=>{
			if (!devServer){
				throw new Error( "webpack-dev-server未定义");
			}
			devServer.app.get("/api/student",(req,res) => {
				res.jsonp({
					sno:"5222511135",
					name:"陈世强",
					desc: "实验6"
				})
			});
			devServer.app.get("/api/mockData",(req,res) =>{
				fs.readFile("MockData.json", "utf-8", (err, data) => {
				res.json(JSON.parse(data));
				return;
				})
			});			
			devServer.app.get("/api/mockData/:id", (req,res) =>{
				let id = req.params.id;
				fs.readFile("MockData.json", "utf-8", (err, data) => {
					let ret = [];
					JSON.parse(data).forEach(item => {
						if (item.id == id) ret.push(item);
					})
					res.json(ret);
				})
			})
			return middlewares;
		}
	}
})


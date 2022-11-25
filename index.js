const express=require("express")
const app=express()
const port=4000;
const cors=require("cors")
const bodyParser=require("body-parser")

app.use(bodyParser.urlencoded({
	extended:true
}))
app.use(bodyParser.json())

app.use(cors())


app.post("/newData",(req,res)=>{
	console.log(req.body)
	const {name,password,course,gender}=req.body
	console.log(name,password,course,gender,"is the solution")

})
app.listen(port,()=>console.log("server is started"))

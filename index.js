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
})
app.listen(port,()=>console.log("server is started"))

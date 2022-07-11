const express = require('express')
const bodyParser = require("body-parser")
const app = express()
const port = 3000
let weight;
let height;

const cat = {
    name: "wizy",
    legs: 4,
    tails: 2,
    enemies:["Dogs","Rat","Tiger","etc"]
};
let cats = []
app.use(bodyParser.urlencoded({ extended: true }))

for(let i = 0; i <10; i++){
    cats.push(cat)
}
app.get("/cats",(req,res)=>{
    res.send(cats)
    console.log(cats)
})



app.post("/",(req,res)=>{
    res.send(`the answer is ${parseInt(req.body.num1) + parseInt(req.body.num2)}`)
    //console.log(req.body.num1+req.body.num2)
   // console.log(`the answer is ${parseInt(req.body.num1)+parseInt(req.body.num2)}`)
})


app.get("/bmiCal",(req,res)=>{
    res.sendFile(__dirname+"/bmiCal.html")


});

app.post("/bmiCal", (req, res)=> {
   // 
    height = req.body.height;
    weight = req.body.weight;
    res.send(` Your BMI is ${calBmi(weight, height)}`)

    
})

app.get("/cal",(req,res)=>{
    res.sendFile(__dirname+"/index.html")
})

app.listen(port,()=>{
    console.log(`lestening toooo ${port}`)
})

function calBmi(w,h){
    let BMI = w/(h*h)
    return BMI;
}
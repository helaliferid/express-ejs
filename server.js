require("dotenv").config();
const express=require('express');
const port=8080;
const host='http://localhost';
const mongoose=require('mongoose');
const carServices= require('./services/cars.service');

const mongoUrl=process.env.MONGO_URL;

try {
    mongoose.connect(mongoUrl,()=>{
        console.log('Successfully connected to mongodb instance');
    });
    
} catch (error) {
    console.log('Unable to connect to mongodb instance', error);
}


const app=express();

// ejs 
app.set('views','./views');
app.set('view engine','ejs');

app.use(express.static('public'));



app.get('/',async (req,res)=>{
    let cars=await carServices.getAllCars()
    res.render('index',{cars});
})

app.get('/contact',async (req,res)=>{
    let result=await carServices.saveCar({
        brand:'Mercedes',
        model:'Kompressor',
        photo:'https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Mercedes-Benz_CL203_CLC180_Kompressor.JPG/800px-Mercedes-Benz_CL203_CLC180_Kompressor.JPG'})
    res.render('pages/contact',{result});
})

app.get('/about',(req,res)=>{
    res.render('pages/about');
})

app.get('/cars',(req,res)=>{
    res.render('pages/cars_list');
})




app.get((req,res)=>{
   res.json({message:'404 Not found'});
});

app.listen(port,()=>{
    console.log(`Server listening on ${host}:${port}`)
})
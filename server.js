require("dotenv").config();
const express=require('express');
const port=process.env.PORT || 3000;
const host=process.env.HOST || 'http://localhost';
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
    let cars=await carServices.getAllCars();
    res.render('index',{cars});
})

app.get('/contact',async (req,res)=>{
   
    res.render('pages/contact');
})

app.get('/about',(req,res)=>{
    res.render('pages/about');
})

app.get('/cars',async (req,res)=>{
    let cars=await carServices.getAllCars();
    res.render('pages/cars_list',{cars});
})




app.get((req,res)=>{
   res.json({message:'404 Not found'});
});

app.listen(port,host,()=>{
    console.log(`Server listening on ${host}:${port}`);
})

/*  
 photo:'https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Mercedes-Benz_CL203_CLC180_Kompressor.JPG/800px-Mercedes-Benz_CL203_CLC180_Kompressor.JPG'
*/
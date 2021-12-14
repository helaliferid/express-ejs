const express=require('express');
const route=express.Router();
const carServices= require('../../services/cars.service');

route.get('/',async (req,res)=>{
    let cars=await carServices.getAllCars();
    res.render('index',{cars});
})

route.get('/contact',async (req,res)=>{
    res.render('pages/contact');
})

route.get('/about',(req,res)=>{
    res.render('pages/about');
})

route.get('/cars',async (req,res)=>{
    let cars=await carServices.getAllCars();
    res.render('pages/cars_list',{cars});
})

module.exports=route;
const express=require('express');
const port=8080;
const host='http://localhost'



const app=express();

app.use(express.static('public'));

app.get('/',(req,res)=>{
    res.sendFile('./views/index.html',{root:__dirname});
})



app.get('/cars',(req,res)=>{
    res.json({message:'cars'});
});

app.get((req,res)=>{
   res.json({message:'404 Not found'});
});

app.listen(port,()=>{
    console.log(`Server listening on ${host}:${port}`)
})
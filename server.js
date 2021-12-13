const express=require('express');
const port=8080;
const host='http://localhost'



const app=express();

// ejs 
app.set('views','./views');
app.set('view engine','ejs');

app.use(express.static('public'));



app.get('/',(req,res)=>{
    const cars=[
        {brand:'Mercedes'},
        {brand:'Peugeot'},
        {brand:'Audi'}];

    const user={username:'EJS',version:'3.2.1'};
    res.render('index',{cars,user});
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
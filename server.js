const express=require('express');
const port=8080;
const host='http://localhost'



const app=express();

// ejs 
app.set('views','./views');
app.set('view engine','ejs');

app.use(express.static('public'));



app.get('/',(req,res)=>{
    res.render('index');
})

app.get('/contact',(req,res)=>{
    res.render('pages/contact');
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
require("dotenv").config();
const express=require('express');
const mainRouter=require('./controllers/routes/main.router');
const adminRouter=require('./controllers/routes/admin.router');
const port=process.env.PORT || 3000;
const host=process.env.HOST || '127.0.0.1';
const mongoose=require('mongoose');


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

// mount the main router
app.use('/',mainRouter);
app.use('/admin',adminRouter);

app.get((req,res)=>{
   res.json({message:'404 Not found'});
});

app.listen(port,()=>{
    console.log(`Server listening on ${host}:${port}`);
})

/*  
 photo:'https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Mercedes-Benz_CL203_CLC180_Kompressor.JPG/800px-Mercedes-Benz_CL203_CLC180_Kompressor.JPG'
*/
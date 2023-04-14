const express=require('express');
const app=express();
const port=80;

const bodyParser=require('body-parser')
// middleware
app.use(express.urlencoded());
app.use('/', require('./routes'));
const db=require('./config/db')
app.use(bodyParser.json());



app.set('view engine', 'ejs');


app.listen(port,function (err){
    if(err){
        console.log('Internal Server Error');
        return;
    }
    console.log('Server Started Successfully');
})


const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

app.set('view engine', 'ejs');

// נוסיף את body-parser לפרויקט שלנו
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/home',(req,res)=>{
    res.render('home')
})

app.post('/home',(req,res)=>{
    res.render('home')
})

app.get('/submit', (req,res)=>{
    const name = req.query.name;
    const email = req.query.email;
    res.render('submit',{name:name, email:email})
})

// אחרי שהוספנו את body-parser לפרויקט שלנו, נוכל לקרוא לנתוני הגוף של הבקשה בשם body בקריאות POST
app.post('/submit', (req,res)=>{
    const name = req.body.name;
    const email = req.body.email;
    res.render('submit',{name:name, email:email})
})

app.listen(7777,()=>{
    console.log('listening on port 7777...');
})

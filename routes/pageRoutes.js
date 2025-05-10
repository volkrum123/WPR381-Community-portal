// routes/pageRoutes.js

const express = require('express');
const router = express.Router();

const record = [];//In-memory array to store user data temporarily

router.get('/', (req, res) => {
    res.render('pages/home');
});

router.get('/about', (req, res) => {
    res.render('pages/about');
});

router.get('/events', (req, res) => {
    res.render('pages/events');
});

router.get('/contact', (req, res) => {
    res.render('pages/contact');
});

//POST route for form submission from client browser
router.post('/contact',(req,res)=>{
    const {name, email, message} = req.body;

 //We store user information in the in-memory array   
    record.push({
        name,
        email,
        message,
        date: new Date()
    });
    res.redirect('/thankyou')
})

router.get('/thankyou', (req, res) => {
    res.render('pages/thankyou');
});

module.exports = router;

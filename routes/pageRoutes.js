// routes/pageRoutes.js

const express = require('express');
const router = express.Router();

const record = [];//In-memory array to store user data temporarily

const events = [
{title: "Gauteng Rugby Day: Unity in Action", date: "May 17, 2025", location: "Johannesburg, Gauteng", description: "Join local teams and fans for a thrilling day of community rugby. Whether you're a player or spectator, expect fun, food, and friendly competition. This event brings all ages together to celebrate teamwork and sportsmanship.", image: "/images/Rugby.jpg"},
  {title: "Run for Hope: Gauteng Community Marathon", date: "May 24, 2025", location: "Pretoria, Gauteng", description: "Take part in a spirited marathon that winds through scenic city routes. Designed for all fitness levels, from casual walkers to serious runners. Proceeds will benefit local schools and health clinics.", image: "/images/marathon.jpg"},
  {title: "Ringbal Revival: Family Fun Tournament", date: "June 7, 2025", location: "Centurion, Gauteng", description: "Relive the classic game of ringbal in this nostalgic, action-packed event. Teams of all ages are invited to compete in a day of laughter and light-hearted rivalry. Prizes, music, and snacks make it a perfect family outing.", image: "/images/RingBal.jpg"},
  {title: "Gauteng Community Bezaar & Fair Day", date: "June 14, 2025", location: "Vanderbijlpark, Gauteng", description: "Come explore a vibrant mix of food stalls, crafts, and games at our community bezaar. Local artisans and vendors will showcase their talents and products. It’s the perfect opportunity to shop local and connect with your neighbours.", image: "/images/fair.webp"},
  {title: "Voices of Gauteng: Community Concert Night", date: "June 28, 2025", location: "Soweto, Gauteng", description: "An open-air concert featuring local bands, choirs, and solo artists. Bring your blanket and snacks and enjoy a night under the stars. The event promotes local talent while raising funds for youth music programs.", image: "/images/Concert.jpg"},
  {title: "Braai Together: Community BBQ Celebration", date: "July 5, 2025", location: "Alberton, Gauteng", description: "Gather with friends and neighbours for a massive community braai. With live music, games, and delicious local flavors, it’s a true South African feast. This event aims to foster connection and cultural pride.", image: "/images/Barbique.jpeg"},
  {title: "Feed a Friend: Volunteer Food Handout Day", date: "July 12, 2025", location: "Benoni, Gauteng", description: "Lend a hand to help feed local families in need through organized food distribution. Volunteers will prepare, pack, and hand out meals with love. It’s a day of giving that makes a real difference in our communities.", image: "/images/Handout.jpg"},
  {title: "Clean & Green: Gauteng Rubbish Sweep", date: "July 19, 2025", location: "Tembisa, Gauteng", description: "Join forces with local volunteers to clean up parks, streets, and public spaces. Gloves, bags, and tools will be provided—just bring your energy! Let’s restore pride in our neighborhoods and inspire change through action.", image: "/images/Cleaning.jpeg"},
  {title: "Pave the Way: Road Repair Volunteer Blitz", date: "July 26, 2025", location: "Krugersdorp, Gauteng", description: "Be part of a grassroots effort to patch potholes and repair community roads. Led by local engineers and supported by volunteers, this hands-on day of action improves safety and mobility. Everyone is welcome to contribute time, tools, or materials.", image: "/images/Lessons.jpeg"}
];
router.get('/', (req, res) => {
    res.render('pages/home');
});

router.get('/about', (req, res) => {
    res.render('pages/about');
});

router.get('/events', (req, res) => {
    res.render('pages/events',{events});
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

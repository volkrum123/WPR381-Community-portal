// routes/pageRoutes.js

const express = require('express');
const router = express.Router();
const events = [
  {title: "Tech Conference 2025", date: "May 10, 2025", location: "New York City", description: "An event showcasing the latest in AI and robotics.", image: "https://via.placeholder.com/150x150?text=Tech"},
  {title: "Green Energy Summit", date: "June 15, 2025", location: "San Francisco", description: "Discussing innovations in renewable energy and sustainability.", image: "https://via.placeholder.com/150x150?text=Energy"},
  {title: "Creative Design Expo", date: "July 20, 2025", location: "Chicago", description: "Celebrating trends in graphic design, UX, and visual arts.", image: "https://via.placeholder.com/150x150?text=Design"},
  {title: "Global Startups Meetup", date: "August 5, 2025", location: "Berlin", description: "A networking event for startups, investors, and entrepreneurs from around the world.", image: "https://via.placeholder.com/150x150?text=Startup"},
  {title: "Digital Health Forum", date: "September 12, 2025", location: "Toronto", description: "Exploring the future of healthcare technology and medical innovation.", image: "https://via.placeholder.com/150x150?text=HealthTech"},
  {title: "AI in Education Conference", date: "October 18, 2025", location: "London", description: "Focusing on the integration of AI and machine learning in modern education systems.", image: "https://via.placeholder.com/150x150?text=AI+Edu"},
  {title: "Blockchain World Congress", date: "November 9, 2025", location: "Singapore", description: "Industry leaders discuss trends, regulation, and innovations in blockchain technology.", image: "https://via.placeholder.com/150x150?text=Blockchain"},
  {title: "Smart Cities Expo", date: "December 2, 2025", location: "Dubai", description: "Showcasing how cities are becoming more connected, efficient, and sustainable.", image: "https://via.placeholder.com/150x150?text=Smart+City"},
  {title: "Future of Work Summit", date: "January 15, 2026", location: "Sydney", description: "Exploring the changing landscape of work, automation, and remote collaboration.", image: "https://via.placeholder.com/150x150?text=Future+Work"}
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

router.get('/thankyou', (req, res) => {
    res.render('pages/thankyou');
});

module.exports = router;

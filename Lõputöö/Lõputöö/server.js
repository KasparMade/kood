const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Staatilise sisu serveerimiseks public kaustast
app.use(express.static(path.join(__dirname, 'public')));

// Kui kasutaja pole sisse logitud, avaneb esmalt login leht
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'login.html'));
});

// Kui kasutaja on sisse loginud, avaneb profiili leht
app.get('/profile', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'profile.html'));
});

// Edasised suunamised teistele lehtedele
app.get('/index', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'about.html'));
});

app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'contact.html'));
});

// Käivita server
app.listen(PORT, () => {
    console.log(`Server kuulab portil ${PORT}`);
});

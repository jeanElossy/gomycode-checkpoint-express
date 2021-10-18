const express = require('express');
const app = express();

//  choix de ejs pour les affichages 
app.set('view engine', 'ejs');
/*
app.use("/", (req, res) => {
    const day = [
        'lundi', 
        'mardi',
        'mercredi',
        'jeudi',
        'vendredi'
    ];
    // console.log(day)
})
*/

// home page
app.get('/', (req, res) => {

    res.render('page/Home');
});

// services page
app.get('/services', (req, res) => {
    res.render('page/Services');
});

// Contact page
app.get('/contact', (req, res) => {
    res.render('page/Contact');
})

// connexion au port d'execution 8080
app.listen(8080, (req, res) => {
    console.log('port 8080 starting');
});

// app.use('/css', express.static(__dirname + 'public/static/css'));
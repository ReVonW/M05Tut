const express = require('express');

const app = express();

app.set('view engine', 'ejs');

app.listen(3000);

app.get('/', (req, res) => {
    const blogs = [
        {title: 'Yoshi finds eggs', snippet: 'Test sentences'},
        {title: 'Mario finds stars', snippet: 'Test sentences'},
        {title: 'How to defeat bowser', snippet: 'Test sentences'},
    ];
    res.render('index', { title: 'Home', blogs});
});

app.get('/about' , (req, res) => {
    res.render('about');
});

app.get('/blogs/create', (req, res) => {
    res.render();
})

app.use((req, res) => {
    res.status(404).render('404', { title: '404'});
});
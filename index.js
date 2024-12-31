const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');

app.get('/',(req, res) => {
    fs.readdir(`./files`, (err, files) => {
        if (err) {
            return res.status(500).send('Unable to scan directory');
        }
        res.render('index', { files: files });
    });
});



app.post('/create', (req, res) => {
    fs.writeFile(`./files/${req.body.title.split(' ').join('').toLowerCase()}.txt`, req.body.details, () => {
        res.redirect('/');
    });
    
});

app.get('/task/:title', (req, res) => {
    const filePath = `./files/${req.params.title.toLowerCase()}`;
    console.log(`Trying to read file: ${filePath}`);

    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error('File read error:', err);
            return res.status(500).send('Unable to read the file');
        }
        res.render('task', { title: req.params.title, details: data });
    });
});





app.listen(3000);
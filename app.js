const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.post('/submit-form', (req, res) => {
    fs.appendFile('public/textfile.txt', JSON.stringify(req.body),(err)=>{if(err){console.log("err");}});
    res.send('Form data saved to file');
});

app.get('/idk', (req, res) => {
  fs.readFile('public/textfile.txt', 'utf8', (err, data) => {
    if (err) return next(err);
    res.send(data);
  });
});


app.listen(process.env.PORT||3000, () => {
    console.log('Server started on http://localhost:3000');
});
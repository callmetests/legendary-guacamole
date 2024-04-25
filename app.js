const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// Connect to MongoDB
mongoose.connect('mongodb+srv://updatedus56:hmv4cmjhY1xkHAe1@cluster0.zc6iqky.mongodb.net/', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Create a Mongoose schema for your data
const formDataSchema = new mongoose.Schema({
  formData: Object, // Assuming your form data is a JSON object
});

// Create a Mongoose model based on the schema
const FormData = mongoose.model('FormData', formDataSchema);

app.post('/submit-form', (req, res) => {
  // Create a new FormData document with the form data
  const formData = new FormData({
    formData: req.body,
  });

  // Save the form data to MongoDB
  formData.save((err) => {
    if (err) {
      console.log(err);
      res.status(500).send('Error saving form data');
    } else {
      res.send('Form data saved to MongoDB');
    }
  });
});

app.get('/idk', (req, res) => {
  // Retrieve all form data from MongoDB
  FormData.find({}, (err, data) => {
    if (err) {
      console.log(err);
      res.status(500).send('Error retrieving form data');
    } else {
      res.send(data);
    }
  });
});

app.listen(process.env.PORT || 3000, () => {
  console.log('Server started on http://localhost:3000');
});
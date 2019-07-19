const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;
const db = require('./dao');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/experiences', db.getExperiences);
app.get('/projects', db.getProjects);
app.get('/projects/:id', db.getProjectById);
app.get('/skills', db.getSkills);

app.listen(port, () => console.log(`App running on port ${port}.`));

const path = require('path');
// Serve static files from the React frontend app
app.use(express.static(path.join(__dirname, 'client/build')));

// Anything that doesn't match the above, send back index.html
app.get('*', (req, res) => res.sendFile(path.join(__dirname + '/client/build/index.html')));
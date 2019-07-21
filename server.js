const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const port = process.env.PORT || 5000;
const db = require('./server/dao');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/api/v1/experiences', db.getExperiences);
app.get('/api/v1/projects', db.getProjects);
app.get('/api/v1/skills', db.getSkills);

app.listen(port, () => console.log(`App running on port ${port}.`));

// Serve static files from the React frontend app
app.use(express.static(path.join(__dirname, 'client/build')));

// Anything that doesn't match the above, send back index.html
app.get('*', (req, res) => res.sendFile(path.join(__dirname + '/client/build/index.html')));
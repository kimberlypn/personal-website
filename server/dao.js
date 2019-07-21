require('dotenv').config();
const Pool = require('pg/lib').Pool;
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

const getExperiences = (request, response) => {
  getQueryReseults(request, response, 'SELECT * FROM experiences ORDER BY start_date DESC');
};

const getProjects = (request, response) => {
  getQueryReseults(request, response, 'SELECT * FROM projects ORDER BY title ASC');
};

const getProjectById = (request, response) => {
  const id = parseInt(request.params.id);
  getQueryReseults(request, response, 'SELECT * FROM projects WHERE id = $1', [id]);
};

const getSkills = (request, response) => {
  getQueryReseults(request, response, 'SELECT * FROM skills ORDER BY name ASC');
};

const getQueryReseults = (request, response, query, queryParams = []) => {
  pool.query(query, queryParams, (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

module.exports = {
  getExperiences,
  getProjects,
  getProjectById,
  getSkills
};
const Pool = require('pg/lib').Pool;
const pool = new Pool({
  user: 'personal_website',
  host: 'localhost',
  database: 'personal_website_dev',
  password: 'QDTHwEk4zN62',
  port: 5432,
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
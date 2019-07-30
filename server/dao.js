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
  getQueryResults(request, response, 'SELECT * FROM experience ORDER BY start_date DESC');
};

const getProjects = (request, response) => {
  getQueryResults(
    request,
    response,
    'SELECT project.id AS id, project.title, project.headline, project.technology, project.collaborators, project.img_src, project.repo, project.demo, project_type.type '
    + 'FROM project '
    + 'JOIN project_type ON project.type = project_type.id '
    + 'ORDER BY project.title ASC'
  );
};

const getSkills = (request, response) => {
  getQueryResults(
    request,
    response,
    'SELECT skill.id AS id, skill.name, skill.proficiency, skill_type.type '
    + 'FROM skill '
    + 'JOIN skill_type ON skill.type = skill_type.id '
    + 'ORDER BY skill.name ASC'
  );
};

const getQueryResults = (request, response, query, queryParams = []) => {
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
  getSkills
};
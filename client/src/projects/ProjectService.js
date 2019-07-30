import axios from 'axios';

export default {
  componentDidMount
}

function componentDidMount() {
  fetchProjects.call(this);
}

function fetchProjects() {
  axios.get('/api/v1/projects')
    .then(response => {
      const projects = response.data;
      const projectIdx = projects.findIndex(project => project.id === this.props.projectId);
      this.setState({
        nextProjectId: projectIdx === projects.length - 1 ? projects[0].id : projects[projectIdx + 1].id,
        prevProjectId: projectIdx === 0 ? projects[projects.length - 1].id : projects[projectIdx - 1].id,
        project: projects[projectIdx]
      });
    });
}
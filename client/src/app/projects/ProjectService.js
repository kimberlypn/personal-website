import axios from 'axios';

export default {
  componentDidMount
}

function componentDidMount() {
  fetchProjects(this.props.projectId, this.setState.bind(this));
}

function fetchProjects(projectId, setState) {
  axios.get('/api/v1/projects').then(response => {
    const projects = response.data;
    if (projects.length > 0) {
      const projectIdx = projects.findIndex(project => project.id === projectId);
      setState({
        nextProjectId: projectIdx === projects.length - 1 ? projects[0].id : projects[projectIdx + 1].id,
        prevProjectId: projectIdx === 0 ? projects[projects.length - 1].id : projects[projectIdx - 1].id,
        project: projects[projectIdx]
      });
    }
  });
}
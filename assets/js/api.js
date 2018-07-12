/* Template adapted from: http://www.ccs.neu.edu/home/ntuck/courses/2018/01/cs4550/notes/20-redux/notes.html */
import store from './store';

class TheServer {
  request_projects() {
    return $.ajax("/api/v1/projects", {
      method: "get",
      dataType: "json",
      contentType: "application/json; charset=UTF-8",
      success: (resp) => {
        store.dispatch({
          type: 'PROJECTS_LIST',
          projects: resp.data,
        });
      },
      error: (resp) => {
        alert("Could not load projects");
      }
    });
  }

  request_skills() {
    return $.ajax("/api/v1/skills", {
      method: "get",
      dataType: "json",
      contentType: "application/json; charset=UTF-8",
      success: (resp) => {
        store.dispatch({
          type: 'SKILLS_LIST',
          skills: resp.data,
        });
      },
      error: (resp) => {
        alert("Could not load skills");
      }
    });
  }
}

export default new TheServer();

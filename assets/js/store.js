/* Template adapted from: http://www.ccs.neu.edu/home/ntuck/courses/2018/01/cs4550/notes/20-redux/notes.html */
import { createStore, combineReducers } from 'redux';
import deepFreeze from 'deep-freeze';

/* List of projects */
function projects(state = [], action) {
  switch (action.type) {
    case 'PROJECTS_LIST':
      return [...action.projects];
    default:
      return state;
  }
}

/* Details of an individual project to be displayed on its corresponding page */
let empty_project = {
  id: "",
  title: "",
  language: "",
  type: "",
  collaborators: "",
  description: "",
  start_date: "",
  end_date: "",
  img_src: ""
}

function projectDetails(state = empty_project, action) {
  switch (action.type) {
    case 'UPDATE_PROJECT':
      return Object.assign({}, state, action.data);
    default:
      return state;
  }
}

/* List of skills */
function skills(state = [], action) {
  switch (action.type) {
    case 'SKILLS_LIST':
      return [...action.skills];
    default:
      return state;
  }
}

/* List of experiences */
function experiences(state = [], action) {
  switch (action.type) {
    case 'EXPERIENCES_LIST':
      return [...action.experiences];
    default:
      return state;
  }
}

function root_reducer(state0, action) {
  // {tasks, users, form} is ES6 shorthand for
  // {tasks: tasks, users: users, form: form}
  let reducer = combineReducers({
    projects,
    projectDetails,
    skills,
    experiences
  });
  let state1 = reducer(state0, action);
  return deepFreeze(state1);
};

let store = createStore(root_reducer);
export default store;

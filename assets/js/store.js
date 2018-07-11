/* Template source: http://www.ccs.neu.edu/home/ntuck/courses/2018/01/cs4550/notes/20-redux/notes.html */
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

function root_reducer(state0, action) {
  // {tasks, users, form} is ES6 shorthand for
  // {tasks: tasks, users: users, form: form}
  let reducer = combineReducers({projects});
  let state1 = reducer(state0, action);
  return deepFreeze(state1);
};

let store = createStore(root_reducer);
export default store;

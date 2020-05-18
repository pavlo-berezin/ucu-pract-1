import { setTodoLists, addTodoList, updateTodoList } from './creators';

const fetchTodos = () => (dispatch) => {
  fetch('/todoLists').then(resp => {
    return resp.json();
  }).then(body => {
    dispatch(setTodoLists(body));
  })
}

const addTodo = (name) => (dispatch) => {
  const newTodo = { name, todos: [] };

  fetch(`/todoLists`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newTodo),
  })
  .then((e) => e.json())
  .then(savedList => {
    dispatch(addTodoList(savedList));
  })
}

const updateList = (listId, list) => (dispatch) => {
  fetch(`/todoLists/${listId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(list),
  })
  .then(e => e.json())
  .then(savedList => {
    dispatch(updateTodoList(list.id, savedList));
  })
}

export { fetchTodos, addTodo as addTodoList, updateList as updateTodoList }
import { SET_TODO_LISTS, ADD_TODO_LIST, UPDATE_TODO_LIST } from "./types"

const setTodoLists = (todoLists) => ({ type: SET_TODO_LISTS, todoLists });

const addTodoList = (todoList) => ({ type: ADD_TODO_LIST, todoList });

const updateTodoList = (listId, list) => ({ type: UPDATE_TODO_LIST, listId, list });

export { setTodoLists, addTodoList, updateTodoList };
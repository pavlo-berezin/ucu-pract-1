import { SET_TODO_LISTS, ADD_TODO_LIST, UPDATE_TODO_LIST } from '../actions/types';

export default function todoLists(state, action) {
  switch (action.type) {
    case SET_TODO_LISTS:
      return { ...state, todoLists: action.todoLists };

    case ADD_TODO_LIST:
      return { ...state, todoLists: [...state.todoLists, action.todoList] };

    case UPDATE_TODO_LIST:
      return {
        ...state,
        todoLists: state.todoLists.map((list) => (list.id === action.listId ? action.list : list)),
      };

    default:
      return state;
  }
}
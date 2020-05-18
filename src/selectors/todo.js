const getTodoListById = (id, state) => state.todoLists.find((list) => list.id == id);

export { getTodoListById };
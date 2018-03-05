export const addTodo = name => {
  return {
    type: 'ADD_TODO',
    name,
  }
}

export const delTodo = index => {
  return {
    type: 'DEL_TODO',
    index,
  }
}
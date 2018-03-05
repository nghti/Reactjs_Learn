const initaliteState = [];

const listItems = (state = initaliteState, action) => {
  console.log(state)
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, action.name]
    case 'DEL_TODO':
      state.splice(action.index, 1);
      return [...state]
    default:
      return state
  }
}

export default listItems
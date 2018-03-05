const initaliteState = ['tu', 'trinh'];

const listItems = (state = initaliteState, action) => {
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
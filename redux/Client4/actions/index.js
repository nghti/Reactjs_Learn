export const addTodo = text => {
    return{
        type: 'ADD_TODO',
        text
    }
}

export const addFilter = filter => {
    return {
        type: 'ADD_FILTER',
        filter
    }
}

export const toggleTodo = id => {
    return {
        type: 'TOGGLE_TODO',
        id
    }
}
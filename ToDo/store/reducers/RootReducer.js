import types from '../actions/Types'

const initialState = {
    todos: ['Item No 1']
}

const reducer = (state=initialState, action) => {
    const {type, payload} = action
    const {todos} = state
    
    switch(type) {
        case types.ADD: {
            return {...state, todos: [...todos, payload]}
        }
        case types.REMOVE: {
            return {...state, todos: todos.filter((todo, i) => i != payload)} 
        }
    }
    
    return state    
}

export default reducer;
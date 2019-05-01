import types from './Types.js'

export const actions = {
    add: (item) => { 
        return {type: types.ADD, payload: item}
    }
    remove: (item) => {
        return {type: types.REMOVE, payload: index}
    }
}
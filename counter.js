const Redux = require('Redux')
const counter = ( state, action ) => {

    switch (action.type) {
        case 'INCREMENT': return state + 1
        case 'DECREMENT': return state - 1
        default: return state
    }
}

const { createStore } = Redux
const store = createStore(counter)

module.exports = counter
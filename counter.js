function counter( state, action ) {
    if (action.type === 'INCERMENT') {
        return state + 1
    } else if (action.type === 'DECERMENT') {
        return state - 1
    } else return state
}

module.exports = counter
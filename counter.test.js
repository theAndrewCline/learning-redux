const counter = require('./counter')

test('counter should go up by 1 with INCERMENT' , () => {
    expect(counter(0 , {type: 'INCERMENT'})).toEqual(1)
    expect(counter(1 , {type: 'INCERMENT'})).toEqual(2)
})

test('counter should go up by 1 with DECERMENT' , () => {
    expect(counter(2 , {type: 'DECERMENT'})).toEqual(1)
    expect(counter(1 , {type: 'DECERMENT'})).toEqual(0)
})

test('Any other type should return the current state' , () => {
    expect(counter(1 , {type: 'SOMETHING_ELSE'})).toEqual(1)
})
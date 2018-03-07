const counter = require('./counter')

test('counter should go up by 1 with INCREMENT' , () => {
    expect(counter(0 , {type: 'INCREMENT'})).toEqual(1)
    expect(counter(1 , {type: 'INCREMENT'})).toEqual(2)
})

test('counter should go up by 1 with DECREMENT' , () => {
    expect(counter(2 , {type: 'DECREMENT'})).toEqual(1)
    expect(counter(1 , {type: 'DECREMENT'})).toEqual(0)
})

test('Any other type should return the current state' , () => {
    expect(counter(1 , {type: 'SOMETHING_ELSE'})).toEqual(1)
})
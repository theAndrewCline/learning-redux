import addCounter from '../src/addCounter'
import deepFreeze from 'deep-freeze'

test('Test addCounter' , () => {
    const listBefore = []
    const listAfter = [0]
    
    deepFreeze(listBefore)

    expect(
        addCounter(listBefore)
    ).toEqual(listAfter)
})
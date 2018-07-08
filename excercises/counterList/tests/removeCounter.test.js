import removeCounter from '../src/removeCounter'
import deepFreeze from 'deep-freeze'

test('removeCounter', () => {
   const listBefore = [0, 10, 20]
   const listAfter = [0, 20]

   deepFreeze(listBefore)

   expect(removeCounter(listBefore, 1)).toEqual(listAfter)
})

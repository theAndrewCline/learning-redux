import counter from '../src/counter'

test('counter should go up by 1 with INCREMENT', () => {
  expect(counter(0, { type: 'INCREMENT' })).toBe(1)
  expect(counter(1, { type: 'INCREMENT' })).toBe(2)
})
test('counter should go up by 1 with DECREMENT', () => {
  expect(counter(2, { type: 'DECREMENT' })).toBe(1)
  expect(counter(1, { type: 'DECREMENT' })).toBe(0)
})
test('Any other type should return the current state', () => {
  expect(counter(1, { type: 'SOMETHING_ELSE' })).toBe(1)
})

test('counter should return intial state if intial state is not defined', () => {
  expect(counter(undefined, {})).toBe(0)
})

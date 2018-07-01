function counter(state, action) {
   if (typeof state === 'undefined') {
      return 0
   }
   if (action.type === 'INCREMENT') {
      return state + 1
   } else if (action.type === 'DECREMENT') {
      return state - 1
   } else {
      return state
   }
}

const Counter = ({ value, onIncrement, onDecrement }) => (
   <div>
      <h1>{value}</h1>
      <button onclick={onIncrement}>+</button>
      <button onclick={onDecrement}>-</button>
   </div>
)

const { createStore } = Redux

const store = createStore(counter)

const render = () => {
   ReactDOM.render(
      <Counter
         value={store.getState()}
         onIncrement={() => {
            store.dispatch({
               type: 'INCREMENT'
            })
         }}
         onDecrement={() => {
            store.dispatch({
               type: 'DECREMENT'
            })
         }}
      />,
      document.getElementById('root')
   )
}

store.subscribe(render)
render()

document.addEventListener('click', () => {
   store.dispatch({ type: 'INCREMENT' })
})

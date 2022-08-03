import React from 'react'
import UseEffect from './UseEffect'
import UseReducer from './UseReducer'
import UseRef from './UseRef'
import UseState from './UseState'

const App = () => {
  return (
    <div className='App'>
        <h1>Hooks Demo</h1>
        <UseState/>
        <UseEffect/>
        <UseRef/>
        <UseReducer/>
    </div>
  )
}

export default App
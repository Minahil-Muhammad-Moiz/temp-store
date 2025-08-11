import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NewTodo from './Redux/Components/NewTodo'
import TodoList from './Redux/Components/TodoList'

function App() {

  return (
    <>
      {/* <h1 className='text-4xl text-red-400'>HELLO WORLD!</h1> */}
      <NewTodo />
      <TodoList />
    </>
  )
}

export default App

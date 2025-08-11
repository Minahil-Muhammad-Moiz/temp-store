import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeTodo } from '../slices/todoSlice'

const TodoList = () => {
  const todos = useSelector(state => state.todo.todos)
  const dispatch = useDispatch()

  return (
    <>
      {todos.map((todo) =>
        <div key={todo?.id}>
          <p>{todo?.text}</p>
          <button onClick={() => dispatch(removeTodo(todo.id))}>X</button>
        </div>)}
    </>
  )
}

export default TodoList
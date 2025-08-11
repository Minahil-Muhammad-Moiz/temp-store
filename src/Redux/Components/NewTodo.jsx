import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../slices/todoSlice'

const NewTodo = () => {
    const [inputValue, setInputValue] = useState('')
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(addTodo(inputValue))
        setInputValue('')
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    className='border'
                    type='text'
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                />
                <button type='submit'>Add</button>
            </form>
        </>
    )
}

export default NewTodo
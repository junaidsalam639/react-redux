import React from 'react'
import { useNavigate } from 'react-router-dom'
import AddTodo from '../components/AddTodo'

const Todo = () => {
    const navigate = useNavigate();
    navigate('/todo');
    return (
        <div>
      <AddTodo />
    </div>
  )
}

export default Todo

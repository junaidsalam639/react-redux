import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, deleteTodo } from '../reducer/reducer';

const AddTodo = () => {
    const [input, setInput] = useState('');
    const [button, setButton] = useState(true);
    const dispatch = useDispatch();
    const todo = useSelector(state => state.todo);

    const add = (e) => {
        e.preventDefault();
        dispatch(addTodo(input));
    }

    return (
        <div>
            <form onSubmit={add}>
                <input type="text" required value={input} onChange={(e) => setInput(e.target.value)} />
                <button>{button ? 'Submit' : 'Edit Todo'}</button>
            </form>
            {
                todo.map((data) => {
                    return <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">{data.id}</th>
                                <th scope="col">{data.text}</th>
                                <button onClick={() => dispatch(deleteTodo(data.id))}>Delete</button>
                            </tr>
                        </thead>
                    </table>
                })
            }
        </div>
    )
}

export default AddTodo

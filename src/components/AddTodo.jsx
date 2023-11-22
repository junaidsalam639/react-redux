import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, removeTodo , editTodo } from '../reducer/reducer';
import { MdDelete } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { TextField, Button } from '@mui/material';
import Swal from 'sweetalert2';

const AddTodo = () => {
    const [input, setInput] = useState('');
    const dispatch = useDispatch();
    const todos = useSelector(state => state.todo);

    const handleTodo = (e) => {
        e.preventDefault();
        if (input !== '') {
            dispatch(addTodo(input));
            setInput('');
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Validation Error',
                text: 'Please fill in all fields',
                width: 600,
                padding: '3em',
                color: 'black',
                fontWeight: 'bold',
                background: '#fff',
            });
        }
    }

    const handlerEdit = (e) => {
        console.log(e);
        setInput(e.text);
        dispatch(editTodo({id : e.id , text : e.text}));
    }

    return (
        <div>
            <div>
                <div className='text-center mt-4'>
                    <TextField id="standard-basic" label="AddTodo" variant="standard" value={input} onChange={(e) => setInput(e.target.value)} />
                    <Button className='my-2' onClick={handleTodo} size="normal">Add_Todo</Button>
                </div>
            </div>
            {
                todos.map((todo) => (
                    <div key={todo.id} style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', width: 400, margin: 'auto' }}>
                        <h5>{todo.text}</h5>
                        <div className='my-3' style={{ cursor: 'pointer' }}>
                            <MdDelete size={24} className='mx-3' onClick={() => dispatch(removeTodo(todo.id))} />
                            <FaRegEdit size={24} className='mx-3' onClick={() => handlerEdit(todo)} />
                        </div>
                    </div>
                ))
            }
        </div>
    );
}

export default AddTodo;

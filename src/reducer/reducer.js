import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todo: [],
    user : [],
}

export const reducer = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload,
            };
            state.todo.push(todo);
        },
        removeTodo: (state, action) => {
            state.todo = state.todo.filter((todo) => todo.id !== action.payload);
        },
        editTodo: (state, action) => {
            const {id , text} = action.payload;
            const todoIndex = state.todo.findIndex((todo) => todo.id == id);
            if(todoIndex){
               state.todo[todoIndex] = {
                ...state.user[todoIndex],
                ...text
               }
            } 
        },
        addUser : (state , action) => {
            const { username, email, password } = action.payload;
            const user = {
                id : nanoid(),
                username : username,
                email : email,
                password : password,
            }
            state.user.push(user);
        },
        deleteUser : (state , action) => {
            state.user = state.user.filter((user) => user.id !== action.payload);
        },
        editUser : (state , action) => {
            const { id, updatedUser } = action.payload;
            const userIndex = state.user.findIndex(user => user.id === id);
        
            if (userIndex !== -1) {
              state.user[userIndex] = {
                ...state.user[userIndex],
                ...updatedUser,
              };
            }
        }
        }
    });

export const { addTodo, removeTodo  , addUser , deleteUser , editUser , editTodo } = reducer.actions;

export default reducer.reducer;



//state ke ander jo bhi current state hai woo milti hai
//action ke ander jo bhi data pass hoo rha hai
//useSelector value store se nikalne ke lye
//useDispatch reducer me data bhejne ke lye
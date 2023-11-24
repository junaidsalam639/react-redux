import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todo: [],
    user : [],
}

export const reducer = createSlice({
    name: 'user',
    initialState,
    reducers: {
        addTodo : (state , action) => {
            const user = {
                id : nanoid(),
                text : action.payload
            }
            state.todo.push(user);
        },
        deleteTodo : (state , action) => {
           state.todo = state.todo.filter((todo) => todo.id !== action.payload);
        },
        editTodo : (state , action) => {

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
            const userIndex = state.user.findIndex((user) => user.id === id);
             console.log(userIndex);
            if (userIndex !== -1) {
              state.user[userIndex] = {
                ...state.user[userIndex],
                ...updatedUser,
              };
            }
        }
        }
    });

export const { addTodo, deleteTodo  , addUser , deleteUser , editUser , editTodo } = reducer.actions;

export default reducer.reducer;



//state ke ander jo bhi current state hai woo milti hai
//action ke ander jo bhi data pass hoo rha hai
//useSelector value store se nikalne ke lye
//useDispatch reducer me data bhejne ke lye
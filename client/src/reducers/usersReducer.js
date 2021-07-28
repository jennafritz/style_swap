import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'

const initialState = {
    currentUser: {},
    token: ""
}

// Action Creators

export const fetchUser = createAsyncThunk("users/fetchUser", loginObj => {
    return fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(loginObj)
    })
    .then(res => res.json())
    .then(userInfo => userInfo)
})

export const createUser = createAsyncThunk("users/createUser", registerObj => {
    return fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(registerObj)
    })
    .then(res => res.json())
    .then(newlyCreatedUser => newlyCreatedUser)
})


// Reducer

const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {

    },
    extraReducers: {
        [fetchUser.fulfilled](state, action){
            if(action.payload.error){
                console.log(action.payload.error)
            } else {
                state.currentUser = action.payload.user
                state.token = action.payload.token
            }
        },
        [createUser.fulfilled](state, action){
            if(action.payload.error){
                console.log(action.payload.error)
            } else {
                console.log(action.payload.user)
            }
        }
    }
})

export default usersSlice.reducer
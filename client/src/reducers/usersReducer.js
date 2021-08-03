import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'

const initialState = {
    currentUser: {},
    token: "",
    allUsers: [],
    currentClosetUser: {}
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

export const fetchAllUsers = createAsyncThunk("users/fetchAllUsers", unused => {
    return fetch("http://localhost:3000/users", {
        method: "GET",
        headers: {
            Authorization: `Bearer ${localStorage.token}`,
            "Content-Type": "application/json"
        }
    })
    .then(res => res.json())
    .then(allUsersArray => allUsersArray)
}) 

export const setCurrentClosetUser = createAsyncThunk("users/setCurrentClosetUser", userId => {
    return fetch(`http://localhost:3000/users/${userId}`, {
        method: "GET",
        headers: {
            Authorization: `Bearer ${localStorage.token}`,
            "Content-Type": "application/json"
        }
    })
    .then(res => res.json())
    .then(currentClosetUserObj => currentClosetUserObj)
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
        },
        [fetchAllUsers.fulfilled](state, action){
            if(action.payload.error){
                console.log(action.payload.error)
            } else {
                state.allUsers = action.payload
            }
        },
        [setCurrentClosetUser.fulfilled](state, action){
            if(action.payload.error){
                console.log(action.payload.error)
            } else {
                state.currentClosetUser = action.payload
            }
        }
    }
})

export default usersSlice.reducer
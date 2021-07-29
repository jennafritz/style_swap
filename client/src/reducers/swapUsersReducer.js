import {createAsyncThunk, createSlice, current} from '@reduxjs/toolkit'

const initialState = {}

// Action Creators

export const createSwapUser = createAsyncThunk("swapUsers/createSwapUser", swapUserInfoObj => {
    return fetch("http://localhost:3000/swap_users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.token}`
        },
        body: JSON.stringify(swapUserInfoObj)
    })
    .then(res => res.json())
    .then(newlyCreatedSwapUser => newlyCreatedSwapUser)
})


// Reducer

const swapUsersSlice = createSlice({
    name: "swapUsers",
    initialState,
    reducers: {

    },
    extraReducers: {
        [createSwapUser.fulfilled](state, action){
            if(action.payload.error){
                console.log(action.payload.error)
            } else {
                console.log(action.payload)
            }
        }
    }
})

export default swapUsersSlice.reducer
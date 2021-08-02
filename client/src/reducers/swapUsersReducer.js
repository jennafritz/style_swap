import {createAsyncThunk, createSlice, current} from '@reduxjs/toolkit'

const initialState = {
    currentSwapUser: ""
}

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

export const setCurrentSwapUser = createAsyncThunk("swapUsers/setCurrentSwapUser", swapUserInfoObj => {
    return fetch(`http://localhost:3000/set_current_swap_user`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.token}`
        },
        body: JSON.stringify(swapUserInfoObj)
    })
    .then(res => res.json())
    .then(updatedSwapUser => updatedSwapUser)
})

export const reduceCredits = createAsyncThunk("swapUsers/reduceCredits", swapUserInfoObj => {
    return fetch(`http://localhost:3000/swap_users/${swapUserInfoObj.id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.token}`
        },
        body: JSON.stringify({credits: swapUserInfoObj.credits - 1})
    })
    .then(res => res.json())
    .then(updatedSwapUser => updatedSwapUser)
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
        },
        [setCurrentSwapUser.fulfilled](state, action){
            if(action.payload.error){
                console.log(action.payload.error)
            } else {
                state.currentSwapUser = action.payload
            }
        },
        [reduceCredits.fulfilled](state, action){
            if(action.payload.error){
                console.log(action.payload.error)
            } else {
                state.currentSwapUser = action.payload
            }
        }
    }
})

export default swapUsersSlice.reducer
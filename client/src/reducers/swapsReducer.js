import {createAsyncThunk, createSlice, current} from '@reduxjs/toolkit'

const initialState = {
    currentUserSwaps: [],
    allSwaps: [],
    currentSwap: {}
}

// Action Creators

export const fetchCurrentUserSwaps = createAsyncThunk("swaps/fetchCurrentUserSwaps", currentUserId => {
    return fetch("http://localhost:3000/fetch_current_user_swaps", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.token}`
        },
        body: JSON.stringify({user_id: currentUserId})
    })
    .then(res => res.json())
    .then(userSwaps => userSwaps)
})

export const fetchAllSwaps = createAsyncThunk("clothings/fetchAllSwaps", unused => {
    return fetch("http://localhost:3000/swaps", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.token}`
        }
    })
    .then(res => res.json())
    .then(allSwapsArray => allSwapsArray)
})

export const setCurrentSwap = createAsyncThunk("swaps/setCurrentSwap", swapId => {
    return fetch(`http://localhost:3000/swaps/${swapId}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.token}`
        }
    })
    .then(res => res.json())
    .then(currentSwap => currentSwap)
})


// Reducer

const swapsSlice = createSlice({
    name: "swaps",
    initialState,
    reducers: {

    },
    extraReducers: {
        [fetchCurrentUserSwaps.fulfilled](state, action){
            if(action.payload.error){
                console.log(action.payload.error)
            } else {
                state.currentUserSwaps = action.payload
            }
        },
        [fetchAllSwaps.fulfilled](state, action){
            if(action.payload.error){
                console.log(action.payload.error)
            } else {
                state.allSwaps = action.payload
            }
        },
        [setCurrentSwap.fulfilled](state, action){
            if(action.payload.error){
                console.log(action.payload.error)
            } else {
                state.currentSwap = action.payload
            }
        }
    }
})

export default swapsSlice.reducer
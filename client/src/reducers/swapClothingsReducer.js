import {createAsyncThunk, createSlice, current} from '@reduxjs/toolkit'

const initialState = {}

// Action Creators

export const createSwapClothings = createAsyncThunk("swapClothings/createSwapClothings", swapClothingInfoObj => {
    return fetch("http://localhost:3000/swap_clothings", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.token}`
        },
        body: JSON.stringify(swapClothingInfoObj)
    })
    .then(res => res.json())
    .then(newlyCreatedSwapClothings => newlyCreatedSwapClothings)
})


// Reducer

const swapClothingsSlice = createSlice({
    name: "swapClothings",
    initialState,
    reducers: {

    },
    extraReducers: {
        [createSwapClothings.fulfilled](state, action){
            if(action.payload.error){
                console.log(action.payload.error)
            } else {
                console.log(action.payload)
            }
        }
    }
})

export default swapClothingsSlice.reducer
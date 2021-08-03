import {createAsyncThunk, createSlice, current} from '@reduxjs/toolkit'

const initialState = {
    currentSwapSwapClothings: []
}

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

export const fetchCurrentSwapClothings = createAsyncThunk("swapClothings/fetchCurrentSwapClothings", swapId => {
    return fetch("http://localhost:3000/fetch_current_swap_clothings", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.token}`
        },
        body: JSON.stringify({swap_id: swapId})
    })
    .then(res => res.json())
    .then(currentSwapClothingsArray => currentSwapClothingsArray)
})

export const deleteSwapClothing = createAsyncThunk("swapClothings/deleteSwapClothing", swapClothingId => {
    return fetch(`http://localhost:3000/swap_clothings/${swapClothingId}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.token}`
        }
    })
    .then(res => res.json())
    .then(emptySwapClothingObj => emptySwapClothingObj)
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
        },
        [fetchCurrentSwapClothings.fulfilled](state, action){
            if(action.payload.error){
                console.log(action.payload.error)
            } else {
                state.currentSwapSwapClothings = action.payload
            }
        },
        [deleteSwapClothing.fulfilled](state, action){
            if(action.payload.error){
                console.log(action.payload.error)
            } else {
                if(state.currentSwapSwapClothings.length > 0){
                    state.currentSwapSwapClothings = state.currentSwapSwapClothings.filter(swapClothing => swapClothing.id !== parseInt(action.payload.deleted_id, 10))
                }
            }
        }
    }
})

export default swapClothingsSlice.reducer
import {createAsyncThunk, createSlice, current} from '@reduxjs/toolkit'

const initialState = {
    currentUserClothings: []
}

// Action Creators

export const fetchUserClothings = createAsyncThunk("clothings/fetchUserClothings", currentUserId => {
    return fetch("http://localhost:3000/fetch_user_clothings", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.token}`
        },
        body: JSON.stringify({user_id: currentUserId})
    })
    .then(res => res.json())
    .then(userClothings => userClothings)
})

export const createClothing = createAsyncThunk("clothings/createClothing", clothingObj => {
    return fetch("http://localhost:3000/clothings", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.token}`
        },
        body: JSON.stringify(clothingObj)
    })
    .then(res => res.json())
    .then(newlyCreatedClothingObj => newlyCreatedClothingObj)
})


// Reducer

const clothingsSlice = createSlice({
    name: "clothings",
    initialState,
    reducers: {

    },
    extraReducers: {
        [fetchUserClothings.fulfilled](state, action){
            if(action.payload.error){
                console.log(action.payload.error)
            } else {
                state.currentUserClothings = action.payload
            }
        },
        [createClothing.fulfilled](state, action){
            if(action.payload.error){
                console.log(action.payload.error)
            } else {
                state.currentUserClothings.push(action.payload)
            }
        }
    }
})

export default clothingsSlice.reducer
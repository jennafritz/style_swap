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

export const removeUserIdFromClothing = createAsyncThunk("clothings/removeUserIdFromClothing", clothingsArrayObj => {
    return fetch("http://localhost:3000/remove_user_ids", {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.token}`
        },
        body: JSON.stringify(clothingsArrayObj)
    })
    .then(res => res.json())
    .then(updatedClothingsArray => updatedClothingsArray)
})

export const updateClothing = createAsyncThunk("clothings/updateClothing", clothingObj => {
    return fetch(`http://localhost:3000/clothings/${clothingObj.id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.token}`
        },
        body: JSON.stringify(clothingObj)
    })
    .then(res => res.json())
    .then(updatedClothingObj => updatedClothingObj)
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
                debugger
                state.currentUserClothings = action.payload
            }
        },
        [createClothing.fulfilled](state, action){
            if(action.payload.error){
                console.log(action.payload.error)
            } else {
                state.currentUserClothings.push(action.payload)
            }
        },
        [removeUserIdFromClothing.fulfilled](state, action){
            if(action.payload.error){
                console.log(action.payload.error)
            } else {
                action.payload.result.forEach(updatedClothing => {
                    state.currentUserClothings = state.currentUserClothings.filter(clothing => clothing.id !== updatedClothing.id)
                })
            }
        },
        [updateClothing.fulfilled](state, action){
            if(action.payload.error){
                console.log(action.payload.error)
            } else {
                debugger
                state.currentUserClothings.push(action.payload)
            }
        }         
    }
})

export default clothingsSlice.reducer
import {createAsyncThunk, createSlice, current} from '@reduxjs/toolkit'

const initialState = {
    currentUserClothings: [],
    spotlightClothing: {},
    currentClosetClothings: []
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

export const setSpotlightClothing = createAsyncThunk("clothings/spotlightClothing", clothingId => {
    return fetch(`http://localhost:3000/clothings/${clothingId}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.token}`
        }
    })
    .then(res => res.json())
    .then(spotlightClothing => spotlightClothing)
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

export const deleteClothing = createAsyncThunk("clothings/deleteClothing", clothingId => {
    return fetch(`http://localhost:3000/clothings/${clothingId}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.token}`
        }
    })
    .then(res => res.json())
    .then(emptyObj => emptyObj)
})

export const fetchCurrentClosetClothings = createAsyncThunk("clothings/fetchCurrentClosetClothings", userId => {
    return fetch("http://localhost:3000/fetch_closet_clothings", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.token}`
        },
        body: JSON.stringify({user_id: userId})
    })
    .then(res => res.json())
    .then(userClothings => userClothings)
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
        [setSpotlightClothing.fulfilled](state, action){
            if(action.payload.error){
                console.log(action.payload.error)
            } else {
                state.spotlightClothing = action.payload
            }
        },
        [updateClothing.fulfilled](state, action){
            if(action.payload.error){
                console.log(action.payload.error)
            } else {
                state.currentUserClothings.push(action.payload)
            }
        },
        [deleteClothing.fulfilled](state, action){
            if(action.payload.error){
                console.log(action.payload.error)
            } else {
                state.spotlightClothing = {}
            }
        },
        [fetchCurrentClosetClothings.fulfilled](state, action){
            if(action.payload.error){
                console.log(action.payload.error)
            } else {
                state.currentClosetClothings = action.payload
            }
        }      

    }
})

export default clothingsSlice.reducer
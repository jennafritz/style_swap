import {configureStore} from '@reduxjs/toolkit'
import usersReducer from './reducers/usersReducer'
import clothingsReducer from './reducers/clothingsReducer'
import swapUsersReducer from './reducers/swapUsersReducer'
import swapClothingsReducer from './reducers/swapClothingsReducer'
import swapsReducer from './reducers/swapsReducer'


const store = configureStore({
    reducer: {
        users: usersReducer,
        clothings: clothingsReducer,
        swap_users: swapUsersReducer,
        swap_clothings: swapClothingsReducer,
        swaps: swapsReducer
    }
})

export default store
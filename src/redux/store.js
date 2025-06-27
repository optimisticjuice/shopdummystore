import { configureStore } from '@reduxjs/toolkit'
import cardReducer from './Slices'

export const store = configureStore({
    reducer: {
        counter: cardReducer,
    },
})
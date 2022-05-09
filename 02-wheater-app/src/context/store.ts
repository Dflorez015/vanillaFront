import { configureStore } from '@reduxjs/toolkit'
import country from './country/country.reducer'

export const store = configureStore({
    reducer: {
        country
    },
})
export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
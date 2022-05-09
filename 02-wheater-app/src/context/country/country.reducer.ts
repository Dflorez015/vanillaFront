import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../store'
import { fetchQueryCountry } from './country.actions'
import { countryState, IChangeGeoLocation, IChangeOption } from './country.model'

export const countrySlice = createSlice({
    name: 'country',
    initialState: countryState,
    reducers: {
        changeMenuOption(state, { payload }: IChangeOption) {
            state.menu_search = payload
        },
        changeGeoLocation(state, { payload }: IChangeGeoLocation) {
            state.my_position = payload
        },
    },
    extraReducers(builder) {
        builder.addCase(fetchQueryCountry.fulfilled, (state, action) => {
            state.selected_country = action.payload
        })
    },
})

export const stateCountry = ((state: RootState) => state.country)

export default countrySlice.reducer

export const { changeMenuOption, changeGeoLocation } = countrySlice.actions
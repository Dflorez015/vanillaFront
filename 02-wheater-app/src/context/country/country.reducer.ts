import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../store'
import { fetchLattlongCountry, fetchQueryCountry } from './country.actions'
import {
    countryState, IChangeCountry,
    IChangeGeoLocation, IChangeListCountries,
    IChangeOption
} from './country.model'

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
        changeSelectedCountry(state, { payload }: IChangeCountry) {
            state.selected_country = payload
        },
        changeListCountries(state, { payload }: IChangeListCountries) {
            state.list_countries = payload
        },
    },
    extraReducers(builder) {
        builder.addCase(fetchQueryCountry.pending, (state) => {
            state.loading = true
        })
        builder.addCase(fetchQueryCountry.fulfilled, (state) => {
            state.loading = false
        })
        builder.addCase(fetchLattlongCountry.pending, (state) => {
            state.list_country_loading = true
        })
        builder.addCase(fetchLattlongCountry.fulfilled, (state) => {
            state.list_country_loading = false
        })
    },
})

export const stateCountry = ((state: RootState) => state.country)

export default countrySlice.reducer

export const { changeMenuOption, changeGeoLocation,
    changeSelectedCountry, changeListCountries } = countrySlice.actions
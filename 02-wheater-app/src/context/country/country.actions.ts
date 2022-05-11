import { createAsyncThunk } from "@reduxjs/toolkit";
import { ICountries, rest, wheater_api } from "../../api";
import { getMyPosition } from "../../utils/functions/geoLocation";
import { AppDispatch, RootState } from "../store";
import { changeListCountries, changeMenuOption, changeSelectedCountry } from "./country.reducer";

// Close menu country option
export const set_option_menu = () => (dispatch: AppDispatch, getState: () => RootState) => {
    const { menu_search } = getState().country
    dispatch(changeMenuOption(!menu_search))
}

/**
 * Set my position by geolocation
 */
export const set_geo_location = () => (dispatch: AppDispatch, getState: () => RootState) => {
    const { my_position } = getState().country
    if (my_position) {
        dispatch(fetchLattlongCountry(my_position))
    } else {
        dispatch(getMyPosition())
    }
}


// ----------------- Thunks --------------------

export const fetchQueryCountry = createAsyncThunk(
    'country/fetchQueryCountry',
    async (query: string, thunkAPI) => {
        const response: ICountries = await (await rest.get(wheater_api.searchCityQuery + query)).data
        thunkAPI.dispatch(changeSelectedCountry(response))
    }
)

export const fetchLattlongCountry = createAsyncThunk(
    'country/fetchLattlongCountry',
    async (query: string, thunkAPI) => {
        const response: ICountries[] = await (await rest.get(wheater_api.searchCityLattlong + query)).data
        console.log('response', response)
        thunkAPI.dispatch(changeListCountries(response))
    }
)

import { createAsyncThunk } from "@reduxjs/toolkit";
import { ICountries, rest } from "../../api";
import { AppDispatch, RootState } from "../store";
import { changeGeoLocation, changeMenuOption } from "./country.reducer";

// Close menu country option
export const set_option_menu = () => (dispatch: AppDispatch, getState: () => RootState) => {
    const { menu_search } = getState().country
    dispatch(changeMenuOption(!menu_search))
}

/**
 * Set my position by geolocation
 * @param {GeolocationCoordinates} position my position
 */
export const set_geo_location = (position: GeolocationCoordinates) => (dispatch: AppDispatch) => {
    const { latitude, longitude } = position
    dispatch(changeGeoLocation({ latitude, longitude }))
}


// ----------------- Thunks --------------------

export const fetchQueryCountry = createAsyncThunk(
    'country/fetchQueryCountry',
    async (query: string, thunkAPI) => {
        const response: ICountries | ICountries[] = await (await rest.get(query)).data
        return response
    }
)

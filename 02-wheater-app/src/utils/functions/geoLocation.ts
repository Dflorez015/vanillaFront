import { AppDispatch } from "../../context"
import { set_geo_location } from "../../context/country/country.actions"

/**
 * this function set my location by gps and call a redux action
 * @returns {GeolocationPosition} my position
 */
export const getMyPosition = () => (dispatch: AppDispatch) => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            dispatch(set_geo_location(position.coords))
        })
    } else {
        alert("Geolocation is not supported by this browser.")
    }
}

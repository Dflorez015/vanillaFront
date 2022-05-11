import { AppDispatch } from "../../context"
import { fetchLattlongCountry } from "../../context/country/country.actions"
import { changeGeoLocation } from "../../context/country/country.reducer"

/**
 * this function set my location by gps and call a redux action
 * @returns {GeolocationPosition} my position
 */
export const getMyPosition = () => (dispatch: AppDispatch) => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            const { latitude, longitude } = position.coords
            const lattlongQuery = `${latitude},${longitude}`
            dispatch(changeGeoLocation(lattlongQuery))
            dispatch(fetchLattlongCountry(lattlongQuery))
        })
    } else {
        alert("Geolocation is not supported by this browser.")
    }
}

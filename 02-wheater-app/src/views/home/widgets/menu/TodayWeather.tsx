import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../../context";
import { set_geo_location, set_option_menu } from "../../../../context/country/country.actions";
import { StyleButtom, StyleRowSpace } from "../../../../styles"
import { StyleMenuInfoWheaterContent, StyleUbicationBtn } from "../home.style"

export const TodayWeather = () => {
  // hooks
  const dispatch = useDispatch<AppDispatch>();
  // functions
  const close_option = () => dispatch(set_option_menu())
  const set_my_position = () => {
    dispatch(set_geo_location())
  }
  
  return (
    <StyleMenuInfoWheaterContent>
      <StyleRowSpace>
        <StyleButtom
          type="button"
          color="var(--white)"
          background="var(--dark_gray)"
          onClick={close_option}>
          Search for places
        </StyleButtom>
        <StyleUbicationBtn type="button" onClick={set_my_position} />

      </StyleRowSpace>
    </StyleMenuInfoWheaterContent>
  )
}

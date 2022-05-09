import { useSelector } from 'react-redux'
import { stateCountry } from '../../../../context'
import { StyleMenu, StyleMenuLayout } from '../home.style'
import { FilterCity } from './FilterCity'
import { TodayWeather } from './TodayWeather'

export const Menu = () => {
    const { menu_search } = useSelector(stateCountry)

    return (
        <StyleMenu searchOption={menu_search}>
            <StyleMenuLayout>
                {menu_search ? (
                    <FilterCity />
                ) : (
                    <TodayWeather />
                )}
            </StyleMenuLayout>
        </StyleMenu>
    )
}

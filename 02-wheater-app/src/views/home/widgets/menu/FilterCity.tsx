import { useDispatch, useSelector } from 'react-redux'
import { CityListFilter, SearchButtom } from '../../../../components'
import { AppDispatch, stateCountry } from '../../../../context'
import { set_option_menu } from '../../../../context/country/country.actions'
import { StyleInputSearch, StyleRowSpace } from '../../../../styles'
import { StyleCloseBtnMenu, StyleMenuSearchContent } from '../home.style'

export const FilterCity = () => {

    const dispatch = useDispatch<AppDispatch>();
    const { list_country_loading } = useSelector(stateCountry)

    const close_option = () => dispatch(set_option_menu())

    return (
        <StyleMenuSearchContent>
            <StyleCloseBtnMenu type="button" onClick={close_option} />
            <StyleRowSpace>
                <StyleInputSearch type="text" />
                <SearchButtom />
            </StyleRowSpace>
            <CityListFilter loading={true}>
                <>

                </>
            </CityListFilter>
        </StyleMenuSearchContent>
    )
}

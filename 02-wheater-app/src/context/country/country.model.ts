import { ICountries } from "../../api";

/*------------- State model -------------*/
export interface ICoords {
    latitude:       number;
    longitude:      number;
}

export interface ICountryModel {
    selected_country:   ICountries | null;
    list_countries:          ICountries[];
    menu_search:                  boolean;
    my_position?:                 ICoords;
    loading:                      boolean;
}

/*------------- Initial State -------------*/
export const countryState:ICountryModel = {
    selected_country:           null,
    list_countries:               [],
    menu_search:                false,
    loading:                    false,
}

/*------------- Actions -------------*/

export interface IChangeOption{
    payload:                  boolean;
}
export interface IChangeGeoLocation{
    payload:                ICoords;
}
export interface IChangeCountry{
    payload:               ICountries;
}
import { ICountries } from "../../api";

/*------------- State model -------------*/

export interface ICountryModel {
    selected_country:   ICountries | null;
    list_countries:          ICountries[];
    menu_search:                  boolean;
    my_position?:                  string;
    loading:                      boolean;
    list_country_loading:         boolean;
}

/*------------- Initial State -------------*/
export const countryState:ICountryModel = {
    selected_country:           null,
    list_countries:               [],
    menu_search:                false,
    loading:                    false,
    list_country_loading:       false,
}

/*------------- Actions -------------*/

export interface IChangeOption{
    payload:                  boolean;
}
export interface IChangeGeoLocation{
    payload:                  string;
}
export interface IChangeCountry{
    payload:               ICountries;
}
export interface IChangeListCountries{
    payload:               ICountries[];
}

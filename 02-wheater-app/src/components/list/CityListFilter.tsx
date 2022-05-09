import React from "react"
import { StyleList } from "../../styles"
import { IChildrenProps } from "../../ts/interface/componentProps.interface"

export const CityListFilter: React.FC<IChildrenProps> = ({ children }) => {
    return (
        <StyleList>
            {children}
        </StyleList>
    )
}

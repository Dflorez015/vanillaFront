import React from "react"
import { StyleList } from "../../styles"
import { IChildrenProps } from "../../ts/interface/componentProps.interface"

export const CityListFilter: React.FC<IChildrenProps> = ({ children, loading }) => {
    return (
        <>
            {loading ? (
                <h1>
                   
                </h1>
            ) :
                <StyleList>
                    {children}
                </StyleList>
            }
        </>
    )
}

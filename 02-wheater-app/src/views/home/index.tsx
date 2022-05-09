import { RootContainer } from '../../styles'
import { MainWheaterInfo } from './widgets/main/Index'
import { Menu } from './widgets/menu/Index'

export const HomePage = () => {
    return (
        <RootContainer>
            <Menu />
            <MainWheaterInfo />
        </RootContainer>
    )
}

import { height } from '@mui/system'
import { HeaderRoot, HeaderButton, HeaderInput } from './Header.styles'

const Header = () => {
  return (
    <HeaderRoot>
			<HeaderInput placeholder='Поиск задания' disableUnderline={true}></HeaderInput>
      <HeaderButton>Connect</HeaderButton>
    </HeaderRoot>
  )
}

export { Header }
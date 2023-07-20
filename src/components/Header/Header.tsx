import { HeaderRoot, HeaderButton, HeaderInput } from './Header.styles'
import { THeaderProps } from './types'
import { PageType } from '../../pages/constants'
import { TasksHeader } from './components/TasksHeader'
import { AddTaskHeader } from './components/AddTaskHeader'

import { FC } from 'react'

type TComponentMap = {
  [key in PageType]: FC
}

const ComponentMap: TComponentMap = {
  [PageType.Tasks]: TasksHeader,
  [PageType.AddTask]: AddTaskHeader,
}

const Header: FC<THeaderProps> = ({ page, headerProps }) => {
  const HeaderComponent = ComponentMap[page]
  return (
    <HeaderRoot>
      <HeaderComponent {...headerProps} />
    </HeaderRoot>
  )
}

export { Header }

{/* <HeaderInput placeholder='Поиск задания' disableUnderline={true}></HeaderInput>
<HeaderButton>Connect</HeaderButton> */}

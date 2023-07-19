import { HeaderRoot, HeaderButton, HeaderInput } from './Header.styles'
import { THeaderProps } from './types'
import { Burger } from '../Burger'

import { FC } from 'react'

const ComponentMap: any = {
  Burger: (
    <>
      <Burger onClick={() => console.log('Burger')} />
    </>
  ),
  Connect: (
    <HeaderButton>Connect</HeaderButton>
  ),
}

type TCongig<T> = (page: string, pageOptions: T) => {
  tasks: [string, string, string]
  addTask: [null, string, string]
} 

type TPageConfig<T> = (pageOptions: T) => [string|null, string|null, string|null]

const tasks: TPageConfig<{ connect?: boolean }> = ({ connect }) => ['Burger', 'Search', connect ? 'Avatar' : 'Connect'] 

const Header: FC<THeaderProps> = ({ page, pageOptions }) => {

  return (
    <HeaderRoot>
			<HeaderInput placeholder='Поиск задания' disableUnderline={true}></HeaderInput>
      <HeaderButton>Connect</HeaderButton>
    </HeaderRoot>
  )
}

export { Header }
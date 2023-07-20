import { Header } from '../Header'
import { FC, PropsWithChildren } from 'react'
import { PageRoot } from './Page.style'
import { PageType } from '../../pages/constants'

type TPageProps = PropsWithChildren & {
  type: PageType;
  headerProps: unknown;
}

export const Page: FC<TPageProps> = ({ children, type, headerProps }) => {
  return (
    <PageRoot>
      <Header page={type} headerProps={headerProps} />
      {children}
    </PageRoot>
  )
}
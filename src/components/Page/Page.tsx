import { Header } from '../Header'
import { FC, PropsWithChildren } from 'react'
import { PageRoot } from './Page.style'

type TPageProps = PropsWithChildren & {

}

export const Page: FC<TPageProps> = ({ children }) => {
  return (
    <PageRoot>
      <Header />
      {children}
    </PageRoot>
  )
}
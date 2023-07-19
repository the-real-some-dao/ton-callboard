import { Header } from '../Header'
import { FC, PropsWithChildren } from 'react'
import { PageRoot } from './Page.style'

type TPageProps = PropsWithChildren & {
  type: string;
}

export const Page: FC<TPageProps> = ({ children, type }) => {
  return (
    <PageRoot>
      <Header page={type} />
      {children}
    </PageRoot>
  )
}
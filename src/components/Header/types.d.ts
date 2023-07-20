import { ComponentProps } from 'react'
import { PageType } from '../../pages/constants'

export type THeaderConfigOptions = {
  tasks?: {
    connect?: boolean
  }
}

export type THeaderProps = {
  page: PageType;
  headerProps: any;
}
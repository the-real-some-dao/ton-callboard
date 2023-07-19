import { ComponentProps } from 'react'

export type THeaderConfigOptions = {
  tasks?: {
    connect?: boolean
  }
}

export type THeaderProps = ComponentProps & {
  page: string;
  pageOptions: any;
}
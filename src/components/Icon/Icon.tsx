import { SvgIcon } from '@mui/material'
import { FC } from 'react'

import { NameToSvg } from './constants'
import { TIconProps } from './types'

export const Icon: FC<TIconProps> = ({ name }) => {
  return (
    <SvgIcon component={NameToSvg[name]} />
  )
}
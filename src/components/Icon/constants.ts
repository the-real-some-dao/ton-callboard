import { ReactComponent as BurgerSvg } from './icons/burger.svg'
import { ReactComponent as CloseIconSvg } from './icons/closeIcon.svg'

export const NameToSvg: { [key: string]: any } = {
  burger: BurgerSvg,
	closeIcon: CloseIconSvg
}

export enum Names {
  Burger = 'burger',
	CloseIcon = 'closeIcon'
}
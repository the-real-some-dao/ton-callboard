import { ReactComponent as BurgerSvg } from './icons/burger.svg'
import { ReactComponent as CloseIconSvg } from './icons/closeIcon.svg'
import { ReactComponent as TonkeeperIconSvg } from './icons/tonkeeper.svg'

export const NameToSvg: { [key: string]: any } = {
  burger: BurgerSvg,
	closeIcon: CloseIconSvg,
	tonkeeperIcon: TonkeeperIconSvg,
}

export enum Names {
  Burger = 'burger',
	CloseIcon = 'closeIcon',
	TonkeeperIcon = 'tonkeeperIcon',
}
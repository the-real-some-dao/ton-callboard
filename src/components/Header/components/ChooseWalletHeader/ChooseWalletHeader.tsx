import { CloseIcon } from "../../../CloseIcon"
import { HeaderRoot } from "./ChooseWalletHeader.styles"

export const ChooseWalletHeader = () => {
  return (
    <HeaderRoot>
			<div>
				Подключить кошелек
			</ div>
			<CloseIcon />
		</HeaderRoot>
  )
}
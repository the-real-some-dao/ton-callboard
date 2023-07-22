import { Page } from '../../components/Page'
import { TonkeeperIcon } from '../../components/Tonkeeper'
import { PageType } from '../constants'
import { FirstButton, HintCommentary, InputContainer, MediumCommentary, RectBreak } from './ChooseWallet.style'
import AbcIcon from '@mui/icons-material/Abc';

export const ChooseWallet = ({ theme, children, ...props }: any) => {
  return (
    <Page type={PageType.ChooseWallet} headerProps={{}}>
			<InputContainer>	
				<MediumCommentary>
					Кошелек — это простой и анонимный способ входа в систему. Чтобы создать задание или откликнуться на него, вы должны подключить кошелек или создать новый.
				</MediumCommentary>
				<FirstButton theme={theme} {...props} > <TonkeeperIcon />Tonkeeper</FirstButton>
				<FirstButton leftIcon={<AbcIcon />} theme={theme} {...props} ></FirstButton>
				{/* <FirstButton >ZHOPA</FirstButton>
				<FirstButton ></FirstButton> */}
				<RectBreak></RectBreak>
				<HintCommentary href="https://tonkeeper.com/" target="_blank">Создать новый кошелек</HintCommentary>
			</InputContainer>
    </Page>
  )
}
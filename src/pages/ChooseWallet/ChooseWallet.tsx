import { Page } from '../../components/Page'
import { PageType } from '../constants'
import { FirstButton, HintCommentary, InputContainer, MediumCommentary, RectBreak } from './ChooseWallet.style'

export const ChooseWallet = ({ theme, children, ...props }: any) => {
  return (
    <Page type={PageType.ChooseWallet} headerProps={{}}>
			<InputContainer>	
				<MediumCommentary>
					Кошелек — это простой и анонимный способ входа в систему. Чтобы создать задание или откликнуться на него, вы должны подключить кошелек или создать новый.
				</MediumCommentary>
				{/* <FirstButton theme={theme} {...props} >ZHOPA</FirstButton>
				<FirstButton theme={theme} {...props} ></FirstButton> */}
				<FirstButton >ZHOPA</FirstButton>
				<FirstButton ></FirstButton>
				<RectBreak></RectBreak>
				<HintCommentary>Создать новый кошелек</HintCommentary>
			</InputContainer>
    </Page>
  )
}
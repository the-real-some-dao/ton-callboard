import { Page } from '../../components/Page'
import { HeaderInput, InputContainer, LargeCommentary, MediumCommentary } from './AddTask.style'

export const AddTask = () => {
  return (
    <Page>
			<InputContainer>
				<LargeCommentary>
					Что нужно сделать?
				</LargeCommentary>
				<MediumCommentary>
					Название задания
				</MediumCommentary>
				<HeaderInput sx={{
					':before': { borderBottomColor: 'red' },
					// underline when selected
					':after': { borderBottomColor: 'red' },
				}}>
				</HeaderInput>
				<MediumCommentary>
					Например, создать бот для блокчейн-голосования
				</MediumCommentary>
			</InputContainer>
    </Page>
  )
}
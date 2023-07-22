import styled from "@emotion/styled";
import { Button } from "@mui/base";
import { TTheme } from "../../App";


export const InputContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 335px;
	margin: 20px;
`

export const MediumCommentary = styled.div`
	color: #FFF;
	font-family: Inter;
	font-size: 12px;
	font-style: normal;
	font-weight: 400;
	line-height: normal;
`

export const FirstButton = styled(Button)(({ theme }: { theme: TTheme }) => ({
	width: '335px',
	height: '50px',
	'margin-top': '15px',
	padding: '10px',
	'border-radius': '5px',
	border: '1px solid',
	borderColor: theme.secondaryBGColor ?? '#3A4362',
	'background-color': 'transparent',
}))

export const RectBreak = styled.div`
	margin-top: 20px;
	width: 335px;
	height: 1px;
	flex-shrink: 0;
	opacity: 0.30000001192092896;
	background: linear-gradient(135deg, rgba(255, 255, 255, 0.00) 0%, #FFF 48.96%, rgba(255, 255, 255, 0.00) 100%);
`

export const HintCommentary = styled.a`
	width: 335px;
	margin-top: 20px;
	color: #45AEF5;
	text-align: center;
	font-family: Inter;
	font-size: 12px;
	font-style: normal;
	font-weight: 700;
	line-height: 20px; 
`
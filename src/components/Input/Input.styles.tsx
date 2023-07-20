import styled from '@emotion/styled'
import { Input } from '@mui/material';
import { TTheme } from '../../App';

export const InputRoot = styled(Input)(({ theme }: { theme: TTheme }) => ({
  backgroundColor: theme.secondaryBGColor ?? '#3A4362',
	color: 'white',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
	outline: 'none',
	border: 'none',
	margin: '0px 20px',
	padding: '5px 10px',
}))
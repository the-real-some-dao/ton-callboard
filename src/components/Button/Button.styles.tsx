import styled from '@emotion/styled'
import { Button } from '@mui/material';
import { TTheme } from '../../App';

export const ButtonRoot = styled(Button)(({ theme }: { theme: TTheme }) => ({
  backgroundColor: theme.button ?? '#45AEF5',
  color: theme.buttonText ?? '#000015',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '25px',
	fontFamily: "Inter"
}))
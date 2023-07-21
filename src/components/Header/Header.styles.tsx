import styled from '@emotion/styled'
import { Button } from '../Button'
import { Input } from '../Input'

export const HeaderRoot = styled.header`
  display: flex;
  height: 70px;
  border: 1px solid rgba(217, 217, 217, 0.2);
	font-family: "Inter";
`

export const HeaderButton = styled(Button)`
  width: 96px;
  height: 30px;
`

export const HeaderInput = styled(Input)`
  width: 285px;
  height: 30px;
  border-radius: 8px;
`

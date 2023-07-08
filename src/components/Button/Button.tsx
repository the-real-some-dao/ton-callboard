import { ButtonRoot } from './Button.styles'

const Button = ({ theme, children, ...props }: any) => {
  return (
    <ButtonRoot theme={theme} {...props} >
      {children}
    </ButtonRoot>
  )
}

export { Button };
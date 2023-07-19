import { InputRoot } from './Input.styles'

const Input = ({ theme, children, ...props }: any) => {
  return (
    <InputRoot theme={theme} {...props} >
      {children}
    </InputRoot>
  )
}

export { Input };
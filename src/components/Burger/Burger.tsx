import { Icon } from '../Icon'

export const Burger = ({ onClick }: any) => {
  return (
    <div onClick={onClick}>
      <Icon name="burger" />
    </div>
  )
}
import { Icon, Names } from '../Icon'

export const Burger = ({ onClick }: any) => {
  return (
    <div onClick={onClick}>
      <Icon name={Names.Burger} />
    </div>
  )
}
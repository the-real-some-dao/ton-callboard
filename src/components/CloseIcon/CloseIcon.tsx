import { Icon, Names } from '../Icon'

export const CloseIcon = ({ onClick }: any) => {
  return (
    <div onClick={onClick}>
      <Icon name={Names.CloseIcon} />
    </div>
  )
}
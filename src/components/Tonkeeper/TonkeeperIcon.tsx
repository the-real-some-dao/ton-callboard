import { Icon, Names } from '../Icon'

export const TonkeeperIcon = ({ onClick }: any) => {
  return (
    <div onClick={onClick}>
      <Icon name={Names.TonkeeperIcon} />
    </div>
  )
}
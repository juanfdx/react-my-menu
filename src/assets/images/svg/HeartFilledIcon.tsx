import heartFilled from '../../images/hearts/heart_filled.png'

type Props = {
  className?: string
}

export const HeartFilledIcon = ({ className }: Props) => {
  
  return (
    <img className={className} src={heartFilled} alt="red heart" />
  )
}
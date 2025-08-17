import heartOutline from '../../images/hearts/heart_outlined.png'

type Props = {
  className?: string
}


export const HeartOutlineIcon = ({ className }: Props) => {

  return (
    <img className={className} src={heartOutline} alt="outlined heart" />
  )
}
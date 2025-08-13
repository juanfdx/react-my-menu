import './Icon.css';
import { RiHomeLine } from "react-icons/ri";
import { IoSettingsOutline } from "react-icons/io5";
import { IoIosHeart } from "react-icons/io";
import { ForkKnifeIcon } from '../../../assets/images/svg/ForkKnifeIcon';
import { StartIcon } from '../../../assets/images/svg/StartIcon';

type IconProps = {
  type: string;
  className?: string
};


export const Icon = ({ type, className }: IconProps) => {
  return (
    <>
      {type === 'home' && (
        <RiHomeLine className={className} />
      )}
      {type === 'settings' && (
        <IoSettingsOutline className={className} />
      )}
      {type === 'fork-knife' && (
        <ForkKnifeIcon className={className} />
      )}
      {type === 'heart' && (
        <IoIosHeart className={className} />
      )}
      {type === 'star' && (
        <StartIcon className={className} />
      )}
    </>
  )
}
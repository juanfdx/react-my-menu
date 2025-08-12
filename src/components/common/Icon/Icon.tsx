import './Icon.css';
import { RiHomeLine } from "react-icons/ri";
import { IoSettingsOutline } from "react-icons/io5";
// import { PiForkKnifeBold } from "react-icons/pi";
import { IoIosHeart } from "react-icons/io";
import { FaStar } from "react-icons/fa";
import { ForkKnifeIcon } from '../../../assets/images/svg/ForkKnifeIcon';

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
        // <PiForkKnifeBold className={className} />
        <ForkKnifeIcon className={className} />
      )}
      {type === 'heart' && (
        <IoIosHeart className={className} />
      )}
      {type === 'star' && (
        <FaStar className={className} />
      )}
    </>
  )
}
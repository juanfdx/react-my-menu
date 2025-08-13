import './Icon.css';
import { RiHomeLine } from "react-icons/ri";
import { IoSettingsOutline } from "react-icons/io5";
import { IoIosHeart } from "react-icons/io";
import { ForkKnifeIcon } from '../../../assets/images/svg/ForkKnifeIcon';
import { StartIcon } from '../../../assets/images/svg/StartIcon';
import { AllergenIcon } from '../../../assets/images/svg/AllergenIcon';
import { ViewIcon } from '../../../assets/images/svg/ViewIcon';

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
      {type === 'allergen' && (
        <AllergenIcon className={className} />
      )}
      {type === 'view' && (
        <ViewIcon className={className} />
      )}
    </>
  )
}
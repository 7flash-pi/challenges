import React from "react";
import styles from '../Rating.module.css'

type Props = {
  icon: string;
  type?: 'text'|'icon';
  isHovered?:boolean
};

const IconWrapper = ({ icon,type='icon',isHovered=false }: Props) => {
  return (
    <>
      <div className={isHovered ? styles.hovered :styles.iconWrapper}>
       {type==='icon' ? <img
          src={icon}
          alt="star-icon"
          loading="lazy"
        /> : <span>{icon}</span>}
      </div>
    </>
  );
};

export default IconWrapper;

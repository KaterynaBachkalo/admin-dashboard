import React, { FC } from "react";
import sprite from "../img/sprite.svg";

interface IProps {
  name: string;
  width?: number;
  height?: number;
}

const Icon: FC<IProps> = ({ name, width = 18, height = 18 }) => (
  <svg width={width} height={height}>
    <use xlinkHref={`${sprite}#${name}`} />
  </svg>
);

export default Icon;

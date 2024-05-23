import React, { FC, LegacyRef, RefObject, useRef } from "react";
import { generateTime } from "../../services/generateTime";
import css from "./Dropdown.module.css";
import useCloseDropdown from "../../services/closeDropdown";
import { categories } from "../../data/categories";

interface IProps {
  onSelect: (value: string) => void;
  onClose: (value: boolean) => void;
  ref: LegacyRef<HTMLDivElement>;
}

const Dropdown: FC<IProps> = React.forwardRef(({ onSelect, onClose }, ref) => {
  const handleClick = (selectedCategory: string) => {
    onSelect(selectedCategory);
  };

  const inputRef = useRef(null);

  useCloseDropdown(onClose, inputRef, ref as RefObject<HTMLDivElement>);

  return (
    <div className={css.dropDown} ref={inputRef}>
      <div className={css.container}>
        <ul className={css.list}>
          {categories.map((category) => (
            <li
              key={category}
              onClick={() => handleClick(category)}
              className={css.category}
            >
              {category}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
});

export default Dropdown;

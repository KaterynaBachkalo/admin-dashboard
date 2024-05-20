import { FC, useState } from "react";
import Icon from "../Icon";
import css from "./Sidebar.module.css";
import { NavLink } from "react-router-dom";

interface IProps {
  onClose: () => void;
}

const Sidebar: FC<IProps> = ({ onClose }) => {
  const [openMenu, setOpenMenu] = useState(false);

  const handleLogOut = () => {};

  return (
    <div className={css.sidebar}>
      <nav className={css.navigation}>
        <div onClick={onClose} className={css.icon}>
          <Icon name="close" width={32} height={32} />
        </div>

        <ul className={css.list}>
          <li>
            <NavLink to="/dashboard" className={css.link}>
              <Icon name="dashboard" />
            </NavLink>
          </li>

          <li>
            <NavLink to="/orders" className={css.link}>
              <Icon name="orders" />
            </NavLink>
          </li>

          <li>
            <NavLink to="/products" className={css.link}>
              <Icon name="products" />
            </NavLink>
          </li>

          <li>
            <NavLink to="/suppliers" className={css.link}>
              <Icon name="suppliers" />
            </NavLink>
          </li>

          <li>
            <NavLink to="/customers" className={css.link}>
              <Icon name="customers" />
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;

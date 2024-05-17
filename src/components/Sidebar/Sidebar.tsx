import css from "./Sidebar.module.css";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const handleLogOut = () => {};

  return (
    <nav className={css.navigation}>
      <NavLink to="/" className={css.logo}>
        Nanny.Services
      </NavLink>

      <div className={css.wraplistSpace}>
        <div className={css.wraplist}>
          <ul className={css.list}>
            <li>
              <NavLink to="/" className={css.link}>
                Home
              </NavLink>
            </li>

            <li>
              <NavLink to="/" className={css.link}>
                Nannies
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;

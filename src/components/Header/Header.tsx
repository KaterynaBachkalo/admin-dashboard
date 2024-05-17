import { Link } from "react-router-dom";
import css from "./Header.module.css";

const Header = () => {
  return (
    <header className={css.header}>
      <div className={css.container}>
        <nav className={css.navigation}>
          <Link to="/" className={css.logo}>
            <img src="../../img/Mask group.png" alt="logo" />
            E-Pharmacy
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;

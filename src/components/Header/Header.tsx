import { Link } from "react-router-dom";
import css from "./Header.module.css";
import LogoAuthImage from "../../img/logoAuth.png";
import Icon from "../Icon";
import { FC, useState } from "react";
import { useDispatch } from "react-redux";
import { logOutThunk } from "../../redux/auth/operations";
// import { useSelector } from "react-redux";
// import { selectCurrentUser } from "../../redux/auth/selectors";

interface IProps {
  onOpen: (value: boolean) => void;
}

const Header: FC<IProps> = ({ onOpen }) => {
  // const currentUser = useSelector(selectCurrentUser);

  const [iconName, setIconName] = useState("logout");

  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(logOutThunk() as any);
  };

  return (
    <header className={css.header}>
      <nav className={css.navigation}>
        <div onClick={() => onOpen(true)} className={css.icon}>
          <Icon name="menu-burger" width={32} height={32} />
        </div>
        <Link to="/" className={css.logo}>
          <img src={LogoAuthImage} alt="logo" />
          <div>
            <p className={css.logoTitle}>Medicine store</p>
            <p className={css.logotext}>Dasboard | vendor@gmail.com</p>
            {/* <p>Dasboard | {currentUser.email}</p> */}
          </div>
        </Link>
      </nav>
      <div
        className={css.iconLogout}
        onMouseEnter={() => setIconName("logout-active")}
        onMouseLeave={() => setIconName("logout")}
        onClick={handleLogOut}
      >
        <Icon name={iconName} width={44} height={44} />
      </div>
    </header>
  );
};

export default Header;

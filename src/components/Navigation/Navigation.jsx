import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import clsx from "clsx";

import css from "./Navigation.module.css";
import { selectIsLoggedIn } from "../../redux/auth/selectors";

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const buildClasses = ({ isActive }) => {
    return clsx(css.link, isActive === true && css.active);
  };

  return (
    <div>
      <NavLink className={buildClasses} to="/">
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink className={buildClasses} to="/contacts">
          Contacts
        </NavLink>
      )}
    </div>
  );
};

export default Navigation;

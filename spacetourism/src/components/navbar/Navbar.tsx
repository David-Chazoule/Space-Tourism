import { nav } from "../../data/nav";
import { NavLink } from "react-router-dom";
import { showMenuProps } from "../header/Header";
import cross from "../../assets/shared/icon-close.svg";

interface NavItem {
  num: string;
  nav: string;
  route: string;
}

function Navbar({ showMenu, setShowMenu, handleMenu }: showMenuProps) {
  const handleClick = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="navbar">
      <nav>
        <ul>
          <div className="closing-box" onClick={handleMenu}>
            <img src={cross} alt="cross-img" />
          </div>
          {nav &&
            nav.map((elem: NavItem, index: number) => (
              <NavLink
                to={`/${elem.route}`}
                key={index}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                <li onClick={() => handleClick()}>
                  <span>{elem.num}</span> {elem.nav}
                </li>
              </NavLink>
            ))}
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;

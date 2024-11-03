import { nav } from "../../data/nav";
import { Link } from "react-router-dom";
import { showMenuProps } from "../header/Header";
import cross from "../../assets/shared/icon-close.svg";
import { useState } from "react";

interface NavItem {
  num: string;
  nav: string;
  route: string;
}

function Navbar({ handleMenu }: showMenuProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setActiveIndex(index);
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
              <Link to={`/${elem.route}`} key={index}>
                <li
                  onClick={() => handleClick(index)}
                  className={index === activeIndex ? "active" : ""}
                >
                  <span>{elem.num}</span> {elem.nav}
                </li>
              </Link>
            ))}
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;

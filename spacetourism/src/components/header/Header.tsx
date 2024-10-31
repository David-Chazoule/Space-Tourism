import Navbar from "../navbar/Navbar";
import logo from "../../assets/shared/logo.svg";
import burger from "../../assets/shared/icon-hamburger.svg";
import { useState } from "react";

export interface showMenuProps {
  showMenu: boolean;
  handleMenu: () => void;
}

function Header() {
  const [showMenu, setShowMenu] = useState<boolean>(false);

  const handleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="header_container">
      <div className="logo_container">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="line"></div>
      </div>

      <div className={`navbar_container ${showMenu ? "show-nav" : ""}`}>
        <div className="line"></div>
        <Navbar showMenu={showMenu} handleMenu={handleMenu} />
      </div>
      <img
        className="burger"
        src={burger}
        alt="burger-img"
        onClick={handleMenu}
      />
    </div>
  );
}

export default Header;

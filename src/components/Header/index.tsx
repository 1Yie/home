import React, { useState  } from "react";
import style from "./header.module.css";
import { Link, useLocation } from "react-router-dom";

const headerName = {
  name: "ichiyo",
  link: "/",
};

const headerList = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "About",
    link: "/about",
  },
  {
    name: "Links",
    link: "/links",
  },
];

const Header: React.FC = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className={style.header}>
      <section>
        <div className={style.headerContainer}>
          <a href={headerName.link} className="HtmlLogo">
            {headerName.name}
          </a>
          
          <button 
            className={style.menuButton}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle navigation"
          >
            ☰
          </button>

          <nav className={`${style.nav} ${isMenuOpen ? style.navActive : ""}`}>
            <ul className={style.navList}>
              {headerList.map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.link}
                    className={
                      location.pathname === item.link ? style.active : ""
                    }
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </section>
    </header>
  );
};

export default Header;

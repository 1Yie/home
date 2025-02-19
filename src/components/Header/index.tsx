import React from "react";
import style from "./header.module.css";
import { Link, useLocation } from "react-router-dom"; // 导入 Link 和 useLocation

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
  const location = useLocation(); // 使用 useLocation Hook 获取当前 URL 信息

  return (
    <>
      <header className={style.header}>
        <section>
          <div className={style.headerContainer}>
            <a href={headerName.link} className="HtmlLogo">
              {headerName.name}
            </a>
            <nav>
              <ul>
                {headerList.map((item, index) => (
                  <li key={index}>
                    <Link
                      to={item.link}
                      className={
                        location.pathname === item.link ? style.active : ""
                      }
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
    </>
  );
};

export default Header;

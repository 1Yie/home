import React from "react";
import { Icon } from "@ricons/utils";
import { Github, Twitter } from "@ricons/fa";
import style from "./footer.module.css";

const headerName = {
  name: "ichiyo",
  link: "/",
};

const iconComponents = {
  Github: Github,
  Twitter: Twitter,
};

const socialLinks = [
  {
    name: "GitHub",
    link: "https://github.com/1Yie",
    icon: "Github",
  },
  {
    name: "Twitter",
    link: "https://x.com/IchiyoNico",
    icon: "Twitter",
  },
];

const Footer: React.FC = () => {
  return (
    <footer className={style.footer}>
      <section>
        <div className={style.container}>
          <a href={headerName.link} className="HtmlLogo">
            {headerName.name}
          </a>
          <div className={style.copyright}>
            <p>Copyright &copy; {new Date().getFullYear()} ichiyo</p>
          </div>
          <div className={style.sociallinks}>
            {socialLinks.map((link, index) => {
              const IconComponent =
                iconComponents[link.icon as keyof typeof iconComponents];
              if (!IconComponent) {
                console.warn(
                  `Icon component not found for icon name: ${link.icon}`
                );
                return null;
              }

              return (
                <a
                  key={index}
                  href={link.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={style.socialLink}
                >
                  <Icon size={24} color="#777">
                    <IconComponent aria-label={link.name} />
                  </Icon>
                </a>
              );
            })}
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;

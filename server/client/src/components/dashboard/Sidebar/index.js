import React, { useEffect, useState } from "react";
import { data } from "./data";
import {
  SidebarItem,
  SidebarLink,
  SidebarMenu,
  SidebarWrapper,
  SidebarBrand,
  LinksWrapper,
} from "./style";
import Logo from "./../../../assets/light-logo-new.png";
import { useLocation, useParams } from "react-router-dom";
export const Sidebar = () => {
  const { pathname } = useLocation();
  const joinPath = pathname.split("/").join("");
  const [active, setActive] = useState(false);
  const handleActive = (title) => {
    const titleLow = title.toLowerCase();
    setActive(titleLow);
  };

  useEffect(() => {
    handleActive("dashboard");
  }, []);
  return (
    <SidebarWrapper>
      <SidebarMenu>
        <SidebarBrand>
          <SidebarLink to="/">
            <SidebarItem className="brand-link mb-0">
              <img src={Logo} />
            </SidebarItem>
          </SidebarLink>
        </SidebarBrand>
        <LinksWrapper>
          {data.map((item, index) => (
            <SidebarLink to={item.link} key={index}>
              <SidebarItem
                onClick={() => handleActive(item.title)}
                className={active === item.title.toLowerCase() ? "active" : ""}
              >
                {item.icon} {item.title}
              </SidebarItem>
            </SidebarLink>
          ))}
        </LinksWrapper>
      </SidebarMenu>
    </SidebarWrapper>
  );
};

import React from "react";
import {
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledDropdown,
} from "reactstrap";
import { HeaderWrapper, HeaderLeft, HeaderRight } from "./style";
import Logo from "./../../../assets/logo.jpg";
export const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderLeft></HeaderLeft>
      <HeaderRight>
        <UncontrolledDropdown inNavbar nav className="ps-0">
          <DropdownToggle nav>
            <img className="user-img" src={Logo} />
            <span>Emma Kwan</span>
          </DropdownToggle>
          <DropdownMenu end>
            <DropdownItem>Settings</DropdownItem>
            <DropdownItem>Logout</DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
      </HeaderRight>
    </HeaderWrapper>
  );
};

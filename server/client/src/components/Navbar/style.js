import styled from "styled-components";
import { Link as NavLink } from "react-router-dom";

export const HeaderWrapper = styled.div``;

export const Navbar = styled.div`
  z-index: 20;
  width: 100%;
  position: fixed;
  box-sizing: border-box;
  left: 0;
  right: 0;
  top: 0;
  & li {
    list-style-type: none;
  }
  & .mobile-view {
    background: ${(props) => props.theme.lightBlackColor} !important;
    & .user-img {
      width: 34px !important;
      border-radius: 100%;
    }
    & .mobile-search {
      min-width: 100%;
    }
    & .plus-btn {
      border-radius: 100%;
      width: 32px;
      height: 32px;
      text-align: center;
      justify-content: center;
      display: flex;
      align-items: center;
      padding: 5px;
    }
    & .dropdown-menu.dropdown-menu-end.show {
      right: 0;
      top: 49px;
    }
  }
`;

export const Brand = styled.div`
  flex: 1;
  & img {
    max-width: 121px;
  }
`;

export const ThemeChanger = styled.button`
  border: none;
  background: #e5e5e5;
  border-radius: 100%;
  height: 36px;
  color: ${(props) => props.theme.blackColor};
`;

export const TopHeaderWrapper = styled.div`
  background: ${(props) => props.theme.lightBlackColor} !important;
  border-bottom: 1px solid ${(props) => props.theme.borderColor} !important;
`;
export const TopHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
  position: relative;
`;

export const ContentRight = styled.div`
  display: flex;
  align-items: center;
  flex: 7;
  justify-content: end;
  & .user-img {
    width: 42px;
    height: 42px;
    border-radius: 100%;
    background: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    & a {
      color: #333;
      padding: 0 !important;
    }
  }
  & .dropdown-menu {
    top: 46px;
    right: 0px;
  }
  & .dropdown-menu.dropdown-menu-end {
    padding: 0;
    & .dropdown-item {
      padding: 10px;
      border-bottom: 1px solid #dddddd;
      text-transform: capitalize;
      &:active,
      &:hover {
        background: ${(props) => props.theme.lightGray};
        color: ${(props) => props.theme.whiteColor};
      }
    }
    & .dropdown-item:last-child {
      border: none;
    }
  }
`;

export const BottomHeaderWrapper = styled.div`
  background: ${(props) => props.theme.lightBlackColor} !important;
  border-bottom: 1px solid ${(props) => props.theme.borderColorLight} !important;
`;

export const BottomHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 5px 0;
`;

export const SearchInputWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  & svg {
    position: absolute;
    left: 8px;
    width: 20px;
    color: ${(props) => props.theme.lightWhiteColor} !important;
  }
`;

export const SearchInput = styled.input`
  width: 300px;
  padding: 10px;
  background: none;
  font-size: 14px;
  border: 1px solid ${(props) => props.theme.borderColor};
  color: ${(props) => props.theme.lightWhiteColor} !important;
  border-radius: 3px;
  outline: none;
  padding-left: 35px;
  @media (max-width: 768px) {
    max-width: 265px !important;
  }
`;

export const Link = styled(NavLink)`
  border: medium none !important;
  color: ${(props) => props.theme.primaryColor} !important;
  display: block !important;
  font: normal 700 14px "Jost";
  margin-right: 25px;
  position: relative;
  text-decoration: none;
  text-transform: uppercase;
  line-height: 40px;
`;

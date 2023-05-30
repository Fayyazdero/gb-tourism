import styled from "styled-components";
import { Link as Tag } from "react-router-dom";
export const SidebarWrapper = styled.div`
  width: 300px;
`;

export const SidebarMenu = styled.div``;
export const LinksWrapper = styled.div`
  border-right: 1px solid ${(props) => props.theme.borderColor};
  min-height: calc(100vh - 69px);
`;

export const SidebarItem = styled.div`
  padding: 18px 20px;
  /* margin-bottom: 10px; */
  font: normal 400 16px Jost;
  background: #fff;
  transition: ease-in-out all 0.5s;
  & svg {
    margin-right: 20px;
  }
  &:hover {
    background: ${(props) => props.theme.primaryColor};
    color: #fff;
  }
  &.active {
    background: ${(props) => props.theme.primaryColor};
    color: #fff;
  }
`;

export const SidebarLink = styled(Tag)`
  color: #727998;
  text-decoration: none;
  width: 100%;
  & .brand-link {
    height: 69px;
    align-items: center;
    display: flex;
    padding: 20px;
    background: ${(props) => props.theme.primaryColor};
  }
  & img {
    width: 121px;
  }
`;

export const SidebarBrand = styled.div``;

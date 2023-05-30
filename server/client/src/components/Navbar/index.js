import React, { useState } from "react";
import {
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import {
  Navbar,
  TopHeader,
  TopHeaderWrapper,
  SearchInputWrapper,
  SearchInput,
  ContentRight,
  ThemeChanger,
  Link,
  Brand,
  BottomHeader,
  BottomHeaderWrapper,
} from "./style";
import Logo from "./../../assets/logo.jpg";
import LightLogo from "./../../assets/light-logo-new.png";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { themeAction } from "../../redux/actions/theme";
import SearchIcon from "../svgs/SearchIcon";
import DarkIcon from "../svgs/DarkIcon";
import LightIcon from "../svgs/LightIcon";
import { Button } from "../global/Button";
import UserIcon from "../svgs/UserIcon";
import { logoutAction } from "../../redux/actions/auth";
import PlusIcon from "../svgs/PlusIcon";
export const NavbarCom = () => {
  const { theme: currentTheme } = useSelector((state) => state.theme);
  const { user: state } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");

  const navItems = [
    { title: "home", link: "/" },
    { title: "Historic Places", link: "/categories/historic-places" },
    { title: "Lakes", link: "/categories/lakes" },
    { title: "Adventure", link: "/categories/adventure" },
    { title: "Success Stories", link: "/categories/success-stories" },
    { title: "Famous Places", link: "/categories/famous-places" },
    { title: "Mountains", link: "/categories/mountains" },
  ];

  const handleTheme = () => {
    dispatch(themeAction(currentTheme));
  };

  const searchPost = () => {
    if (search.trim()) {
      navigate(`/posts/search?searchTerm=${search || "none"}`);
    } else {
      navigate("/");
    }
  };

  const handleKeyPress = (e) => {
    if (e.keyCode === 13) {
      searchPost();
    }
  };
  return (
    <>
      <Navbar>
        <TopHeaderWrapper>
          <TopHeader className="container flex-wrap px-2 px-sm-0 align-items-start d-none d-md-flex">
            <Brand>
              <Link to="/" className="me-2">
                <img src={Logo} className="img-fluid" />
              </Link>
            </Brand>
            <ContentRight className="align-items-center flex-wrap ">
              <SearchInputWrapper>
                <SearchIcon />
                <SearchInput
                  onKeyDown={(e) => handleKeyPress(e)}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Find Latest, World, Popular and more..."
                />
              </SearchInputWrapper>
              <div className="d-flex">
                <ThemeChanger className="mx-3" onClick={() => handleTheme()}>
                  {currentTheme === "dark" ? <DarkIcon /> : <LightIcon />}
                </ThemeChanger>
                {state ? (
                  <>
                    <Button
                      className="me-3 secondary"
                      onClick={() => navigate("/posts/create")}
                    >
                      Create Post
                    </Button>
                    <UncontrolledDropdown inNavbar nav className="user-img">
                      <DropdownToggle nav>
                        {state.user.profilePic?.length > 0 ? (
                          <img
                            className="img-fluid user-img"
                            src={state.user.profilePic}
                          />
                        ) : (
                          <UserIcon />
                        )}
                      </DropdownToggle>
                      <DropdownMenu end>
                        <DropdownItem
                          onClick={() =>
                            navigate(`/profile/${state?.user?._id}`)
                          }
                        >
                          {`${state?.user?.firstName} ${state?.user?.lastName}`}
                        </DropdownItem>
                        <DropdownItem
                          onClick={() => dispatch(logoutAction(navigate))}
                        >
                          Logout
                        </DropdownItem>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  </>
                ) : (
                  <Button
                    className="secondary"
                    onClick={() => navigate("/auth")}
                  >
                    Sign In
                  </Button>
                )}
              </div>
            </ContentRight>
          </TopHeader>
        </TopHeaderWrapper>
        <div className="container px-0 d-flex d-md-none align-items-center flex-column-reverse w-100 mobile-view">
          <SearchInputWrapper className="w-100">
            <SearchIcon className="ms-2" />
            <SearchInput
              className="w-100 mobile-search px-5 py-3"
              onKeyDown={(e) => handleKeyPress(e)}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Find Latest, World, Popular and more..."
            />
          </SearchInputWrapper>
          <div className="w-100 p-2 d-flex align-items-center">
            <Brand>
              <Link to="/" className="me-2">
                <img src={Logo} className="img-fluid" />
              </Link>
            </Brand>
            <div className="d-flex align-items-center align-self-end">
              <ThemeChanger className="mx-3" onClick={() => handleTheme()}>
                {currentTheme === "dark" ? <DarkIcon /> : <LightIcon />}
              </ThemeChanger>
              {state ? (
                <>
                  <Button
                    className="secondary round me-3 plus-btn"
                    onClick={() => navigate("/posts/create")}
                  >
                    <PlusIcon />
                  </Button>
                  <UncontrolledDropdown inNavbar nav className="user-img">
                    <DropdownToggle nav className="p-0">
                      {state.user.profilePic?.length > 0 ? (
                        <img
                          className="img-fluid user-img"
                          src={state.user.profilePic}
                        />
                      ) : (
                        <UserIcon />
                      )}
                    </DropdownToggle>
                    <DropdownMenu end>
                      <DropdownItem
                        onClick={() => navigate(`/profile/${state?.user?._id}`)}
                      >
                        {state.user.firstName}
                      </DropdownItem>
                      <DropdownItem
                        onClick={() => dispatch(logoutAction(navigate))}
                      >
                        Logout
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </>
              ) : (
                <Button className="primary" onClick={() => navigate("/auth")}>
                  Sign In
                </Button>
              )}
            </div>
          </div>
        </div>
        <BottomHeaderWrapper className="d-none d-md-flex">
          <BottomHeader className="bottom container flex-wrap px-2 px-sm-0">
            {navItems.map(({ link, title }, index) => (
              <NavItem key={index}>
                <Link to={link}>{title}</Link>
              </NavItem>
            ))}
          </BottomHeader>
        </BottomHeaderWrapper>
      </Navbar>
    </>
  );
};

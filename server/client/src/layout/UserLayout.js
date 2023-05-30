import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Navigate,
  Route,
  Routes,
  useNavigate,
  useParams,
} from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";
import Auth from "../pages/Auth";
import ActiveEmail from "../pages/Auth/ActiveEmail";
import { Category } from "../pages/Category";
import Home from "../pages/Home";
import { NavbarCom } from "./../components/Navbar";
import { Footer } from "./../components/Footer";
import { verifyToken } from "../helpers";
import { logoutAction } from "../redux/actions/auth";
import Profile from "../pages/Profile";
import { Content, LayoutWrapper } from "./style";
import PostDetails from "../pages/PostDetails";
import { Provider } from "../pages/Post";
import Search from "../pages/Post/Search";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ForgetPassword from "../pages/Auth/ForgetPassword";
import ResetPassword from "../pages/Auth/ResetPassword";
import ArrowUp from "../components/svgs/ArrowUp";
import NotFound from "../pages/NotFound";
toast.configure();

const UserLayout = () => {
  const params = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const logout = () => {
    dispatch(logoutAction(navigate));
  };

  useEffect(() => {
    const token = user?.token;
    verifyToken(token, logout);
  }, [params]);

  useEffect(() => {
    user &&
      toast.success("You are signed in now", {
        position: toast.POSITION.TOP_RIGHT,
      });
  }, [user]);
  return (
    <LayoutWrapper>
      <ScrollToTop top={600} smooth color="#000" component={<ArrowUp />} />
      <NavbarCom />
      <Content>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/posts/:id" element={<PostDetails />}></Route>
          <Route
            path="/auth"
            element={!user ? <Auth /> : <Navigate to="/" />}
          ></Route>
          <Route
            path="/profile"
            element={user ? <Profile /> : <Navigate to="/auth" />}
          ></Route>
          <Route path="/profile/:id" element={<Profile />}></Route>
          <Route path="/posts/search" element={<Search />}></Route>
          <Route
            path="/posts/create"
            element={user ? <Provider /> : <Navigate to="/" />}
          ></Route>
          <Route
            path="/posts/update/:id"
            element={user ? <Provider /> : <Navigate to="/" />}
          ></Route>
          <Route
            path="/authentication/activate/:token"
            element={<ActiveEmail />}
          ></Route>
          <Route
            path="/forget-password"
            element={!user ? <ForgetPassword /> : <Navigate to="/" />}
          ></Route>
          <Route
            path="/reset-password/:token"
            element={!user ? <ResetPassword /> : <Navigate to="/" />}
          ></Route>
          <Route path="/categories/:slug" element={<Category />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </Content>
      <Footer />
    </LayoutWrapper>
  );
};

export default UserLayout;

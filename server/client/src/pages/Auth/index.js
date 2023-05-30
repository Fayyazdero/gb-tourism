import React, { useEffect, useState } from "react";
import GoogleLogin from "react-google-login";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../../components/global/Button";
import {
  googleSigninAction,
  signinAction,
  signupAction,
} from "../../redux/actions/auth";
import { AuthWrapper } from "./styles";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import Input from "../../components/Form/Input";
import { toast } from "react-toastify";

const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(3, "Too Short!")
    .max(20, "Too Long!")
    .required("First Name required"),
  lastName: Yup.string()
    .min(3, "Too Short!")
    .max(20, "Too Long!")
    .required("Last Name required"),
  password: Yup.string()
    .min(6, "Too Short!")
    .max(20, "Too Long!")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is required"),
  email: Yup.string().email("Email is not valid").required("Email is equired"),
});

const SigninSchema = Yup.object().shape({
  email: Yup.string().email("Email is not valid").required("Email is required"),
  password: Yup.string()
    .min(6, "Too Short!")
    .max(20, "Too Long!")
    .required("Password is required"),
});

const Auth = () => {
  let initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const profilePic =
    "https://mapia.pk/public/storage/files/0mcpn0MCCNsSQWjis2Q9VdmwAJwZMu5OaCfHuOBi.png";
  const [isSignup, setIsSignup] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error, mail, user } = useSelector((state) => state.auth);
  const onGoogleSuccess = (response) => {
    const { tokenId } = response;
    dispatch(googleSigninAction(tokenId, navigate));
  };
  const onGoogleFailure = (response) => {
    console.log(response);
  };
  const handleSubmit = (values) => {
    if (!isSignup) {
      const { email, password } = values;
      dispatch(signinAction({ email, password }, navigate));
    } else {
      dispatch(signupAction({ ...values, profilePic }, navigate));
    }
  };

  useEffect(() => {
    error && toast.error(error, { position: toast.POSITION.TOP_RIGHT });
  }, [error]);
  useEffect(() => {
    mail &&
      toast.success("Mail has been sent to your email, please verify.", {
        position: toast.POSITION.TOP_RIGHT,
      });
  }, [mail]);
  useEffect(() => {
    user &&
      toast.success("You are signed in now", {
        position: toast.POSITION.TOP_RIGHT,
      });
  }, [user]);

  const handleAuthPage = (val) => {
    setIsSignup(val);
    initialValues = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  };

  return (
    <AuthWrapper className="my-2 mb-4">
      <Formik
        initialValues={initialValues}
        validationSchema={isSignup ? SignupSchema : SigninSchema}
        onSubmit={(values) => handleSubmit(values)}
      >
        {({ errors, touched }) => (
          <Form className="auth-form">
            <h4>{isSignup ? "Create Account Here" : "Login Here"}</h4>
            {isSignup && (
              <>
                <Input
                  name="firstName"
                  className="form-control white-bg"
                  outerClass="d-flex align-items-center mb-3"
                  placeholder="First Name"
                  errors={errors}
                  touched={touched}
                />
                <Input
                  name="lastName"
                  placeholder="Last Name"
                  className="form-control white-bg"
                  outerClass="d-flex align-items-center mb-3"
                  errors={errors}
                  touched={touched}
                />
              </>
            )}

            <Input
              name="email"
              placeholder="Email"
              type="email"
              className="form-control white-bg"
              outerClass="d-flex align-items-center mb-3"
              errors={errors}
              touched={touched}
            />
            <Input
              name="password"
              placeholder="Password"
              type="password"
              className="form-control white-bg"
              outerClass="d-flex align-items-center mb-3"
              errors={errors}
              touched={touched}
            />
            {isSignup && (
              <Input
                name="confirmPassword"
                placeholder="Confirm Password"
                type="password"
                className="form-control white-bg"
                outerClass="d-flex align-items-center mb-3"
                errors={errors}
                touched={touched}
              />
            )}
            {!isSignup && (
              <div className="d-flex w-100 justify-content-end">
                <Link to="/forget-password" className="forget-password">
                  Forget Password?
                </Link>
              </div>
            )}
            <Button
              disabled={loading}
              className="w-100 black mt-2 py-2"
              type="submit"
            >
              {isSignup ? "Sign Up" : "Sign In"}
            </Button>
            <GoogleLogin
              disabled={loading}
              className="google-signin-btn mt-3 mb-3"
              clientId={process.env.REACT_APP_CLIENT_ID}
              buttonText={
                isSignup ? "Sign up with Google" : "Sign In with Google"
              }
              onSuccess={onGoogleSuccess}
              onFailure={onGoogleFailure}
              cookiePolicy={"single_host_origin"}
            />
            <p className="mb-0 d-flex align-items-center">
              {isSignup
                ? `Already have an account? `
                : `Don't have an account yet? `}
              {isSignup ? (
                <button
                  type="reset"
                  className="reset-btn"
                  onClick={() => handleAuthPage(false)}
                  style={{ cursor: "pointer" }}
                >
                  Signin Here
                </button>
              ) : (
                <button
                  type="reset"
                  className="reset-btn"
                  onClick={() => handleAuthPage(true)}
                  style={{ cursor: "pointer" }}
                >
                  Signup Here
                </button>
              )}
            </p>
          </Form>
        )}
      </Formik>
    </AuthWrapper>
  );
};

export default Auth;

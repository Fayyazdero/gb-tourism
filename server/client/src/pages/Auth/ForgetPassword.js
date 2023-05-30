import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import { Button } from "../../components/global/Button";
import { forgetPasswordAction } from "../../redux/actions/auth";
import { Wrapper, InnerWrapper, Heading } from "./styles";
import { toast } from "react-toastify";

const ForgetPassword = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [state, setState] = useState("");
  const { loading, error, mail } = useSelector((state) => state.forgetPassword);
  const handleVerifyEmail = (e) => {
    e.preventDefault();
    if (state.length > 0) {
      dispatch(forgetPasswordAction({ email: state }));
    }
  };
  useEffect(() => {
    error && toast.error(error, { position: toast.POSITION.TOP_RIGHT });
  }, [error]);
  useEffect(() => {
    mail &&
      toast.success("Password reset mail sent, please check your email.", {
        position: toast.POSITION.TOP_RIGHT,
      });
  }, [mail]);
  return (
    <Container>
      <Row>
        <Col>
          <Wrapper>
            <InnerWrapper>
              <Heading style={{ maxWidth: "430px" }}>
                Enter your email and click confirm button to reset your password
              </Heading>
              <form onSubmit={(e) => handleVerifyEmail(e)}>
                <div>
                  <input
                    className="form-control mb-3"
                    value={state}
                    type="email"
                    required
                    onChange={(e) => setState(e.target.value)}
                  />
                </div>
                <div>
                  <Button
                    type="submit"
                    disabled={loading}
                    className="px-4 py-2 me-2 btn-secondary"
                  >
                    Confirm
                  </Button>
                  <Button
                    className="px-4 py-2 transparent"
                    onClick={() => navigate("/auth")}
                  >
                    Back to Login
                  </Button>
                </div>
              </form>
            </InnerWrapper>
          </Wrapper>
        </Col>
      </Row>
    </Container>
  );
};

export default ForgetPassword;

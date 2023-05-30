import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import { Button } from "../../components/global/Button";
import { resetPasswordAction } from "../../redux/actions/auth";
import { Wrapper, InnerWrapper, Heading } from "./styles";
import { toast } from "react-toastify";
import FieldError from "../../components/Form/FieldErrors";

const ResetPassword = () => {
  const { token } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [state, setState] = useState("");
  const [inpError, setInpError] = useState("");
  const { loading, error, reset } = useSelector((state) => state.resetPassword);
  const handleVerifyEmail = () => {
    if (token && state.length >= 6) {
      dispatch(
        resetPasswordAction(navigate, { resetLink: token, newPassword: state })
      );
    } else {
      setInpError("Password needs to be at least 6 characters.");
    }
  };
  useEffect(() => {
    error && toast.error(error, { position: toast.POSITION.TOP_RIGHT });
  }, [error]);
  useEffect(() => {
    reset &&
      toast.success("Your password has been updated", {
        position: toast.POSITION.TOP_RIGHT,
      });
  }, [reset]);
  return (
    <Container>
      <Row>
        <Col>
          <Wrapper>
            <InnerWrapper>
              <Heading
                style={{ maxWidth: "330px" }}
                className="d-flex text-left justify-content-start"
              >
                Type your new password to reset the previous one
              </Heading>
              <div className="position-relative mb-4">
                <input
                  type="password"
                  className="form-control"
                  value={state}
                  placeholder="New password..."
                  onChange={(e) => setState(e.target.value)}
                />
                {inpError && <FieldError>{inpError}</FieldError>}
              </div>
              <div>
                <Button
                  disabled={loading}
                  className="px-4 py-2 me-2 btn-secondary"
                  onClick={handleVerifyEmail}
                >
                  Update Password
                </Button>
              </div>
            </InnerWrapper>
          </Wrapper>
        </Col>
      </Row>
    </Container>
  );
};

export default ResetPassword;

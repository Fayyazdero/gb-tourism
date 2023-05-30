import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import { Button } from "../../components/global/Button";
import { emailActivateAction } from "../../redux/actions/auth";
import { Wrapper, InnerWrapper, Heading } from "./styles";
import { toast } from "react-toastify";

const ActiveEmail = () => {
  const { token } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error, activate } = useSelector(
    (state) => state.emailActivate
  );
  const handleVerifyEmail = () => {
    if (token) {
      dispatch(emailActivateAction(navigate, { token }));
    }
  };
  useEffect(() => {
    error && toast.error(error, { position: toast.POSITION.TOP_RIGHT });
  }, [error]);
  useEffect(() => {
    activate &&
      toast.success("Email Verification completed", {
        position: toast.POSITION.TOP_RIGHT,
      });
  }, [activate]);
  return (
    <Container>
      <Row>
        <Col>
          <Wrapper>
            <InnerWrapper>
              <Heading>To verify your email, click the button bellow.</Heading>
              <Button
                disabled={loading}
                className="px-4 py-2"
                onClick={handleVerifyEmail}
              >
                Verify
              </Button>
            </InnerWrapper>
          </Wrapper>
        </Col>
      </Row>
    </Container>
  );
};

export default ActiveEmail;

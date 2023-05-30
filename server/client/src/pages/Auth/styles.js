import styled from "styled-components";

export const AuthWrapper = styled.div`
  min-height: calc(100vh - 130px);
  display: flex;
  .auth-form {
    font: normal 500 14px Poppins;
    display: flex;
    flex-flow: column wrap;
    align-items: center;
    justify-content: space-around;
    margin: auto;
    background: #fff;
    max-width: 340px;
    box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
    padding: 50px 20px;
    & h4 {
      font: normal 500 18px Poppins;
    }
    & .reset-btn {
      border: none;
      background: transparent;
      font-weight: 600;
    }
  }
  & .forget-password {
    position: relative;
    display: flex;
    justify-content: end;
    top: -22px;
    text-decoration: none;
    color: #4f70ed;
    font-weight: 400;
    font-size: 13px;
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const InnerWrapper = styled.div`
  text-align: center;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  min-width: 400px;
  min-height: 200px;
  background: #fff;
  border-radius: 10px;
  padding: 20px;
  box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
`;

export const Heading = styled.h3`
  color: ${(props) => props.theme.black};
  font-size: 16px;
`;

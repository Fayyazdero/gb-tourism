import styled from "styled-components";

export const HeadingWrapper = styled.h2`
  color: ${(props) => props.theme.primaryColor};
  font: normal 800 28px Poppins;
  letter-spacing: -0.5px;
  line-height: 34px;
  margin-bottom: 18px;
  position: relative;
  text-transform: capitalize;
  border-bottom: 2px solid ${(props) => props.theme.hrColor};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

import styled from "styled-components";

export const Wrapper = styled.div`
  min-height: 50vh;
`;

export const Title = styled.h1`
  font-family: jost;
  font-weight: 900;
  font-size: 88px;
  color: ${(props) => props.theme.primaryColor};
  @media (max-width: 768px) {
    font-size: 48px;
  }
`;

export const SubTitle = styled.p`
  color: #676767;
`;

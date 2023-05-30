import styled, { css } from "styled-components";

export const OverviewCardWrapper = styled.div`
  display: flex;
  background: #fff;
  padding: 40px 30px;
  border-radius: 10px;
  align-items: center;
  border: 1px solid ${(props) => props.theme.borderColor};
`;

export const IconWrapper = styled.div`
  min-width: 50px;
  min-height: 50px;
  ${(props) => {
    switch (props.status) {
      case "users":
        return css`
          background: #e5e0fd;
          color: #7b67de;
        `;
      case "posts":
        return css`
          background: #d9f1ff;
          color: #42b5fb;
        `;
      case "published":
        return css`
          background: #ffdcc9;
          color: #f78a4e;
        `;
      case "panding":
        return css`
          background: #ffdce7;
          color: #f04c7e;
        `;

      default:
        return css`
          background: #e5e0fd;
          color: #7b67de;
        `;
    }
  }}
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  margin-right: 20px;
`;

export const ContentWrapper = styled.div``;

export const Title = styled.div`
  font: normal 600 22px Jost;
`;

export const SubTitle = styled.div`
  font: normal 400 16px Jost;
  color: #727998;
`;

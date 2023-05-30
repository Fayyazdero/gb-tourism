import styled from "styled-components";

export const HeaderWrapper = styled.div`
  display: flex;
  width: 100%;
  padding: 0 20px;
  background: #fff;
  align-items: center;
  min-height: 70px;
  list-style-type: none;
  justify-content: space-between;
  border-bottom: 1px solid ${(props) => props.theme.borderColor};
  background: ${(props) => props.theme.primaryColor};
  & .nav-link {
    border: medium none !important;
    display: flex !important;
    align-items: center;
    font: normal 400 15px "Jost";
    color: ${(props) => props.theme.wToB};
    position: relative;
    padding-right: 15px;
    & .user-img {
      margin-right: 10px;
      width: 40px;
      height: 40px;
      border: 2px solid ${(props) => props.theme.borderColor};
      border-radius: 100%;
      background: #fff;
    }
  }
`;

export const HeaderLeft = styled.div``;

export const HeaderRight = styled.div``;

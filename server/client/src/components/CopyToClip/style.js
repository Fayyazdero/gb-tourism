import styled from "styled-components";

export const CopyWrapper = styled.div`
  position: absolute;
  top: 9px;
  right: 16px;
  background: #ffffff;
  border-radius: 20px;
  padding: 2px 8px;
  color: #333;
  cursor: pointer;
  font-size: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* width: 118px; */
  box-shadow: rgb(17 12 46 / 20%) 0px 48px 100px 0px;
  & svg {
    width: 16px;
  }
`;

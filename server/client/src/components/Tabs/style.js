import styled from "styled-components";

export const TabsWrapper = styled.div``;

export const TabsHeader = styled.div`
  padding: 10px 20px;
  background: ${(props) => props.theme.primaryColor};
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
`;

export const TabHeaderItem = styled.div`
  text-transform: capitalize;
  padding: 5px 0;
  cursor: pointer;
  font-weight: 600;
  color: ${(props) => props.theme.wToB};
  &.active {
    border-bottom: 2px solid ${(props) => props.theme.wToB};
  }
`;

export const TabsBody = styled.div`
  border: 1px solid ${(props) => props.theme.borderColor} !important;
  min-height: 200px;
  padding: 20px;
`;

export const TabItem = styled.div``;

import styled from "styled-components";

export const TagsWrapper = styled.div`
  & .react-tag-input {
    margin-top: -1px;
    border: none;
    border-radius: 0;
    box-shadow: none !important;
    padding: 10px 0;
    overflow: hidden;
    border-bottom: 1px solid ${(props) => props.theme.sameBorderColor};
    background: transparent;
    & input {
      color: ${(props) => props.theme.bToW};
    }
  }
`;

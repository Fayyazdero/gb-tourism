import styled from "styled-components";

export const PreviewWrapper = styled.div`
  font-family: Poppins;
  & .decoration-none {
    text-decoration: none;
  }
  & .user-profile-img {
    width: 50px;
    border-radius: 100%;
  }
  & .social-tag-text {
    color: ${(props) => props.theme.primaryColor};
  }
  & .markdown__outer {
    color: ${(props) => props.theme.primaryColor};
    & img {
      max-width: 100%;
      height: auto;
    }
  }
  & .user-name,
  .tags-wrapper {
    color: ${(props) => props.theme.primaryColor};
  }
`;

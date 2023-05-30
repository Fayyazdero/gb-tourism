import styled from "styled-components";

export const PostDetailsWrapper = styled.div`
  & .decoration-none {
    text-decoration: none;
  }
  & .user-profile-img {
    width: 50px;
    border-radius: 100%;
  }
  & .user-name,
  .tags-wrapper {
    color: ${(props) => props.theme.primaryColor};
  }
  & .comments-header {
    color: #000000;
    font: normal 600 17px Poppins;
    text-transform: capitalize;
  }
  & .comments-header {
    color: ${(props) => props.theme.bToW};
  }
  & .zero-margin {
    margin: 0 -12px;
  }
  & .markdown__outer {
    color: ${(props) => props.theme.bToW};
    & img {
      max-width: 100%;
      height: auto;
      max-height: 500px;
    }
  }
  & .social-tag-text {
    color: ${(props) => props.theme.bToW};
  }
`;

export const CommentSection = styled.div``;

export const CommentForm = styled.div`
  border-radius: 9px;
  & h4 {
    font: normal 500 17px Jost;
    color: ${(props) => props.theme.bToW};
  }
  & textarea {
    width: 100%;
    font: normal 400 14px Jost;
    margin-bottom: -13px;
    border: 1px solid #e5e5e5;
    border-radius: 5px;
    box-shadow: none;
    outline: none;
    background: transparent;
    color: ${(props) => props.theme.bToW};
  }
  & img {
    width: 60px;
    height: 60px;
    border-radius: 100%;
    border: 1px solid ${(props) => props.theme.borderColor};
    background: ${(props) => props.theme.borderColor};
  }
`;

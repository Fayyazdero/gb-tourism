import styled from "styled-components";

export const SocialWrapper = styled.div``;

export const SocailInner = styled.div``;

export const SocialMediaElement = styled.a`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  padding: 10px 14px;
  box-sizing: border-box;
  border-radius: 2px;
  color: #fff !important;
  text-decoration: none;
  & svg {
    margin-right: 10px;
  }
  &.facebook {
    background: #3059b0;
  }
  &.twitter {
    background: #55acef;
  }
  &.instagram {
    background: #f77737;
  }
  &.dribble {
    background: #e52730;
  }
`;

export const Text = styled.p`
  color: #ffffff;
  font: normal 400 14px Poppins;
  line-height: inherit;
  margin-bottom: 0;
`;

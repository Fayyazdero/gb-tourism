import styled, { css } from "styled-components";
import { Link as Tag } from "react-router-dom";

export const CardWrapper = styled(Tag)`
  text-decoration: none;

  & .time-icon {
    color: #828080;
    width: 15px;
  }
`;

export const CardWrapperInner = styled.div`
  padding: 5px;
  background-color: ${(props) => props.theme.transparent};
  border-radius: 3px;
`;

export const ImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  min-height: 230px;
  ${(props) => {
    return props.src
      ? css`
          background-image: url(${props.src});
        `
      : "";
  }};
  background-size: cover;
  background-position: center;
  position: relative;
  &:before {
    content: "";
    height: 100%;
    ${({ category }) => {
      if (category)
        switch (category.toLowerCase()) {
          case "travel":
            return css`
              background: #ff469c;
            `;
          case "entertainment":
            return css`
              background: #ff0018;
            `;
          case "world":
            return css`
              background: #aa35d6;
            `;
          case "life-style":
            return css`
              background: #32b47b;
            `;
          case "fashion":
            return css`
              background: #f58021;
            `;
          case "sports":
            return css`
              background: #4886ec;
            `;
          case "news":
            return css`
              background: #b23774;
            `;
          case "success-stories":
            return css`
              background: #39a424;
            `;
          case "physical-fitness":
            return css`
              background: #11768c;
            `;
          case "games":
            return css`
              background: #9e2c2c;
            `;
          case "web-development":
            return css`
              background: #3f51b5;
            `;
          case "adventure":
            return css`
              background: #ff623e;
            `;
        }
      return css`
        background-color: #4886ec;
      `;
    }}
    position: absolute;
    z-index: -1;
    top: 11px;
    width: 92%;
    margin: 0 auto;
    left: 4%;
    opacity: 0.6;
  }
  &:after {
    content: "";
    ${({ category }) => {
      if (category)
        switch (category.toLowerCase()) {
          case "travel":
            return css`
              background: #ff469c;
            `;
          case "entertainment":
            return css`
              background: #ff0018;
            `;
          case "world":
            return css`
              background: #aa35d6;
            `;
          case "life-style":
            return css`
              background: #32b47b;
            `;
          case "fashion":
            return css`
              background: #f58021;
            `;
          case "sports":
            return css`
              background: #4886ec;
            `;
          case "news":
            return css`
              background: #b23774;
            `;
          case "success-stories":
            return css`
              background: #39a424;
            `;
          case "physical-fitness":
            return css`
              background: #11768c;
            `;
          case "games":
            return css`
              background: #9e2c2c;
            `;
          case "web-development":
            return css`
              background: #3f51b5;
            `;
          case "adventure":
            return css`
              background: #ff623e;
            `;
        }
      return css`
        background-color: #4886ec;
      `;
    }}
    height: 100%;
    width: 96%;
    position: absolute;
    z-index: -1;
    top: 5px;
    left: 2%;
    opacity: 0.8;
  }
`;

export const ContentWrapper = styled.div``;

export const Cate = styled.div`
  display: inline-block;
  color: #676767;
  margin-left: 16px;
  font: normal 300 14px Poppins;
  line-height: 21px;
  text-transform: uppercase;
  position: relative;
  &:before {
    content: "";
    position: absolute;
    width: 10px;
    height: 10px;
    ${({ category }) => {
      if (category)
        switch (category.toLowerCase()) {
          case "travel":
            return css`
              background: #ff469c;
            `;
          case "entertainment":
            return css`
              background: #ff0018;
            `;
          case "world":
            return css`
              background: #aa35d6;
            `;
          case "life-style":
            return css`
              background: #32b47b;
            `;
          case "fashion":
            return css`
              background: #f58021;
            `;
          case "sports":
            return css`
              background: #4886ec;
            `;
          case "news":
            return css`
              background: #b23774;
            `;
          case "success-stories":
            return css`
              background: #39a424;
            `;
          case "physical-fitness":
            return css`
              background: #11768c;
            `;
          case "games":
            return css`
              background: #9e2c2c;
            `;
          case "web-development":
            return css`
              background: #3f51b5;
            `;
          case "adventure":
            return css`
              background: #ff623e;
            `;
        }
      return css`
        background-color: #4886ec;
      `;
    }}
    border-radius: 100%;
    top: 4px;
    left: -16px;
  }
`;

export const TitleWrapper = styled.h1`
  position: relative;
  line-height: 32px;
  &:hover .title-tag {
    background-size: 100% 100%;
    transition: background-size 0.6s !important;
  }
`;

export const Title = styled.span`
  cursor: pointer;
  width: calc(100%);
  text-transform: capitalize;
  color: ${(props) => props.theme.bToW};
  font: normal 800 22px Poppins;
  line-height: 20px;
  margin-bottom: 7px;
  background-image: linear-gradient(transparent calc(100% - 3px), #212121 3px);
  background-repeat: no-repeat;
  background-size: 0% 100%;
  text-decoration: none;
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  & img.user-img {
    width: 30px;
    height: 30px;
    border-radius: 100%;
  }
  & .comment-icon-wrapper {
    right: 0;
    color: #828080;
    font-size: 15px;
    & svg {
      width: 17px;
    }
  }
`;

export const UserName = styled(Tag)`
  color: #828080 !important;
  font: normal 400 13px Poppins;
  text-transform: capitalize;
  text-decoration: none;
  & .icon-wrapper {
    margin-top: 1px;
  }
`;

export const Desc = styled.div`
  color: #676767;
  font: normal normal 16px Poppins;
  line-height: 22px;
  position: relative;
`;

export const HeaderWrapper = styled.div``;

export const Actions = styled.div`
  & svg {
    max-width: 15px;
    &:hover {
      color: #8d8d8d;
    }
  }
`;

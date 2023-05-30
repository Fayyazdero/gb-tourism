import styled, { css } from "styled-components";
import { Link as ImgLink } from "react-router-dom";

export const CardWrapper = styled.div`
  visibility: visible;
  position: relative;
  overflow: hidden;
  height: 100%;
  &:hover {
    .card-image {
      transform: scale(1.04);
    }
  }
  &.post-card-full {
    @media (max-width: 568px) {
      height: calc(100vh - 112px) !important;
      & .card-image {
        height: calc(100vh - 112px) !important;
      }
    }
  }
`;

export const CardLink = styled(ImgLink)`
  color: #c41515;
  text-decoration: none;
`;

export const CardImgWrapper = styled.div`
  ${(props) => {
    return props.full
      ? css`
          height: ${(props) =>
            props.height ? `${props.height}px !important` : "100%"};
          @media (max-width: 568px) {
            height: 300px;
          }
        `
      : css`
          height: 300px;
        `;
  }}
  ${(props) => {
    return props.imageUrl
      ? css`
          background: #151515 url(${props.imageUrl}) no-repeat center;
        `
      : css`
          background: #000;
        `;
  }}
  background-size: cover;
  transition: all 0.6s;
  position: relative;
  background-position: center;
  &:before {
    background: rgba(0, 0, 0, 0)
      linear-gradient(to bottom, transparent 0, #111111 100%) repeat scroll 0 0;
    content: "";
    height: 200px;
    left: 0;
    position: absolute;
    bottom: 0;
    width: 100%;
  }
`;

export const ContentWrapper = styled.div`
  bottom: 30px;
  position: absolute;
  /* max-width: 80%; */
  cursor: pointer;
  & .heading-tag:hover {
    background-size: 100% 100%;
    transition: background-size 0.6s;
    color: #fff !important;
  }
  & .category-tag {
    margin-left: 20px;
  }
`;

export const CardHeading = styled.div`
  ${({ full }) => {
    return full
      ? css`
          font-size: ${(props) => (props.font === "small" ? `18px` : `26px`)};
        `
      : css`
          font-size: 20px;
        `;
  }}
  line-height: ${(props) => (props.font === "small" ? `24px` : `34px`)};
  color: #fff;
  font-family: "Jost";
  padding: 0 20px;
  word-spacing: -1px;
  margin: 2px 0;
  font-weight: 600;
`;

export const HeadingTag = styled(ImgLink)`
  color: #fff;
  width: calc(100%);
  background-image: linear-gradient(transparent calc(100% - 3px), #ffffff 3px);
  background-repeat: no-repeat;
  background-size: 0% 100%;
  text-decoration: none;
`;

export const UserDetails = styled.div`
  color: #fff;
  font-size: 11px;
  margin-left: 23px;
  margin-right: 10px;
  display: inline-block;
  text-transform: capitalize;
  font: normal 500 12px "Poppins";
  margin-top: 1px;
  line-height: inherit;
  & a {
    color: #fff;
    text-decoration: none;
  }
`;

export const Dot = styled.div`
  background: #b8b8b8;
  border-radius: 100%;
  display: inline-block;
  height: 5px;
  margin-right: -10px;
  position: relative;
  top: -1px;
  width: 5px;
`;

export const Time = styled.div`
  color: #fff;
  font-size: 11px;
  display: inline-block;
  font: normal 500 12px Poppins;
  margin-top: 1px;
  line-height: inherit;
  margin-left: 23px;
`;

export const Clap = styled.div`
  position: absolute;
  top: 36px;
  right: 20px;
  & svg {
    width: 58px;
    height: 40px;
    color: #fff;
  }
`;

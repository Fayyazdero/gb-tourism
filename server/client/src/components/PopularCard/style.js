import styled from "styled-components";
import { Link as Tag } from "react-router-dom";

export const CardWrapper = styled(Tag)`
  cursor: pointer;
  text-decoration: none;
  & .storyImg {
    height: 200px;
    width: 100%;
    object-fit: cover;
  }
`;
export const ContentWrapper = styled.div`
  position: relative;
  &:hover .title-tag {
    background-size: 100% 100%;
    transition: background-size 0.6s !important;
  }
`;
export const CardHeading = styled.span`
  width: calc(100%);
  text-transform: capitalize;
  color: ${(props) => props.theme.primaryColor} !important;
  font: normal 600 17px Jost;
  line-height: 20px;
  background-image: linear-gradient(transparent calc(100% - 3px), #212121 3px);
  background-repeat: no-repeat;
  background-size: 0% 100%;
  text-decoration: none;
`;
export const Serial = styled.div`
  color: #ffffff;
  background: #4886ec;
  border-radius: 2px;
  font-size: 14px;
  padding: 8px 18px;
  top: -40px;
  left: 16px;
  position: absolute;
  z-index: 2;
  font-family: "Jost";
`;

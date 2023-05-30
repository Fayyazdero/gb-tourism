import styled from "styled-components";
import { Link as Tag } from "react-router-dom";

export const CardWrapper = styled.div`
  display: flex;
  border-radius: 3px;
  align-items: center;
  border: 1px solid ${(props) => props.theme.borderColor};
  padding: 10px;
  margin-top: 0px;
  margin-bottom: 22px;
  & .storyImg {
    margin-right: 20px;
    width: 80px;
    object-fit: cover;
    height: 80px;
    border-radius: 100%;
    min-width: 80px;
    min-height: 80px;
  }
`;
export const ContentWrapper = styled.div`
  &:hover .title-tag {
    background-size: 100% 100%;
    transition: background-size 0.6s !important;
  }
`;
export const CardHeading = styled(Tag)`
  font-size: 17px;
  font-weight: 600;
  line-height: 19px;
  color: ${(props) => props.theme.primaryColor} !important;
  font-family: Jost;
  width: calc(100%);
  background-image: linear-gradient(transparent calc(100% - 3px), #212121 3px);
  background-repeat: no-repeat;
  background-size: 0% 100%;
  text-decoration: none;
`;
export const CardTime = styled.div`
  font: normal 500 12px Poppins;
  margin-top: 4px;
  color: #828080;
  & svg {
    width: 15px;
  }
`;

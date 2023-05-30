import styled, { css } from "styled-components";
import { Link as Tag } from "react-router-dom";

export const FooterWrapper = styled.div`
  background: ${(props) => props.theme.lightBlackColor} !important;
  border-top: 1px solid ${(props) => props.theme.borderColor} !important;
  padding: 40px 0 16px 0;
  & .logo {
    max-width: 121px;
  }
`;

export const Intro = styled.div`
  color: ${(props) => props.theme.lightWhiteColor} !important;
  font: normal 400 15px Jost;
  text-decoration: none;
  margin-bottom: 15px;
  margin-top: 15px;
`;

export const ContactLink = styled(Tag)`
  display: inline-block;
  color: ${(props) => props.theme.lightWhiteColor} !important;
  font: normal 400 15px Jost;
  text-decoration: none;
  margin-bottom: 15px;
  & svg {
    margin-right: 15px;
  }
`;

export const Title = styled.div`
  color: ${(props) => props.theme.lightWhiteColor} !important;
  font-family: Poppins;
  font-size: 15px;
  font-weight: 600;
  letter-spacing: 0.3px;
  margin-bottom: 10px;
  padding-bottom: 4px;
  text-transform: uppercase;
`;

export const PostCard = styled(Tag)`
  color: ${(props) => props.theme.lightWhiteColor} !important;
  font: normal 400 15px Jost;
  text-decoration: none;
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  & img {
    margin-right: 15px;
    height: 55px;
    object-fit: cover;
    min-width: 55px !important;
    max-width: 55px !important;
    border-radius: 4px;
  }
`;

export const Content = styled.div``;

export const CopyWriteWrapper = styled.div`
  background: ${(props) => props.theme.lightBlackColor} !important;
  border-top: 1px solid ${(props) => props.theme.borderColor} !important;
  color: ${(props) => props.theme.lightWhiteColor} !important;
  font: normal 400 12px Poppins;
  letter-spacing: 0.5px;
`;

export const CopyWriteWrapperInner = styled.div``;

export const CopyWrite = styled.div``;

export const CopyText = styled.div``;

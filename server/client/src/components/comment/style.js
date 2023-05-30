import styled from "styled-components";
import { Link as Tag } from "react-router-dom";
export const CommentWrapper = styled.div``;
export const UserImageWrapper = styled(Tag)`
  flex: 2;
`;
export const UserImage = styled.img`
  border-radius: 100%;
  width: 40px;
  height: 40px;
  border: 1px solid ${(props) => props.theme.borderColor};
  background: ${(props) => props.theme.borderColor};
`;
export const CommentInfo = styled.div`
  flex: 15;
  @media only screen and (min-width: 1200px) {
    flex: 23;
  }
`;
export const TopInfo = styled.div``;
export const CommentBody = styled.div`
  color: ${(props) => props.theme.bToW};
  font-family: "Poppins";
  font-size: 13px;
  line-height: 20px;
`;
export const Username = styled(Tag)`
  font-family: "Jost";
  font-weight: 600;
  font-size: 16px;
  color: ${(props) => props.theme.bToW} !important;
  text-decoration: none;
`;
export const Time = styled.div`
  color: #b3b0b0;
  font-family: Poppins;
  font-size: 13px;
`;

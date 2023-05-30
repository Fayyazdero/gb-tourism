import styled from "styled-components";

export const ProfileSection = styled.div``;

export const ProfileWrapper = styled.div`
  display: flex;
  @media (max-width: 768px) {
    flex-wrap: wrap;
    & .full-content {
      text-align: center;
    }
    & .picture-wrapper {
      width: 100%;
      text-align: center;
    }
    & .categories {
      display: flex;
      justify-content: center;
    }
  }
`;
export const Picture = styled.div`
  & img {
    border-radius: 50%;
    width: 100px;
    height: 100px;
    border: 1px solid ${(props) => props.theme.borderColor};
    background: ${(props) => props.theme.borderColor};
  }
`;
export const ProfileContent = styled.div`
  & svg {
    margin-left: -5px;
    height: 16px;
  }

  & .username {
    font-weight: 600;
    font-size: 18px;
    color: ${(props) => props.theme.bToW};
  }
  & p {
    margin: 0;
  }

  & .user-location {
    color: #828080;
  }

  & .description {
    color: ${(props) => props.theme.bToW};
  }
`;

export const SelectedCategories = styled.div`
  display: flex;
  margin-top: 10px;

  & .chips {
    margin-right: 5px;
  }
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  margin-top: 20px;
`;

export const UserPosts = styled.div`
  margin-top: 25px;
`;

export const CurrentUserImage = styled.div``;

export const Wrapper = styled.div`
  border: 1px solid ${(props) => props.theme.borderColor} !important;
  min-height: 200px;
  padding: 20px;
  & p.wrapper-title {
    padding: 10px 20px;
    background: ${(props) => props.theme.primaryColor};
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
    margin: -20px;
    color: ${(props) => props.theme.wToB};
    font-weight: 600;
    padding: 16px 20px;
  }
`;

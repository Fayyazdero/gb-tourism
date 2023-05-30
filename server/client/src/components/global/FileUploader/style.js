import styled from "styled-components";

export const UploaderWrapper = styled.div`
  position: relative;
  & .close-icon {
    position: absolute;
    cursor: pointer;
    right: -15px;
    top: -20px;
    background: #e5e5e5;
    border-radius: 100%;
    height: 30px;
    width: 30px;
    padding: 4px;
    color: #1c1e20;
  }
`;
export const UploaderWrapperInner = styled.div`
  cursor: pointer;
  background-image: repeating-linear-gradient(
      0deg,
      #dedef9,
      #dedef9 15.84px,
      transparent 16px,
      transparent 23.92px,
      #dedef9 24px
    ),
    repeating-linear-gradient(
      90deg,
      #dedef9,
      #dedef9 15.84px,
      transparent 16px,
      transparent 23.92px,
      #dedef9 24px
    ),
    repeating-linear-gradient(
      180deg,
      #dedef9,
      #dedef9 15.84px,
      transparent 16px,
      transparent 23.92px,
      #dedef9 24px
    ),
    repeating-linear-gradient(
      270deg,
      #dedef9,
      #dedef9 15.84px,
      transparent 16px,
      transparent 23.92px,
      #dedef9 24px
    );
  background-size: 3px 100%, 100% 3px, 3px 100%, 100% 3px;
  background-position: 0 0, 0 0, 100% 0, 0 100%;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  position: relative;
  border-radius: 10px;
  & .uploaded-img {
    width: 90px;
    height: 90px;
    border-radius: 100%;
  }
  & .cursor-pointer {
    cursor: pointer;
  }
`;
export const UploadInp = styled.input`
  display: none;
`;
export const Title = styled.h4`
  font-size: 16px;
  color: ${(props) => props.theme.bToW};
`;
export const SubTitle = styled.p`
  font-size: 10px;
  color: #afafaf;
`;

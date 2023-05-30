import styled from "styled-components";

export const FormContainerWrapper = styled.div`
  & .reverse-column-custom {
    @media (max-width: 768px) {
      flex-direction: column-reverse;
      display: flex;
      margin-bottom: 30px;
    }
  }
  @media (max-width: 768px) {
    & .full-on-small {
      flex-direction: column;
      width: 100%;
      align-items: start !important;
      & label {
        margin-bottom: 10px;
      }
    }
  }
  & .custom-edits {
    height: 40px;
    width: 40px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
  }
`;

export const InputWrapper = styled.div``;

export const Error = styled.div`
  position: absolute;
  font-size: 10px;
  bottom: -24px;
  color: #ff5050;
  display: flex;
  align-items: center;
  & svg {
    width: 15px;
  }
`;

export const FieldWrapper = styled.div`
  position: relative;
  margin-bottom: 25px !important;
  & label {
    width: 140px;
    color: ${(props) => props.theme.bToW};
  }
  & input.formik__inp {
    border: none;
    box-shadow: none !important;
    background: transparent;
    border: 1px solid
      ${(props) =>
        props?.touches && props.error
          ? "red"
          : props.theme.borderColor} !important;
    padding: 15px;
    outline: none;
    color: ${(props) => props.theme.bToW} !important;
    &:focus {
      background: transparent;
      border: 1px solid
        ${(props) =>
          props.touches && props.error ? "red" : props.theme.borderColor};
    }
  }
  & input.formik__inp.white-bg {
    color: ${(props) => props.theme.blackColor} !important;
  }
  & textarea {
    border: 1px solid
      ${(props) =>
        props.touches && props.error ? "red" : props.theme.borderColor};
    background: transparent;
    padding: 15px;
    outline: none !important;
    box-shadow: none !important;
    color: ${(props) => props.theme.bToW} !important;
    &:focus {
      background: transparent;
      border: 1px solid
        ${(props) =>
          props.touches && props.error ? "red" : props.theme.borderColor};
    }
  }
  & select {
    outline: none !important;
    box-shadow: none !important;
    background: transparent !important;
    color: ${(props) => props.theme.bToW} !important;
    text-transform: capitalize;
    border: 1px solid
      ${(props) =>
        props.touches && props.error ? "red" : props.theme.borderColor};
    &:focus {
      background: transparent;
      border: 1px solid
        ${(props) =>
          props.touches && props.error ? "red" : props.theme.borderColor};
    }
    & option {
      color: black;
      text-transform: capitalize;
    }
  }
  & .react-tag-input {
    outline: none !important;
    box-shadow: none !important;
    // background: red !important;
    border: 1px solid
      ${(props) =>
        props.touches?.length <= 0 && props.error
          ? "red"
          : props.theme.borderColor} !important;
  }
`;
export const ErrorWrapper = styled.div`
  color: #fc0707;
  font-size: 12px;
  position: absolute;
  padding: 0 10px;
`;
export const Wrapper = styled.div`
  border: 1px solid ${(props) => props.theme.borderColor};
  padding: 20px;
  border-radius: 10px;
  overflow: hidden;
  & .wrapper-head {
    border: 1px solid ${(props) => props.theme.borderColor};
    margin-left: -20px;
    margin-right: -20px;
    padding: 15px 20px;
    background: ${(props) => props.theme.primaryColor};
    color: ${(props) => props.theme.wToB};
    margin-top: -20px;
    font-weight: 500;
    height: 57px;
    margin-bottom: 20px;
  }
  & .react-tag-input {
    overflow: hidden;
    background: transparent;
    & .react-tag-input__input {
      color: ${(props) => props.theme.bToW};
    }
    & .react-tag-input__tag {
      color: ${(props) => props.theme.wToB};
      border-radius: 25px;
      padding: 10px;
      background: ${(props) => props.theme.bToW};
      & .react-tag-input__tag__remove {
        background: transparent;
        height: 1em;
      }
      & .react-tag-input__tag__remove::before,
      .react-tag-input__tag__remove::after {
        background: ${(props) => props.theme.wToB};
      }
    }
  }
  & label {
    width: 140px;
    color: ${(props) => props.theme.bToW};
  }
  & input.formik__inp {
    border: none;
    box-shadow: none !important;
    background: transparent;
    border: 1px solid ${(props) => props.theme.borderColor};
    padding: 15px;
    outline: none;
    color: ${(props) => props.theme.bToW} !important;
    &:focus {
      background: transparent;
      border: 1px solid ${(props) => props.theme.borderColor};
    }
  }
`;
export const UploaderWrapper = styled.div`
  position: relative;
`;
export const UploaderWrapperInner = styled.div`
  cursor: pointer;
  min-height: 70px;
  padding: 10px;
  border-radius: 10px;
  background-image: repeating-linear-gradient(
      -11deg,
      ${(props) =>
        props.touches && props.error ? "red" : props.theme.borderColor},
      ${(props) =>
          props.touches && props.error ? "red" : props.theme.borderColor}
        6px,
      transparent 6px,
      transparent 13px,
      ${(props) =>
          props.touches && props.error ? "red" : props.theme.borderColor}
        13px
    ),
    repeating-linear-gradient(
      79deg,
      ${(props) =>
        props.touches && props.error ? "red" : props.theme.borderColor},
      ${(props) =>
          props.touches && props.error ? "red" : props.theme.borderColor}
        6px,
      transparent 6px,
      transparent 13px,
      ${(props) =>
          props.touches && props.error ? "red" : props.theme.borderColor}
        13px
    ),
    repeating-linear-gradient(
      169deg,
      ${(props) =>
        props.touches && props.error ? "red" : props.theme.borderColor},
      ${(props) =>
          props.touches && props.error ? "red" : props.theme.borderColor}
        6px,
      transparent 6px,
      transparent 13px,
      ${(props) =>
          props.touches && props.error ? "red" : props.theme.borderColor}
        13px
    ),
    repeating-linear-gradient(
      259deg,
      ${(props) =>
        props.touches && props.error ? "red" : props.theme.borderColor},
      ${(props) =>
          props.touches && props.error ? "red" : props.theme.borderColor}
        6px,
      transparent 6px,
      transparent 13px,
      ${(props) =>
          props.touches && props.error ? "red" : props.theme.borderColor}
        13px
    );
  background-size: 2px 100%, 100% 2px, 2px 100%, 100% 2px;
  background-position: 0 0, 0 0, 100% 0, 0 100%;
  background-repeat: no-repeat;
  & .delete-file {
    position: absolute;
    left: 40px;
    top: 1px;
    background: red;
    border-radius: 100%;
    height: 20px;
    width: 20px;
    padding: 4px;
    color: #fff;
  }
  & img,
  svg.upload-icon {
    width: 50px;
    height: 50px;
    border-radius: 10px;
    margin-right: 10px;
    color: #cbd3e1;
  }
  & svg.upload-icon {
    width: 30px;
    height: 30px;
  }
  & .uploader-text {
    color: ${(props) => props.theme.bToW};
    & span {
      color: #4e96f5;
    }
  }
`;

export const SwitchWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  & .switch-label {
    color: ${(props) => props.theme.bToW};
  }
  & .toggle-switch {
    position: relative;
    display: inline-block;
    width: 50px;
    height: 25px;
  }
  & .toggle-switch input[type="checkbox"] {
    display: none;
  }
  & .toggle-switch {
    & .switch {
      position: absolute;
      cursor: pointer;
      background-color: transparent;
      border: 1px solid ${(props) => props.theme.borderColor};
      border-radius: 25px;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      transition: background-color 0.2s ease;
    }
  }
  & .toggle-switch {
    & .switch::before {
      position: absolute;
      content: "";
      left: 1px;
      top: 1px;
      width: 21px;
      height: 21px;
      background-color: ${(props) => props.theme.bToW};
      border-radius: 50%;
      transition: transform 0.3s ease;
    }
  }
  & .toggle-switch input[type="checkbox"]:checked + {
    & .switch::before {
      transform: translateX(25px);
      background-color: ${(props) => props.theme.wToB} !important;
    }
  }
  & .toggle-switch input[type="checkbox"]:checked + {
    & .switch {
      background-color: ${(props) => props.theme.bToW} !important;
    }
  }
`;

export const ImagesOuter = styled.div`
  max-height: 300px;
  overflow-y: auto;
  overflow-x: hidden;
`;

import styled, { css } from "styled-components";

export const StatusBadge = styled.span`
  padding: 2px 10px;
  border-radius: 30px;
  color: #fff;
  ${(props) => {
    switch (props.status) {
      case "panding":
        return css`
          background: #deb879;
        `;
      case "published":
        return css`
          background: #7b67de;
        `;
      case "unpublished":
        return css`
          background: #f36161;
        `;
    }
  }}
`;

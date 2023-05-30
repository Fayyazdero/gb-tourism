import styled, { css } from "styled-components";
import { Link as Tag } from "react-router-dom";

export const ChipWrapper = styled(Tag)`
  ${(props) => {
    switch (props.category) {
      case "tag":
        return css`
          background-color: #e5e5e5;
          color: #333;
          border: 1px solid #d4d4d4;
        `;
      case "travel":
        return css`
          background-color: #ff469c;
          color: #fff;
          border: 1px solid #ff469c;
        `;
      case "entertainment":
        return css`
          background-color: #ff0018;
          color: #fff;
          border: 1px solid #ff0018;
        `;
      case "world":
        return css`
          background-color: #aa35d6;
          color: #fff;
          border: 1px solid #aa35d6;
        `;
      case "life-style":
        return css`
          background-color: #32b47b;
          color: #fff;
          border: 1px solid #32b47b;
        `;
      case "fashion":
        return css`
          background-color: #f58021;
          color: #fff;
          border: 1px solid #f58021;
        `;
      case "sports":
        return css`
          background-color: #4886ec;
          color: #fff;
          border: 1px solid #4886ec;
        `;
      case "news":
        return css`
          background-color: #b23774;
          color: #fff;
          border: 1px solid #b23774;
        `;
      case "success-stories":
        return css`
          background-color: #39a424;
          color: #fff;
          border: 1px solid #39a424;
        `;
      case "physical-fitness":
        return css`
          background-color: #11768c;
          color: #fff;
          border: 1px solid #11768c;
        `;
      case "games":
        return css`
          background-color: #9e2c2c;
          color: #fff;
          border: 1px solid #9e2c2c;
        `;
      case "web-development":
        return css`
          background-color: #3f51b5;
          color: #fff;
          border: 1px solid #3f51b5;
        `;
      case "adventure":
        return css`
          background-color: #ff623e;
          color: #fff;
          border: 1px solid #ff623e;
        `;
      default:
        return css`
          background-color: #48d6ec;
          color: #fff;
          border: 1px solid #48d6ec;
        `;
    }
  }};
  margin-bottom: 5px;
  border-radius: 2px;
  display: inline-block;
  font: normal 600 11px Jost;
  letter-spacing: 0.3px;
  line-height: 16px;
  height: 24px;
  padding: 3px 7px;
  text-transform: uppercase;
  text-decoration: none;
  &:hover {
    color: ${(props) => (props.category === "tag" ? "#333" : "#fff")};
  }
`;

export const SelectedCategories = styled.div`
  display: flex;
`;

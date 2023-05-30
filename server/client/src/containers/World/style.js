import styled from "styled-components";

export const WorldWrapper = styled.div`
  & .round-cards-outer {
    & .round-card-wrapper:last-child {
      & div {
        margin-bottom: 0 !important;
      }
    }
  }
`;

import styled from "styled-components";

export const TableOuter = styled.table`
  background: #fff;
  width: 100%;
  padding: 10px;
  border: 1px solid #e1e1e1;
  font: normal 300 16px Jost;
  & th {
    padding: 15px 20px;
    border-bottom: 1px solid #e1e1e1;
    font: normal 500 16px Jost;
    background: #7b67de;
    color: #fff;
  }
  & td {
    padding: 10px 20px;
    border-bottom: 1px solid #e1e1e1;
  }
  & .action-btn {
    background: transparent;
    border: none;
    & svg {
      width: 16px;
    }
  }
  & .action-edit {
    color: #68bf68;
  }
  & .action-view {
    color: #7b67de;
    margin: 0 10px;
  }
  & .action-delete {
    color: #ff6363;
  }
  & .user-image {
    width: 30px;
    height: 30px;
    border-radius: 100%;
  }
`;

export const TableWrapper = styled.div`
  overflow: hidden;
  border-radius: 12px;
`;

export const TablePagination = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  & .pagination-btn {
    background: #7b67de;
    color: #fff;
    width: 40px;
    height: 40px;
    border-radius: 100%;
    border: none;
  }
  & .previous-btn, .next-btn {
    background: #fff;
    color: #333;
    width: 40px;
    height: 40px;
    border-radius: 100%;
    border: 1px solid #c1c1c1;
  }
  & input, select {
    text-align: center;
    border-radius: 20px;
    border: 1px solid #bdbdbd;
    background: #fff;
    height: 38px;
    outline: none;
  }
  & input {
    width: 50px;
  }
  & select {
    width: 80px;
  }
  & .pagination-text {
    font: normal 300 15px Jost;
  }
`;

import React from "react";
import { useTable } from "react-table";
import { useGlobalFilter } from "react-table/dist/react-table.development";
import { usePagination } from "react-table/dist/react-table.development";
import { Loader } from "../../../components/global/Loader";
// import { GlobalFilter } from "../../../components/Dashboard/GlobalFilter";
import { TableOuter, TableWrapper, TablePagination } from "./style";

export const Table = ({ columns, data, loading }) => {
  const tableInstance = useTable(
    {
      data,
      columns,
    },
    useGlobalFilter,
    usePagination
  );
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    rows,
    nextPage,
    previousPage,
    canNextPage,
    prepareRow,
    setGlobalFilter,
    gotoPage,
    state,
    pageOptions,
    pageCount,
    setPageSize,
    canPreviousPage,
  } = tableInstance;
  const { pageIndex, pageSize, globalFilter } = state;
  return (
    <>
      {loading ? (
        <Loader background="white" align="center" height="610px" />
      ) : data.length > 0 ? (
        <>
          {/* <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} className="mb-2" /> */}
          <TableWrapper>
            <TableOuter {...getTableProps()}>
              <thead>
                {headerGroups.map((headerGroup, key) => (
                  <tr {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map((column, index) => (
                      <th key={index} {...column.getHeaderProps()}>
                        {column.render("header")}
                      </th>
                    ))}
                  </tr>
                ))}
              </thead>
              <tbody {...getTableBodyProps()}>
                {page.map((row) => {
                  prepareRow(row);
                  return (
                    <tr {...row.getRowProps()}>
                      {row.cells.map((cell) => (
                        <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                      ))}
                    </tr>
                  );
                })}
              </tbody>
            </TableOuter>
          </TableWrapper>
          <TablePagination className="mt-3">
            <div className="pagination-text me-3">
              Page {pageIndex + 1} of {pageOptions.length}
            </div>
            <div className="pagination-text me-3">
              Go to page
              <input
                className="ms-3"
                type="number"
                defaultValue={pageIndex + 1}
                onChange={(e) => {
                  const pageNumber = e.target.value
                    ? Number(e.target.value) - 1
                    : 0;
                  gotoPage(pageNumber);
                }}
              />
            </div>
            <div className="pagination-text me-3">
              <select
                value={pageSize}
                onChange={(e) => setPageSize(Number(e.target.value))}
              >
                {[10, 25, 50].map((pageSize) => (
                  <option key={pageSize} value={pageSize}>
                    Show {pageSize}
                  </option>
                ))}
              </select>
            </div>
            <button
              className="previous-btn me-2"
              onClick={() => gotoPage(0)}
              disabled={!canPreviousPage}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-chevrons-left"
              >
                <polyline points="11 17 6 12 11 7"></polyline>
                <polyline points="18 17 13 12 18 7"></polyline>
              </svg>
            </button>
            <button
              className="pagination-btn me-2"
              onClick={() => previousPage()}
              disabled={!canPreviousPage}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-chevron-left"
              >
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </button>
            <button
              className="pagination-btn me-2"
              onClick={() => nextPage()}
              disabled={!canNextPage}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-chevron-right"
              >
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>
            <button
              className="next-btn"
              onClick={() => gotoPage(pageCount - 1)}
              disabled={!canNextPage}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-chevrons-right"
              >
                <polyline points="13 17 18 12 13 7"></polyline>
                <polyline points="6 17 11 12 6 7"></polyline>
              </svg>
            </button>
          </TablePagination>
        </>
      ) : (
        "no data"
      )}
    </>
  );
};

import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { MyModal } from "../../../components/Modal";

// import { Table } from "../Table";
import { toast } from "react-toastify";
import { Table } from "./table";
import { MyModal } from "../../../components/global/Modal";
export const Users = () => {
  const dispatch = useDispatch();
  const [myTableData, setMyTableData] = useState([]);
  const { loading, users, error } = useSelector((state) => state.allUsers);
  const [show, setShow] = useState(false);
  const [userId, setUserId] = useState(null);
  const [userDetails, setUserDetails] = useState({});
  const [modalData, setModalData] = useState({
    title: "",
    body: "",
    confirm: null,
  });

  const tableData = () => {
    let data = [];
    users.forEach((user, index) => {
      data.push({ ...user, sno: index + 1 });
    });
    setMyTableData(data);
  };

  useEffect(() => {
    // dispatch(getUsersAction());
    error && toast.error(error, { position: toast.POSITION.TOP_RIGHT });
  }, [dispatch || error]);

  useEffect(() => {
    tableData();
  }, [users]);

  const handleModalAction = (payload, type) => {
    switch (type) {
      case "DELETE":
        const delData = {
          title: "User Delete",
          body: "Are you sure to delete user?",
          confirm: handleConfirmDel,
        };
        return setUserId(payload), setModalData({ ...delData }), setShow(true);

      case "EDIT":
        const updateData = {
          title: "User Update",
          body: <>User update</>,
          confirm: handleConfirmDel,
        };
        return (
          setUserDetails(payload),
          setModalData({ ...updateData }),
          setShow(true)
        );

      case "VIEW":
        const viewData = {
          title: "User View",
          body: <>User View</>,
          confirm: handleConfirmDel,
        };
        return (
          setUserDetails(payload), setModalData({ ...viewData }), setShow(true)
        );
    }
  };

  const handleConfirmDel = () => {
    // dispatch(deleteUserAction(userId));
    setShow(false);
  };

  const data = useMemo(() => myTableData, [tableData]);

  const columns = useMemo(
    () => [
      {
        header: "S-NO",
        accessor: "sno",
      },
      {
        header: "User ID",
        accessor: "_id",
      },
      {
        header: "Username",
        accessor: "username",
        Cell: (tableProps) =>
          tableProps.row.original.profilePic ? (
            <>
              <img
                className="user-image"
                src={tableProps.row.original.profilePic}
                alt="Player"
              />
              <span className="ms-2 text-capitalize">
                {tableProps.row.original.username}
              </span>
            </>
          ) : (
            <>
              <img
                className="user-image"
                src="https://www.cornwallbusinessawards.co.uk/wp-content/uploads/2017/11/dummy450x450.jpg"
                width={60}
                alt="Player"
              />
              <span className="ms-2 text-capitalize">
                {tableProps.row.original.username}
              </span>
            </>
          ),
      },
      {
        header: "Email",
        accessor: "email",
      },
      {
        header: "Created At",
        accessor: "createdAt",
      },
      {
        header: "Actions",
        accessor: "actions",
        Cell: (tableProps) => (
          <>
            <button
              onClick={() => handleModalAction(tableProps.row.original, "EDIT")}
              className="action-btn action-edit"
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
                className="feather feather-edit"
              >
                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
              </svg>
            </button>
            <button
              className="action-btn action-view"
              onClick={() => handleModalAction(tableProps.row.original, "VIEW")}
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
                className="feather feather-eye"
              >
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                <circle cx="12" cy="12" r="3"></circle>
              </svg>
            </button>
            <button
              className="action-btn action-delete"
              onClick={() =>
                handleModalAction(tableProps.row.original._id, "DELETE")
              }
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
                className="feather feather-trash-2"
              >
                <polyline points="3 6 5 6 21 6"></polyline>
                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                <line x1="10" y1="11" x2="10" y2="17"></line>
                <line x1="14" y1="11" x2="14" y2="17"></line>
              </svg>
            </button>
          </>
        ),
      },
    ],
    []
  );

  return (
    <>
      <Table />
      {/* <Table columns={columns} data={data} loading={loading} /> */}
      <MyModal
        title={modalData.title}
        show={show}
        setShow={setShow}
        centered
        confirm={modalData.confirm}
      >
        {modalData.body}
      </MyModal>
    </>
  );
};

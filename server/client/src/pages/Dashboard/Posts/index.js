import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MyModal } from "../../../components/global/Modal";
import { Table } from "../Table";
import { toast } from "react-toastify";
import { StatusBadge } from "./style";
export const Posts = () => {
  const dispatch = useDispatch();
  const [myTableData, setMyTableData] = useState([]);
  const { loading, posts, error } = useSelector((state) => state.allPosts);
  const [show, setShow] = useState(false);
  const [postId, setPostId] = useState(null);
  const [username, setUsername] = useState(null);
  const [postDetails, setPostDetails] = useState({});
  const [modalData, setModalData] = useState({
    title: "",
    body: "",
    confirm: () => {},
  });

  const initialValues = {
    title: "",
    desc: "",
  };

  const [values, setValues] = useState(initialValues);

  const onChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const tableData = () => {
    let data = [];
    posts.forEach((post, index) => {
      data.push({ ...post, sno: index + 1 });
    });
    setMyTableData(data);
  };

  useEffect(() => {
    // dispatch(getPostsAction());
    error && toast.error(error, { position: toast.POSITION.TOP_RIGHT });
  }, [dispatch || error]);

  useEffect(() => {
    tableData();
  }, [posts]);

  let modelData = {
    delete: {
      title: "Post Delete",
      body: "Are you sure to delete post?",
      confirm: console.log,
    },
    edit: {
      title: "asdf",
      body: "asdfasdf",
      confirm: console.log,
    },
    view: {
      title: "asdf",
      body: "asdfasdf",
      confirm: console.log,
    },
  };

  const handleModalAction = (payload, type) => {
    switch (type) {
      case "DELETE":
        const delData = {
          title: "Post Delete",
          body: "Are you sure to delete post?",
          confirm: handleConfirmDel,
        };
        setPostId(payload._id);
        setUsername(payload.username);
        setModalData({ ...delData });
        setShow(true);
        break;

      case "EDIT":
        const updateData = {
          title: "Post Update",
          body: (
            <>
              <form>
                <input
                  name="title"
                  value={values.title}
                  placeholder="title"
                  onChange={onChange}
                />
                <input
                  name="desc"
                  value={values.desc}
                  placeholder="desc"
                  onChange={onChange}
                />
              </form>
            </>
          ),
          confirm: handleConfirmDel,
        };
        setPostDetails(payload);
        setModalData({ ...updateData });
        setShow(true);
        break;

      case "VIEW":
        const viewData = {
          title: "Post View",
          body: <>Post View</>,
          confirm: handleConfirmDel,
        };
        setPostDetails(payload);
        setModalData({ ...viewData });
        setShow(true);
        break;
    }
  };

  const handleConfirmDel = () => {
    // dispatch(deletePostAction(postId, username));
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
        header: "Post ID",
        accessor: "_id",
      },
      {
        header: "Createdy By",
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
        header: "Status",
        accessor: "status",
        Cell: (tableProps) => (
          <StatusBadge status={tableProps.row.original.status}>
            {tableProps.row.original.status}
          </StatusBadge>
        ),
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
                handleModalAction(tableProps.row.original, "DELETE")
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
  const [products, setProducts] = useState([
    { id: 2, name: "tea", price: 22 },
    { id: 1, name: "cup", price: 22 },
    { id: 1, name: "cup", price: 22 },
    { id: 1, name: "cup", price: 22 },
    { id: 1, name: "cup", price: 22 },
  ]);
  const [basket, setBasket] = useState([]);
  const total = basket.reduce(
    (accumulator, current) => accumulator + current.price,
    0
  );
  const addItemToBasket = (item) => {
    setBasket([item, ...basket]);
  };
  const removeItemFromBasket = (id) => {
    const index = basket.findIndex((item) => item.id === id);
    let newBasket = [...basket];
    newBasket.splice(index, 1);
    setBasket(newBasket);
  };

  return (
    <>
      <h2>Cart Items ${total}</h2>
      {basket &&
        basket.map((basketItem, index) => (
          <div key={index}>
            <p>{basketItem.name}</p>
            <button onClick={() => removeItemFromBasket(basketItem.id)}>
              remove
            </button>
          </div>
        ))}
      <h2>Buy Items Here</h2>
      {products &&
        products.map((product, index) => (
          <div key={index + "new"}>
            <p>{product.name}</p>
            <button onClick={() => addItemToBasket(product)}>
              Buy Product
            </button>
          </div>
        ))}
      <Table columns={columns} data={data} loading={loading} />
      {values.title}
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

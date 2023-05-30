import { Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import Chip from "../../components/global/Chip";
import FileUploader from "../../components/global/FileUploader";
import Input from "../../components/global/Input";
import { MyModal } from "../../components/global/Modal";
import Location from "../../components/svgs/Location";
import { titleHelper } from "../../helpers";
import { getUserAction } from "../../redux/actions/user";
import { toast } from "react-toastify";
import {
  ProfileWrapper,
  Picture,
  ProfileContent,
  SelectedCategories,
  ProfileSection,
  CurrentUserImage,
  Wrapper,
} from "./style";
import * as Yup from "yup";
import {
  deletePostAction,
  getUserPostsAction,
} from "../../redux/actions/posts";
import { LatestCard } from "../../components/LatestCard";
import { Loader } from "../../components/global/Loader";
import Tabs from "../../components/Tabs";
import { Empty } from "../../components/Empty";

const editSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(4, "Too Short!")
    .max(20, "Too Long!")
    .required("Required"),
  description: Yup.string()
    .min(4, "Too Short!")
    .max(2000000, "Too Long!")
    .required("Required"),
  password: Yup.string()
    .min(4, "Too Short!")
    .max(20, "Too Long!")
    .required("Required"),
  confirmPassword: Yup.string()
    .min(4, "Too Short!")
    .max(20, "Too Long!")
    .required("Required"),
});

const Profile = () => {
  let initialValues = {
    firstName: "",
    description: "",
    password: "",
    confirmPassword: "",
  };

  const params = useParams();
  const dispatch = useDispatch();
  const { user: currentUser, loading: currentUserLoading } = useSelector(
    (state) => state.auth
  );
  const { posts, loading } = useSelector((state) => state.userPosts);
  const { delete_success, error } = useSelector((state) => state.posts);
  const [file, setFile] = useState("");
  const { user, loading: userLoading } = useSelector((state) => state.user);
  const [state, setState] = useState({});
  const [show, setShow] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const [deletePostId, setDeletePostId] = useState("");
  const [pendingPosts, setPendingPosts] = useState([]);
  const [publishedPosts, setPublishedPosts] = useState([]);
  const navigate = useNavigate();

  const handlePostDelete = (event, id) => {
    event.stopPropagation();
    event.preventDefault();
    setDeletePostId(id);
    setShowDelete(true);
  };
  const handleClick = async () => {
    const data = await dispatch(deletePostAction(deletePostId));
    if (data) {
      setShowDelete(false);
    }
  };
  const handlePostEdit = (event, id) => {
    event.stopPropagation();
    event.preventDefault();
    navigate(`/posts/update/${id}`);
  };
  useEffect(() => {
    if (params.id) {
      dispatch(getUserAction(params.id));
      dispatch(getUserPostsAction(params.id));
    } else {
      navigate(
        `${currentUser?.user?._id ? currentUser?.user?._id : state?._id}`
      );
    }
  }, [params, delete_success]);
  useEffect(() => {
    setState(user);
  }, [user]);
  useEffect(() => {
    const pending = posts?.filter((post) => !post.publishedByUser);
    const published = posts?.filter((post) => post.publishedByUser);
    setPendingPosts(pending);
    setPublishedPosts(published);
  }, [posts, dispatch]);

  useEffect(() => {
    delete_success &&
      toast.success("Post is successfully deleted", {
        position: toast.POSITION.TOP_RIGHT,
      });
  }, [delete_success]);

  useEffect(() => {
    error && toast.error(error, { position: toast.POSITION.TOP_RIGHT });
  }, [error]);
  const Posts = () => {
    return (
      <Row>
        {posts.length > 0 ? (
          posts?.map((item) => (
            <Col className="mb-4" xs={12} md={12} lg={10} key={item?._id}>
              <LatestCard
                actions={user?._id === currentUser?.user?._id}
                post={item}
                category={item.categories}
                handlePostDelete={handlePostDelete}
                handlePostEdit={handlePostEdit}
              />
            </Col>
          ))
        ) : (
          <Empty height={250} logo back justify="center" fontSize={18}>
            Sorry! You don't have any posts
          </Empty>
        )}
      </Row>
    );
  };
  const PendingPosts = () => {
    return (
      <Row>
        {pendingPosts.length > 0 ? (
          pendingPosts?.map((item) => (
            <Col className="mb-4" xs={12} md={12} lg={10} key={item?._id}>
              <LatestCard
                post={item}
                actions={user?._id === currentUser?.user?._id}
                category={item.categories}
              />
            </Col>
          ))
        ) : (
          <Empty height={250} logo back justify="center" fontSize={18}>
            Sorry! You don't have any pending posts
          </Empty>
        )}
      </Row>
    );
  };
  const PublishedPosts = () => {
    return (
      <Row>
        {publishedPosts.length > 0 ? (
          publishedPosts?.map((item) => (
            <Col className="mb-4" xs={12} md={12} lg={10} key={item?._id}>
              <LatestCard
                post={item}
                actions={user?._id === currentUser?.user?._id}
                category={item.categories}
              />
            </Col>
          ))
        ) : (
          <Empty height={250} logo back justify="center" fontSize={18}>
            Sorry! You don't have any published posts
          </Empty>
        )}
      </Row>
    );
  };
  const usersTabs = [{ name: "Published", component: <PublishedPosts /> }];
  const currentUserTabs = [
    { name: "Posts", component: <Posts /> },
    { name: "Pending", component: <PendingPosts /> },
    { name: "Published", component: <PublishedPosts /> },
  ];
  const [activeTab, setActiveTab] = useState(0);
  const handleTab = (index) => {
    setActiveTab(index);
  };
  return (
    <Container>
      <Row>
        {userLoading || currentUserLoading ? (
          <Loader height="250" align="center" />
        ) : (
          <Col xs={12}>
            <Wrapper className="mb-4">
              <p className="mb-0 wrapper-title">User Info</p>
              {state.firstName !== undefined ? (
                <Col xs={12} sm={12} md={12} lg={8}>
                  <ProfileSection className="my-3">
                    <ProfileWrapper className="align-items-center">
                      <Picture className="me-3 picture-wrapper">
                        <img className="" src={state.profilePic} />
                      </Picture>
                      <ProfileContent className="full-content">
                        <p className="username">
                          {state.firstName + " " + state.lastName}
                        </p>
                        <span className="user-location">
                          <Location />
                          Gilgit, Gilgit Baltistan, Pakistan
                        </span>
                        <p className="description">
                          {titleHelper(
                            "Here, you can see the sparkle in my writing and I assure you to take into a magical flow. Here, you can see the sparkle in my writing and I assure you to take into a magical flow.",
                            200
                          )}
                        </p>
                        <SelectedCategories className="categories">
                          <Chip category="tag" className="me-3">
                            Sports
                          </Chip>
                          <Chip category="tag" className="me-3">
                            Science
                          </Chip>
                          <Chip category="tag" className="me-3">
                            technology
                          </Chip>
                        </SelectedCategories>
                      </ProfileContent>
                    </ProfileWrapper>
                  </ProfileSection>
                </Col>
              ) : (
                <Empty
                  height={250}
                  logo
                  back
                  justify="center"
                  className="w-100"
                  fontSize={18}
                >
                  Sorry! User data is not available
                </Empty>
              )}
            </Wrapper>
          </Col>
        )}
      </Row>
      <Row>
        {loading ? (
          <Col xs={12} md={12} lg={12}>
            <Loader height="300" align="center" />
          </Col>
        ) : (
          <Col xs={12} md={12} lg={12}>
            <Tabs
              handleTab={handleTab}
              activeTab={activeTab}
              tabs={
                currentUser?.user?._id === params?.id
                  ? currentUserTabs
                  : usersTabs
              }
            />
          </Col>
        )}
      </Row>
      <Row>
        <Col>
          <MyModal show={show} setShow={setShow} btnText="Update">
            <CurrentUserImage>
              <FileUploader
                file={file}
                setFile={setFile}
                title="Drag post thumbnail here, or browse"
                className="reactour-upload"
                color="text-black"
              />
            </CurrentUserImage>
            <Row>
              <Col xs={12}>
                <Formik
                  initialValues={initialValues}
                  validationSchema={editSchema}
                  onSubmit={(values) => {}}
                >
                  {({ errors, touched }) => (
                    <Form>
                      <Input
                        border="bottom"
                        name="firstName"
                        placeholder="First Name"
                        errors={errors}
                        touched={touched}
                      />
                      <Input
                        border="bottom"
                        name="description"
                        placeholder="Description"
                        as="textarea"
                        errors={errors}
                        touched={touched}
                      />
                      <Input
                        border="bottom"
                        name="password"
                        placeholder="Password"
                        type="password"
                        errors={errors}
                        touched={touched}
                      />
                      <Input
                        border="bottom"
                        name="confirmPassword"
                        placeholder="Change Password"
                        type="password"
                        errors={errors}
                        touched={touched}
                      />
                    </Form>
                  )}
                </Formik>
              </Col>
            </Row>
          </MyModal>
          <MyModal
            centered
            show={showDelete}
            setShow={setShowDelete}
            btnText="confirm"
            closeText="Cancle"
            title="Delete Post"
            onClick={() => handleClick()}
          >
            <p>Are you sure you want to delete the post?</p>
          </MyModal>
        </Col>
      </Row>
    </Container>
  );
};

export default Profile;

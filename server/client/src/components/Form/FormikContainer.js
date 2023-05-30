import React, { useEffect, useRef, useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Col, Container, Row } from "reactstrap";
import { Heading } from "../global/Heading";
import FroalaEditor from "../global/Froala/Froala";
import { FormContainerWrapper, ImagesOuter, Wrapper } from "./style";
import { Button } from "../global/Button";
import Input from "./Input";
import Textarea from "./Textarea";
import Uploader from "./Uploader";
import Select from "./Select";
import TagsInput from "./TagsInput";
import ToggleSwitch from "./Switch";
import { getPhotos } from "../../network/api/unsplash";
import { PostCard } from "../PostCard";
import { useNavigate, useParams } from "react-router-dom";
import { Loader } from "../global/Loader";
import { useDispatch, useSelector } from "react-redux";
import {
  addPostAction,
  clearPostAction,
  getPostAction,
  updatePostAction,
} from "../../redux/actions/posts";
import { toast } from "react-toastify";
import { useTour } from "@reactour/tour";
import ViewIcon from "../svgs/ViewIcon";
import PlayIcon from "../svgs/PlayIcon";
import { MyModal } from "../global/Modal";
import PreviewPost from "../../pages/Post/Preview";
import {
  imageDeleteAction,
  imageUploadAction,
} from "../../redux/actions/imageUpload";
import useCopy from "use-copy";
import CopyToClip from "../CopyToClip";
import { getCategories } from "../../network/api/categories";

function FormikContainer() {
  const navigate = useNavigate();
  const [categories, setCategories] = useState([
    { name: "Select an option", value: "" },
  ]);
  const initialValues = {
    title: "",
    caption: "",
    tags: [],
    markdown: "",
    desc: "",
    categories: "",
    selectedFile: "",
    publishedByUser: false,
  };
  const validationSchema = Yup.object({
    selectedFile: Yup.string().required("Field is required"),
    title: Yup.string()
      .min(20, "Minimum of 100 characters required")
      .max(200, "Title needs to be shorter than 200 characters")
      .required("Title is required"),
    markdown: Yup.string().required("Content is required"),
    caption: Yup.string().required("Caption is required"),
    tags: Yup.array(Yup.string().required("required")).min(
      5,
      "Minimum of 5 tags required"
    ),
    desc: Yup.string()
      .min(100, "Minimum of 200 characters required")
      .max(400, "Title needs to be shorter than 400 characters")
      .required("Description is required"),
    categories: Yup.string().required("Select atleast one category"),
  });
  const [searchTerm, setSearchTerm] = useState("");
  const [searchLoading, setSearchLoading] = useState(false);
  const [images, setImages] = useState("");
  const [show, setShow] = useState(false);
  const [showImage, setShowImage] = useState(false);
  const [imageUrl, setImageUrl] = useState("");
  const [previewData, setPreviewData] = useState({});
  const [checked, setChecked] = useState(false);
  const [updated, setUpdated] = useState(false);
  const [formValues, setFormValues] = useState({});
  const [copyText, setCopyText] = useState({ id: null, url: "" });
  const [copied, copy, setCopied] = useCopy(copyText.url);
  const params = useParams();
  const handleCopy = () => {
    copy();
    setTimeout(() => {
      setCopied(false);
    }, 1500);
  };
  const { user } = useSelector((state) => state.auth);
  const { loading, posts, error, update_success } = useSelector(
    (state) => state.posts
  );
  const {
    loading: imageLoading,
    error: fileError,
    success,
  } = useSelector((state) => state.file);
  const { loading: froalaImageLoading, file: froalaImage } = useSelector(
    (state) => state.froalaImage
  );
  const {
    post,
    loading: postLoading,
    error: postError,
  } = useSelector((state) => state.post);
  const dispatch = useDispatch();
  const { setIsOpen } = useTour();
  const ref = useRef(null);
  const onSubmit = async (values) => {
    if (params?.id) {
      const { name, creator } = post;
      const updatedPost = { ...values, name, creator };
      dispatch(updatePostAction(post?._id, updatedPost, navigate));
      setUpdated(true);
    } else {
      const newPost = {
        ...values,
        name: user?.user?.firstName,
      };
      dispatch(addPostAction(newPost, navigate));
      setChecked(true);
    }
  };
  const handleSearchImage = (e) => {
    setSearchTerm(e.target.value);
  };
  useEffect(() => {
    setSearchLoading(true);
    const timeOut = setTimeout(() => {
      getPhotos(searchTerm.trim())
        .then((res) => {
          setImages(res.data.results);
          setSearchLoading(false);
        })
        .catch((err) => {
          setSearchLoading(false);
        });
    }, 1500);
    return () => clearTimeout(timeOut);
  }, [searchTerm]);
  useEffect(() => {
    getCategories()
      .then((res) => {
        setCategories([...categories, ...res.data]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  useEffect(() => {
    error && toast.error(error, { position: toast.POSITION.TOP_RIGHT });
  }, [error]);
  useEffect(() => {
    fileError && toast.error(fileError, { position: toast.POSITION.TOP_RIGHT });
  }, [fileError]);
  useEffect(() => {
    posts &&
      checked &&
      toast.success("You have successfully added your post", {
        position: toast.POSITION.TOP_RIGHT,
      });
  }, [posts && checked]);
  useEffect(() => {
    success &&
      toast.success(success, {
        position: toast.POSITION.TOP_RIGHT,
      });
  }, [success]);
  const handleFileUpload = async (files) => {
    const file = new FormData();
    file.append("file", files.files[0]);
    const getFile = await dispatch(imageUploadAction(file));
    ref.current.setFieldValue("selectedFile", getFile);
  };
  const handleDeleteFile = (e, file) => {
    e.stopPropagation();
    const filename = file.split("/api/file/")[1];
    dispatch(imageDeleteAction(filename));
    ref.current.setFieldValue("selectedFile", "");
  };
  const handleOnChange = () => {
    setPreviewData(ref.current.values);
  };
  const handleClick = (id, url) => {
    if (id && url) {
      setCopyText({ id, url });
      setTimeout(() => {
        handleCopy();
      }, 100);
    }
  };

  useEffect(() => {
    if (params?.id) {
      dispatch(getPostAction(params?.id));
    }
    return () => dispatch(clearPostAction());
  }, [params]);

  useEffect(() => {
    update_success &&
      updated &&
      toast.success(update_success, {
        position: toast.POSITION.TOP_RIGHT,
      });
  }, [update_success && updated]);

  useEffect(() => {
    if (post) {
      const {
        title,
        caption,
        tags,
        markdown,
        desc,
        categories,
        selectedFile,
        publishedByUser,
        ...rest
      } = post;
      setFormValues({
        title,
        caption,
        tags,
        markdown,
        desc,
        categories,
        selectedFile,
        publishedByUser,
      });
    }
  }, [post]);
  return (
    <FormContainerWrapper>
      <Container>
        <Row>
          <Col className="mt-5 mb-3">
            <Heading>
              Making the world a Better place.
              <div className="d-flex">
                <Button
                  className="secondary reactour-preview round custom-edits me-2"
                  onClick={() => {
                    setShow(true);
                    handleOnChange();
                  }}
                >
                  <ViewIcon />
                </Button>
                <Button
                  className="secondary custom-edits round"
                  h="4"
                  onClick={() => setIsOpen(true)}
                >
                  <PlayIcon />
                </Button>
              </div>
            </Heading>
          </Col>
        </Row>
        <Row>
          <Col>
            <Formik
              initialValues={formValues.title ? formValues : initialValues}
              validationSchema={validationSchema}
              onSubmit={onSubmit}
              innerRef={ref}
              enableReinitialize
            >
              {({ values, setFieldValue, errors, touched }) => {
                return (
                  <Form>
                    <Row>
                      <Col sm={12} md={9}>
                        <Wrapper className="mb-3">
                          <div className="wrapper-head">Text</div>
                          <Input
                            type="text"
                            label="Title"
                            name="title"
                            className="form-control"
                            outerClass="d-flex align-items-center mb-3 full-on-small reactour-title"
                            placeholder="Add a catchy Title here..."
                            errors={errors}
                            touched={touched}
                          />
                          <Textarea
                            label="Description"
                            name="desc"
                            className="form-control"
                            outerClass="d-flex align-items-center mb-3 full-on-small reactour-desc"
                            placeholder="Add a brief description here..."
                            errors={errors}
                            touched={touched}
                            as="textarea"
                            rows={5}
                          />
                        </Wrapper>
                        <Wrapper className="mb-3">
                          <div
                            className={`wrapper-head d-flex justify-content-between align-items-center ${
                              searchLoading ? "py-2" : "py-3"
                            }`}
                          >
                            Unsplash Images
                            {searchLoading && <Loader changed width="44px" />}
                          </div>
                          <div className="d-flex align-items-center full-on-small reactour-search">
                            <label htmlFor="search">Search</label>
                            <input
                              type="text"
                              name="title"
                              id="search"
                              value={searchTerm}
                              onChange={(e) => handleSearchImage(e)}
                              className="form-control formik__inp"
                              placeholder="Search your desired image here..."
                            />
                          </div>
                          <ImagesOuter>
                            <Row className="mt-3 ">
                              {images.length > 0 &&
                                images?.map((image) => (
                                  <Col
                                    md={4}
                                    xs={12}
                                    className="mb-4 position-relative"
                                    key={image.id}
                                  >
                                    <PostCard
                                      height={200}
                                      imageUrl={image.urls.regular}
                                      full
                                      onClick={() => {
                                        setShowImage(true);
                                        setImageUrl(image.urls.regular);
                                      }}
                                    />
                                    <CopyToClip
                                      onClick={() => {
                                        handleClick(
                                          image.id,
                                          image.urls.regular
                                        );
                                      }}
                                      id={image.id}
                                      copyText={copyText}
                                      copied={copied}
                                    />
                                  </Col>
                                ))}
                            </Row>
                          </ImagesOuter>
                        </Wrapper>
                        <Wrapper className="mb-3">
                          <div
                            className={`wrapper-head d-flex justify-content-between align-items-center ${
                              froalaImageLoading && "py-2"
                            }`}
                          >
                            Content Editor{" "}
                            {froalaImageLoading && (
                              <Loader changed width="44px" />
                            )}
                          </div>
                          <FroalaEditor
                            onChange={(content) => {
                              setFieldValue("markdown", content);
                            }}
                            className="mb-3 reactour-editor reactour-editor"
                            errors={errors}
                            touched={touched}
                            name="markdown"
                            froalaImage={froalaImage}
                            content={values?.markdown}
                          />
                        </Wrapper>
                        <Wrapper className="mb-3">
                          <div className="reactour-upload">
                            <div className="wrapper-head">Image Upload</div>
                            <Uploader
                              label="Main Image Upload"
                              outerClass="d-flex align-items-center full-on-small"
                              type="file"
                              selected={values.selectedFile}
                              onChange={(event) => {
                                handleFileUpload(event.target);
                              }}
                              onClick={(event) => {
                                handleDeleteFile(event, values.selectedFile);
                              }}
                              loading={imageLoading}
                              errors={errors}
                              touched={touched}
                              name="selectedFile"
                            />
                            <p className="text-center">OR</p>
                            <Input
                              type="text"
                              label="Image URL"
                              name="selectedFile"
                              className="form-control"
                              placeholder="Add Image URL here..."
                              outerClass="d-flex align-items-center mt-3 full-on-small"
                              errors={errors}
                              touched={touched}
                            />
                          </div>
                          <Input
                            type="text"
                            label="Caption"
                            name="caption"
                            className="form-control"
                            placeholder="Your Image needs a good caption..."
                            outerClass="d-flex align-items-center mt-3 full-on-small reactour-caption"
                            errors={errors}
                            touched={touched}
                          />
                        </Wrapper>
                      </Col>
                      <Col
                        sm={12}
                        md={3}
                        lg={3}
                        className="reverse-column-custom"
                      >
                        <Button
                          type="submit"
                          className={`px-4 w-100 secondary ${
                            loading ? "py-2" : "py-3"
                          } reactour-button`}
                        >
                          {loading ? (
                            <Loader color="white" align="center" />
                          ) : (
                            "Publish Post"
                          )}
                        </Button>
                        <Wrapper className="my-3">
                          <div className="wrapper-head">Options</div>
                          <Select
                            name="categories"
                            label="Category"
                            options={categories}
                            outerClass="reactour-category"
                            errors={errors}
                            touched={touched}
                            className="form-control mt-2 mb-3"
                          />
                          <TagsInput
                            outerClass="reactour-tags"
                            name="tags"
                            label="Tags"
                            placeholder="Type and enter..."
                            tags={values.tags}
                            onChange={(newTags) =>
                              setFieldValue("tags", newTags)
                            }
                            errors={errors}
                            touched={touched}
                          />
                        </Wrapper>
                        <ToggleSwitch
                          name="publishedByUser"
                          isToggled={values.publishedByUser}
                          label="Published By User"
                          className="reactour-publish"
                          onChange={(e) =>
                            setFieldValue("publishedByUser", e.target.checked)
                          }
                        />
                      </Col>
                    </Row>
                  </Form>
                );
              }}
            </Formik>
          </Col>
        </Row>
        <Row>
          <Col>
            <MyModal
              size="xl"
              show={show}
              setShow={setShow}
              title="Post Preview"
              closeText="Close"
            >
              <PreviewPost previewData={previewData} />
            </MyModal>
            <MyModal
              size="lg"
              show={showImage}
              setShow={setShowImage}
              title="Image Preview"
              closeText="Close"
            >
              <img
                src={imageUrl}
                className="img-fluid w-100"
                alt="image text"
              />
            </MyModal>
          </Col>
        </Row>
      </Container>
    </FormContainerWrapper>
  );
}

export default FormikContainer;

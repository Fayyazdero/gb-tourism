import { Formik, Form } from "formik";
import React, { useEffect, useState } from "react";
import FroalaEditor from "../../../components/global/Froala/Froala";
import * as Yup from "yup";
import Input from "../../../components/global/Input";
import { Col, Container, Row } from "reactstrap";
import FileUploader from "../../../components/global/FileUploader";
import { Heading } from "../../../components/global/Heading";
import EmptyImg from "../../../assets/empty.png";
import { PostCard } from "../../../components/PostCard";
import { titleHelper } from "../../../helpers";
import { useSelector } from "react-redux";
import ReactTagInput from "@pathofdev/react-tag-input";
import { TagsWrapper } from "./style";
import { Button } from "../../../components/global/Button";
import { useTour } from "@reactour/tour";
import showdown from "showdown";

const PostSchema = Yup.object().shape({
  title: Yup.string()
    .min(30, "Too Short!")
    .max(200, "Too Long!")
    .required("Required"),
  desc: Yup.string()
    .min(200, "Too Short!")
    .max(500, "Too Long!")
    .required("Required"),
});

export const PostForm = () => {
  const { setIsOpen } = useTour();
  const [htmlPost, setHtmlPost] = useState("");
  const [markdownPost, setMarkdownPost] = useState("");
  const [tags, setTags] = useState([]);
  const [file, setFile] = useState("");
  const { user } = useSelector((state) => state.auth.user);
  const [postView, setPostView] = useState({
    title: "Example title",
    desc: "",
  });
  const handleOnChange = (event) => {
    const { value, name } = event.target;
    setPostView({
      ...postView,
      [name]: value,
    });
  };
  let initialValues = {
    title: "",
    desc: "",
  };
  useEffect(() => {}, [htmlPost, markdownPost]);
  return (
    <Container>
      <Row>
        <Col className="first-step">
          <Heading className="mb-5 mt-5" data-tut="reactour__copy">
            Create Your Post
            <Button
              h="4"
              onClick={() => {
                setIsOpen(true);
              }}
            >
              Learn How to Create Post
            </Button>
          </Heading>
        </Col>
      </Row>
      <Row>
        <Col>
          <Formik
            initialValues={initialValues}
            validationSchema={PostSchema}
            onSubmit={(values) => {
              // same shape as initial values
            }}
          >
            {({ errors, touched }) => (
              <Form className="auth-form" onChange={handleOnChange}>
                <Row>
                  <Col>
                    <Row>
                      <Col xs={12} sm={12}>
                        <Input
                          border="bottom"
                          className="px-2 pt-3 bg-transparent reactour-title"
                          name="title"
                          placeholder="Title"
                          errors={errors}
                          touched={touched}
                        />
                      </Col>
                      <Col xs={8}>
                        <TagsWrapper className="reactour-tags">
                          <ReactTagInput
                            placeholder="Type tag name and enter"
                            tags={tags}
                            onChange={(newTags) => setTags(newTags)}
                          />
                        </TagsWrapper>
                      </Col>
                      <Col xs={4}>
                        <Input
                          className="px-2 mt-2 pt-1 bg-transparent reactour-category"
                          border="bottom"
                          as="select"
                          name="category"
                          placeholder="Category"
                          errors={errors}
                          touched={touched}
                          rows="4"
                        >
                          <option value="category">Category</option>
                          <option value="green">Green</option>
                          <option value="blue">Blue</option>
                        </Input>
                      </Col>
                      <Col xs={12} sm={12}>
                        <Input
                          className="px-2 pt-3 bg-transparent reactour-desc"
                          border="bottom"
                          as="textarea"
                          name="desc"
                          placeholder="Description"
                          errors={errors}
                          touched={touched}
                          rows="4"
                        />
                      </Col>
                      <Col xs={12} sm={12}>
                        <FileUploader
                          file={file}
                          setFile={setFile}
                          title="Drag post thumbnail here, or browse"
                          className="reactour-upload"
                        />
                      </Col>
                    </Row>
                  </Col>
                  <Col xs={12} sm={5}>
                    <PostCard
                      className="reactour-preview"
                      title={titleHelper(postView.title, 20)}
                      category={"Category"}
                      username={user?.firstName}
                      time="Just Now"
                      imageUrl={file ? URL.createObjectURL(file) : EmptyImg}
                      full
                    />
                  </Col>
                </Row>
                <Row className="mt-4">
                  <Col xs={12}>
                    <FroalaEditor
                      onChange={(content) => {
                        const converter = new showdown.Converter();
                        setHtmlPost(content);
                        setMarkdownPost(converter.makeMarkdown(content));
                      }}
                      className="mb-3 reactour-editor"
                    />
                    <Button
                      className="primary mt-2 py-2 mb-5 reactour-button"
                      type="submit"
                    >
                      Create Post
                    </Button>
                  </Col>
                </Row>
              </Form>
            )}
          </Formik>
        </Col>
      </Row>
    </Container>
  );
};

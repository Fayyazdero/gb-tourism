import { ErrorMessage, Form, Formik } from "formik";
import React, { useState } from "react";
import * as Yup from "yup";
import { Col, Container, Row, Spinner } from "reactstrap";
import { Button } from "../../../components/Button";
import Froala from "../../../components/Froala";
import { Field, Heading } from "../../../pages/Login/style";
import { FormWrapper } from "./style";

export default function PostForm() {
  const [loading, setLoading] = useState(false);
  const initialValues = {
    title: "",
    desc: "",
  };
  const validationSchema = Yup.object().shape({
    title: Yup.string()
      .required("Title is required")
      .min(30, "Title must be at least 30 characters"),
    desc: Yup.string()
      .min(60, "Description must be at least 60 characters")
      .required("Description is required"),
  });
  const handleAddPost = (fields) => {};
  return (
    <Container>
      <Row>
        <Col className="col-md-6 offset-md-3">
          <FormWrapper>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={(fields) => handleAddPost(fields)}
              render={({ errors, status, touched }) => (
                <div className="form-right">
                  <Heading className="text-center mt-5">
                    Create Your Post
                  </Heading>
                  <Form>
                    <div className="form-group py-3">
                      <Field
                        name="title"
                        type="text"
                        placeholder="Title here"
                        className={
                          "form-control" +
                          (errors.title && touched.title ? " is-invalid" : "")
                        }
                      />
                      <ErrorMessage
                        name="title"
                        component="div"
                        className="invalid-feedback"
                      />
                    </div>
                    <div className="form-group py-3">
                      <Field
                        name="desc"
                        type="text"
                        placeholder="Description here"
                        className={
                          "form-control" +
                          (errors.desc && touched.desc ? " is-invalid" : "")
                        }
                      />
                      <ErrorMessage
                        name="desc"
                        component="div"
                        className="invalid-feedback"
                      />
                    </div>
                    <div className="form-group py-4 d-flex justify-content-center">
                      <Button
                        disabled={loading ? true : false}
                        type="submit"
                        className="primary mr-2 round"
                      >
                        Create Post{" "}
                        {loading ? <Spinner>Loading...</Spinner> : ""}
                      </Button>
                    </div>
                  </Form>
                </div>
              )}
            />
          </FormWrapper>
        </Col>
        <Col className="col-md-6 offset-md-3">
          <Froala />
        </Col>
      </Row>
    </Container>
  );
}

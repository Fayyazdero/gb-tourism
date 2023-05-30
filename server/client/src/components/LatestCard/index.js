import React from "react";
import User from "./../../assets/no-user.jpg";
import { Col, Row } from "reactstrap";
import {
  CardWrapper,
  CardWrapperInner,
  ImageWrapper,
  ContentWrapper,
  Cate,
  Title,
  TitleWrapper,
  UserInfo,
  UserName,
  Desc,
  Actions,
} from "./style";
import { useNavigate } from "react-router-dom";
import { titleHelper } from "../../helpers";
import Clock from "../svgs/Clock";
import MessageIcon from "../svgs/Message";
import Moment from "react-moment";
import EditIcon from "../svgs/EditIcon";
import DeleteIcon from "../svgs/DeleteIcon";

export const LatestCard = ({
  post,
  category,
  actions,
  handlePostEdit,
  handlePostDelete,
}) => {
  const navigate = useNavigate();
  const handleClick = (e) => {
    e.preventDefault();
    navigate(`/categories/${category}`);
  };
  return (
    <CardWrapper to={`/posts/${post._id}`}>
      <CardWrapperInner>
        <Row>
          <Col sm={12} md={5}>
            <ImageWrapper
              category={category}
              src={post.selectedFile}
              className="mb-2"
            />
          </Col>
          <Col sm={12} md={7}>
            <ContentWrapper className="mt-3 mt-md-0">
              <Cate
                category={category}
                onClick={(e) => handleClick(e)}
                className="d-flex align-self-start justify-content-between"
              >
                {category}
                {actions && (
                  <Actions>
                    <EditIcon
                      className="me-2"
                      onClick={(e) => handlePostEdit(e, post?._id)}
                    />
                    <DeleteIcon
                      onClick={(e) => handlePostDelete(e, post?._id)}
                    />
                  </Actions>
                )}
              </Cate>
              <TitleWrapper>
                <Title to="/" className="title-tag">
                  {titleHelper(post.title, 40)}
                </Title>
              </TitleWrapper>
              <UserInfo className="mt-3 position-relative">
                <UserName to={`/profile/${post?.creator?._id}`}>
                  <img
                    src={
                      post?.creator?.profilePic
                        ? post?.creator?.profilePic
                        : User
                    }
                    className="user-img me-1"
                  />
                  {post.name}
                </UserName>
                <div className="d-flex align-items-center">
                  <span className="icon-wrapper">
                    <Clock className="time-icon ms-3 me-1" />
                  </span>
                  <UserName to="#">
                    <Moment fromNow>{post?.createdAt}</Moment>
                  </UserName>
                  <span className="position-absolute comment-icon-wrapper">
                    {post?.comments?.length}
                    <MessageIcon className="ms-1" />
                  </span>
                </div>
              </UserInfo>
              <Desc className="my-3">{titleHelper(post.desc, 250)}</Desc>
            </ContentWrapper>
          </Col>
        </Row>
      </CardWrapperInner>
    </CardWrapper>
  );
};

import React from "react";
import {
  CommentWrapper,
  UserImageWrapper,
  UserImage,
  CommentInfo,
  TopInfo,
  CommentBody,
  Username,
  Time,
} from "./style";
import Moment from "react-moment";

const Comment = ({ comment, className }) => {
  return (
    <CommentWrapper className={`d-flex align-items-center mb-3 ${className}`}>
      <UserImageWrapper
        className="me-2"
        to={`/profile/${comment?.comment?.user?._id}`}
      >
        <UserImage
          className="img-fluid"
          src={comment?.comment?.user?.profilePic}
        />
      </UserImageWrapper>
      <CommentInfo>
        <TopInfo className="d-flex align-items-center">
          <Username
            className="me-4"
            to={`/profile/${comment?.comment?.user?._id}`}
          >
            {comment?.comment?.user?.firstName}
          </Username>
          <Time>
            <Moment fromNow>{Number(comment?.createdAt)}</Moment>
          </Time>
        </TopInfo>
        <CommentBody>{comment.comment.comment}</CommentBody>
      </CommentInfo>
    </CommentWrapper>
  );
};

export default Comment;

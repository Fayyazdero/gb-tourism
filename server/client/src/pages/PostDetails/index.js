import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import Comment from "../../components/comment";
import { Button } from "../../components/global/Button";
import Chip from "../../components/global/Chip";
import { Heading } from "../../components/global/Heading";
import Para from "../../components/global/Para";
import { PostCard } from "../../components/PostCard";
import { SocialShare } from "../../components/SocialShare";
import { Subscribe } from "../../components/Subscribe";
import TagIcon from "../../components/svgs/Tag";
import { titleHelper } from "../../helpers";
import { Loader } from "./../../components/global/Loader";
import Moment from "react-moment";
import {
  FacebookShareButton,
  LinkedinShareButton,
  PinterestShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  FacebookIcon,
  LinkedinIcon,
  PinterestIcon,
  TwitterIcon,
  WhatsappIcon,
} from "react-share";
import {
  clearPostAction,
  commentPostAction,
  getPostAction,
  getRecomendedPostsAction,
} from "../../redux/actions/posts";
import { PostDetailsWrapper, CommentSection, CommentForm } from "./style";
import { Empty } from "../../components/Empty";
const PostDetails = () => {
  const dispatch = useDispatch();
  const { post, loading } = useSelector((state) => state.post);
  const { user: state } = useSelector((state) => state.auth);
  const { posts } = useSelector((state) => state.recomended);
  const { c_loading } = useSelector((state) => state.posts);
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState(post?.comments);
  const { id } = useParams();
  useEffect(() => {
    dispatch(getPostAction(id));
    return () => dispatch(clearPostAction());
  }, [id]);
  useEffect(() => {
    if (post) {
      dispatch(getRecomendedPostsAction(post?.tags?.join(",")));
      setComments(post?.comments);
    }
  }, [post]);

  const handleAddComment = async () => {
    const commentBody = {
      comment,
      user: state?.user,
    };
    const newComments = await dispatch(commentPostAction(id, commentBody));
    setComments(newComments);
    setComment("");
  };

  const recomendedPosts = posts?.filter(({ _id }) => _id !== post?._id);

  return (
    <PostDetailsWrapper>
      {loading ? (
        <Container>
          <Row>
            <Col>
              <Loader height="400" align="center" />
            </Col>
          </Row>
        </Container>
      ) : post?.title ? (
        <>
          <Container>
            <Row>
              <Col>
                <PostCard
                  className="zero-margin"
                  height={500}
                  title={post?.title}
                  category={post?.categories}
                  postId={post?._id}
                  username={post?.name}
                  time={post?.createdAt}
                  imageUrl={post?.selectedFile}
                  userId={post?.creator?._id}
                  full
                />
              </Col>
            </Row>
          </Container>
          <Container>
            <Row className="mt-4">
              <Col>
                <div className="d-flex align-items-center justify-content-start w-100">
                  <div className="d-flex align-items-center">
                    <Link
                      to={`/profile/${post?.creator?._id}`}
                      className="d-flex align-items-center decoration-none"
                    >
                      <img
                        className="user-profile-img"
                        src={post?.creator?.profilePic}
                      />
                      <p className="text-capitalize mb-0 ms-4 user-name">
                        {post?.name}
                      </p>
                    </Link>
                    <p className="text-capitalize mb-0 ms-4 user-name">
                      On{" "}
                      <Moment format="MMMM D YYYY" locale>
                        {post?.createdAt}
                      </Moment>
                    </p>
                  </div>
                </div>
                <div className="social-icons mt-3 d-flex align-items-center">
                  <p className="mb-0 me-2 social-tag-text">Share to</p>
                  <FacebookShareButton
                    className="me-2"
                    quote={post?.title}
                    url={`https://storymugg.herokuapp.com/posts/${post?._id}`}
                    hashtag="face"
                  >
                    <FacebookIcon size={25} round={true} />
                  </FacebookShareButton>
                  <WhatsappShareButton
                    className="me-2"
                    url={`https://storymugg.herokuapp.com/posts/${post?._id}`}
                    title={post?.title}
                  >
                    <WhatsappIcon size={25} round={true} />
                  </WhatsappShareButton>
                  <TwitterShareButton
                    className="me-2"
                    url={`https://storymugg.herokuapp.com/posts/${post?._id}`}
                    title={post?.title}
                    hashtags={post?.tags}
                    related={recomendedPosts}
                  >
                    <TwitterIcon size={25} round={true} />
                  </TwitterShareButton>
                  <PinterestShareButton
                    className="me-2"
                    url={`https://storymugg.herokuapp.com/posts/${post?._id}`}
                    description={post?.desc}
                    media={post?.selectedFile}
                  >
                    <PinterestIcon size={25} round={true} />
                  </PinterestShareButton>
                  <LinkedinShareButton
                    className="me-2"
                    source="https://storymugg.herokuapp.com"
                    url={`https://storymugg.herokuapp.com/posts/${post?._id}`}
                    summary={post?.desc}
                    title={post?.title}
                  >
                    <LinkedinIcon size={25} round={true} />
                  </LinkedinShareButton>
                </div>
              </Col>
            </Row>
            <Row className="mt-3">
              <Col className="markdown__outer mb-3" xs={12} sm={12} md={9}>
                <p>{post?.desc}</p>
                <div dangerouslySetInnerHTML={{ __html: post.markdown }}></div>
              </Col>
              <Col className="d-none d-md-block">
                <SocialShare />
                <Subscribe />
              </Col>
            </Row>
            <Row className="my-2">
              <Col>
                <div className="tags-wrapper d-flex align-items-center">
                  <TagIcon />
                  <div>
                    {post?.tags?.map((tag, index) => (
                      <Chip
                        category="tag"
                        className="ms-3"
                        key={`${index}-tag`}
                      >
                        {tag}
                      </Chip>
                    ))}
                  </div>
                </div>
              </Col>
            </Row>
            <Row>
              <Col xs={12} sm={12} md={9} className="pt-4">
                <Heading>Related Posts</Heading>
              </Col>
            </Row>
            <Row className="mb-5">
              {loading ? (
                "loading"
              ) : (
                <>
                  {recomendedPosts?.splice(0, 3)?.map((post) => (
                    <Col xs={12} sm={6} md={3} key={post?._id} className="mt-3">
                      <PostCard
                        height={200}
                        font="small"
                        title={titleHelper(post?.title, 50)}
                        postId={post?._id}
                        imageUrl={post?.selectedFile}
                        full
                      />
                    </Col>
                  ))}
                </>
              )}
            </Row>
            <Row>
              <Col xs={12} sm={12} md={6}>
                <h5 className="comments-header mb-4">
                  {comments?.length}{" "}
                  {comments?.length === 1 ? "Comment" : "Comments"}
                </h5>
                <CommentSection>
                  {comments?.map((comment) => (
                    <Comment
                      key={comment?._id}
                      className="mb-4"
                      comment={comment}
                      post={post && post}
                    />
                  ))}
                </CommentSection>
              </Col>
            </Row>
            <Row>
              {state?.user ? (
                <Col xs={12} sm={12} md={6}>
                  <CommentForm>
                    <div className="d-flex">
                      <div className="mt-5">
                        <Link
                          className="me-3"
                          to={`/profile/${post?.creator?._id}`}
                        >
                          <img src={state?.user?.profilePic} />
                        </Link>
                      </div>
                      <div className="d-flex flex-column w-100">
                        <h4>Add your comment here</h4>
                        <textarea
                          className="p-3"
                          name=""
                          value={comment}
                          placeholder="Type something here..."
                          rows="3"
                          onChange={(e) => setComment(e.target.value)}
                        />{" "}
                        <br />
                        <Button
                          className="m-0 mb-4 align-self-end"
                          disabled={comment?.length <= 0}
                          onClick={() => handleAddComment()}
                        >
                          {c_loading ? "Adding your Comment" : "Comment"}
                        </Button>
                      </div>
                    </div>
                  </CommentForm>
                </Col>
              ) : (
                <p>
                  To add your comment please <Link to="/auth">Sign In</Link>{" "}
                </p>
              )}
            </Row>
          </Container>
        </>
      ) : (
        <Empty height={450} logo back justify="center" fontSize={18}>
          Sorry! Post data is not available right now.
        </Empty>
      )}
    </PostDetailsWrapper>
  );
};

export default PostDetails;

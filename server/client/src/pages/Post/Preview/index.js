import React from "react";
import { useSelector } from "react-redux";
import { Col, Container, Row } from "reactstrap";
import { PostCard } from "../../../components/PostCard";
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
import Moment from "react-moment";
import { Link } from "react-router-dom";
import { PreviewWrapper } from "./style";
import { SocialShare } from "../../../components/SocialShare";
import Chip from "../../../components/global/Chip";
import TagIcon from "../../../components/svgs/Tag";

const PreviewPost = ({ previewData }) => {
  const { user } = useSelector((state) => state.auth.user);
  return (
    <PreviewWrapper>
      <Container>
        <Row>
          <Col>
            <PostCard
              className="zero-margin"
              height={500}
              title={previewData?.title}
              category={previewData?.categories}
              postId={previewData?._id}
              username={user?.firstName}
              time={Date.now()}
              imageUrl={previewData?.selectedFile}
              userId={previewData?.creator?._id}
              full
            />
          </Col>
        </Row>
        <Row className="mt-4">
          <Col>
            <div className="d-flex align-items-center justify-content-start w-100">
              <div className="d-flex align-items-center">
                <Link
                  to={`/profile/${user?._id}`}
                  className="d-flex align-items-center decoration-none"
                >
                  <img className="user-profile-img" src={user?.profilePic} />
                  <p className="text-capitalize mb-0 ms-4 user-name">
                    {user?.firstName}
                  </p>
                </Link>
                <p className="text-capitalize mb-0 ms-4 user-name">
                  On{" "}
                  <Moment format="MMMM D YYYY" locale>
                    {Date.now()}
                  </Moment>
                </p>
              </div>
            </div>
            <div className="social-icons mt-3 d-flex align-items-center">
              <p className="mb-0 me-2 social-tag-text">Share to</p>
              <FacebookShareButton
                className="me-2"
                quote={previewData?.title}
                url={`https://storymugg.herokuapp.com`}
                hashtag="face"
              >
                <FacebookIcon size={25} round={true} />
              </FacebookShareButton>
              <WhatsappShareButton
                className="me-2"
                url={`https://storymugg.herokuapp.com`}
                title={previewData?.title}
              >
                <WhatsappIcon size={25} round={true} />
              </WhatsappShareButton>
              <TwitterShareButton
                className="me-2"
                url={`https://storymugg.herokuapp.com`}
                title={previewData?.title}
                hashtags={previewData?.tags}
              >
                <TwitterIcon size={25} round={true} />
              </TwitterShareButton>
              <PinterestShareButton
                className="me-2"
                url={`https://storymugg.herokuapp.com`}
                description={previewData?.desc}
                media={previewData?.selectedFile}
              >
                <PinterestIcon size={25} round={true} />
              </PinterestShareButton>
              <LinkedinShareButton
                className="me-2"
                source="https://storymugg.herokuapp.com"
                url={`https://storymugg.herokuapp.com`}
                summary={previewData?.desc}
                title={previewData?.title}
              >
                <LinkedinIcon size={25} round={true} />
              </LinkedinShareButton>
            </div>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col className="markdown__outer mb-3" xs={12} sm={8} md={9}>
            <div>{previewData?.desc}</div>
            <div
              dangerouslySetInnerHTML={{ __html: previewData.markdown }}
            ></div>
          </Col>

          <Col>
            <SocialShare />
          </Col>
        </Row>
        <Row className="my-2">
          <Col>
            <div className="tags-wrapper d-flex align-items-center">
              <TagIcon />
              {previewData.tags.length > 0 ? (
                <div>
                  {previewData?.tags?.map((tag, index) => (
                    <Chip category="tag" className="ms-3" key={`${index}-tag`}>
                      {tag}
                    </Chip>
                  ))}
                </div>
              ) : (
                <p className="mb-0 ms-3">No Tags</p>
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </PreviewWrapper>
  );
};

export default PreviewPost;

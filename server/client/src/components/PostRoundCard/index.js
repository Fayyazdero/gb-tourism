import { CardWrapper, ContentWrapper, CardHeading, CardTime } from "./style";
import Moment from "react-moment";
import Clock from "../svgs/Clock";
export const PostRoundCard = ({ imgUrl, heading, time, postId }) => {
  return (
    <CardWrapper>
      <img className="img-fluid storyImg" src={imgUrl} />
      <ContentWrapper>
        <CardHeading className="title-tag" to={`/posts/${postId}`}>
          {heading}
        </CardHeading>
        <CardTime className="d-flex align-items-center">
          <Clock className="me-1" />
          <Moment fromNow>{time}</Moment>
        </CardTime>
      </ContentWrapper>
    </CardWrapper>
  );
};

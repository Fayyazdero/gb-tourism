import { CardWrapper, ContentWrapper, CardHeading, Time } from "./style";
import Moment from "react-moment";
import { titleHelper } from "./../../helpers";
import Clock from "../svgs/Clock";
import Chip from "../global/Chip";
export const LifeStyleCard = ({ imgUrl, heading, category, time, postId }) => {
  return (
    <CardWrapper to={`/posts/${postId}`}>
      <img className="img-fluid storyImg" src={imgUrl} />
      <ContentWrapper className="mt-3">
        <div>
          <Chip
            className="category-tag"
            to={`/categories/${category}`}
            category={category}
          >
            {category}
          </Chip>
        </div>
        <CardHeading className="title-tag" to="/">
          {titleHelper(heading, 50)}
        </CardHeading>
        <Time className="d-flex align-items-center">
          <Clock className="time-icon me-2" />
          <Moment fromNow>{time}</Moment>
        </Time>
      </ContentWrapper>
    </CardWrapper>
  );
};

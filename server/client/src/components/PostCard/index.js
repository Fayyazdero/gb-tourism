import { Link } from "react-router-dom";
import {
  CardWrapper,
  CardLink,
  CardImgWrapper,
  ContentWrapper,
  CardHeading,
  HeadingTag,
  UserDetails,
  Dot,
  Time,
} from "./style";
import Moment from "react-moment";
import Chip from "../global/Chip";
export const PostCard = ({
  full,
  imageUrl,
  category,
  title,
  username,
  time,
  postId,
  className,
  height,
  font,
  userId,
  onClick,
}) => {
  return (
    <CardWrapper className={className} onClick={onClick}>
      <CardLink to={postId ? `/posts/${postId}` : "#"}>
        <CardImgWrapper
          full={full}
          height={height}
          imageUrl={imageUrl}
          className="card-image"
        ></CardImgWrapper>
        {/* <Clap className="clap">
          <HeartIcon />
        </Clap> */}
      </CardLink>
      <ContentWrapper>
        {category && (
          <Chip
            className="category-tag"
            to={`/categories/${category}`}
            category={category}
          >
            {category}
          </Chip>
        )}
        <CardHeading full={full} font={font}>
          <HeadingTag
            to={postId ? `/posts/${postId}` : "#"}
            className="heading-tag"
          >
            {title}
          </HeadingTag>
        </CardHeading>
        {time && (
          <>
            <UserDetails>
              <span>by </span>
              <Link to={userId ? `/profile/${userId}` : "/profile"}>
                {username}
              </Link>
            </UserDetails>
            <Dot></Dot>
            <Time>
              <Moment fromNow>{time}</Moment>
            </Time>
          </>
        )}
      </ContentWrapper>
    </CardWrapper>
  );
};

import { CardWrapper, ContentWrapper, CardHeading, Serial } from "./style";
export const PopularCard = ({ imgUrl, heading, index, postId }) => {
  return (
    <CardWrapper to={`/posts/${postId}`}>
      <img className="img-fluid storyImg" src={imgUrl} />
      <ContentWrapper className="mt-3">
        <Serial>{index + 1}</Serial>
        <CardHeading className="title-tag">{heading}</CardHeading>
      </ContentWrapper>
    </CardWrapper>
  );
};

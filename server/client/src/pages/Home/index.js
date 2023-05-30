import { Hero } from "../../containers/Hero";
import { World } from "../../containers/World";
import { Popular } from "../../containers/Popular";
import { LifeStyle } from "../../containers/LifeStyle";
import { Latest } from "../../containers/Latest";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
  getPostsAction,
  getCategoryPostsAction,
  topCategoriesPostsAction,
} from "../../redux/actions/posts";
let limit = 8;
function Home() {
  let [page, setPage] = useState(1);
  let [newsPosts, setNewsPosts] = useState([]);
  let [sportsPosts, setSportsPosts] = useState([]);
  const [popular, setPopular] = useState([]);
  const dispatch = useDispatch();
  const { posts, loading } = useSelector((state) => state.posts);
  const { posts: categoryPosts, loading: categoryPostsLoading } = useSelector(
    (state) => state.postsByCategory
  );
  const { posts: topPosts, loading: topLoading } = useSelector(
    (state) => state.topCategoriesPosts
  );

  useEffect(() => {
    dispatch(getPostsAction(page, limit));
    dispatch(topCategoriesPostsAction());
    dispatch(getCategoryPostsAction("mountains", 1, 4));
    dispatch(getCategoryPostsAction("sports", 1, 4));
  }, [dispatch]);
  useEffect(() => {
    setNewsPosts(
      categoryPosts
        ?.filter((post) => post?.categories && post?.categories == "lakes")
        .slice(0, 4)
    );
    setSportsPosts(
      categoryPosts
        ?.filter((post) => post?.categories && post?.categories == "sports")
        .slice(0, 4)
    );
  }, [categoryPosts]);
  useEffect(() => {}, [topPosts]);

  useEffect(() => {
    const filterPosts = posts.filter((item) => item.categories == "lakes");
    setPopular(filterPosts);
    console.log(filterPosts, "posys");
  }, [posts]);
  return (
    <div className="home">
      <Hero posts={topPosts} loading={topLoading} />
      <World posts={topPosts} loading={topLoading} />
      <Popular posts={popular} loading={categoryPostsLoading} />
      <LifeStyle posts={sportsPosts} loading={categoryPostsLoading} />
      <Latest posts={posts} loading={loading} />
    </div>
  );
}

export default Home;

import decode from "jwt-decode";
export const verifyToken = (token, logout) => {
  if (token) {
    const decodedToken = decode(token);
    if (decodedToken.exp * 1000 < new Date().getTime()) logout();
  }
};

export const titleHelper = (title, chars) => {
  return title?.substring(0, chars) + "...";
};

export const handleCategoryPosts = (posts, cateforyName) => {
  const categoryPosts = [];
  posts &&
    posts.forEach((post) => {
      post.categories.forEach((cate) => {
        if (cate.toLowerCase() === cateforyName) {
          categoryPosts.push(post);
        }
      });
    });
  return categoryPosts;
};

export const topCategoryPosts = (posts) => {
  const topCategories = [];
  posts &&
    posts.forEach((post, index) => {
      post.categories.forEach((cate) => {
        switch (cate.toLowerCase()) {
          case "sports":
            topCategories.push(post);
            break;
          case "pakistan":
            topCategories.push(post);
            break;
          case "calture":
            topCategories.push(post);
            break;
          case "trending":
            topCategories.push(post);
            break;
          default:
            break;
        }
      });
    });
  return topCategories;
};

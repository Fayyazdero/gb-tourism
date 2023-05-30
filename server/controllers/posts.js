import User from "../models/authModel.js";
import Post from "../models/postModel.js";

export const getPosts = async (req, res) => {
  const { page = 1, limit = 2, category } = req.query;
  const startIndex = (Number(page) - 1) * limit;
  const total = await Post.estimatedDocumentCount({});
  const categoryCount = await Post.find({
    categories: category,
  }).countDocuments();

  try {
    let posts;
    if (category) {
      posts = await Post.find({
        categories: category,
      })
        .populate("creator")
        .sort({ _id: -1 })
        .limit(Number(limit))
        .skip(startIndex);

      res.status(200).json({
        posts,
        currentPage: Number(page),
        totalNumberOfPages: Math.ceil(total / Number(limit)),
        length: categoryCount,
      });
    } else {
      posts = await Post.find()
        .populate("creator")
        .sort({ _id: -1 })
        .limit(Number(limit))
        .skip(startIndex);
      res.status(200).json({
        posts,
        currentPage: Number(page),
        totalNumberOfPages: Math.ceil(total / Number(limit)),
        length: total,
      });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getPost = async (req, res) => {
  const { id } = req.params;

  try {
    const post = await Post.findById(id).populate("creator");
    if (!post) return res.status(404).json({ message: "No post found" });
    res.status(200).json({ post });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// export const getPostsByCategory = async (req, res) => {
//   const { category } = req.query.category;

//   try {
//     const posts = await Post.find({
//       categories: {
//         $in: [category],
//       },
//     });

//     if (posts.length <= 0)
//       return res.status(404).json({ message: "No posts found!" });

//     res.status(200).json(posts);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

export const getPostsBySearch = async (req, res) => {
  const { searchQuery } = req.query;
  const title = new RegExp(searchQuery, "i");
  let posts;
  try {
    if (title) {
      posts = await Post.find({ title }).populate("creator");
      if (!posts)
        return res.status(404).json({ message: "No search results found!" });
    } else {
      posts = await Post.find({});
    }

    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getRecomendedPosts = async (req, res) => {
  const { tags } = req.query;
  try {
    const posts = await Post.find({
      $or: [{ tags: { $in: tags.split(",") } }],
    });

    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createPost = async (req, res) => {
  const post = req.body;
  const user = await User.findById({ _id: req.userId });
  const newPost = new Post({ ...post, creator: user });
  try {
    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const updatePost = async (req, res) => {
  const { id } = req.params;
  const {
    title,
    desc,
    creator,
    selectedFile,
    tags,
    caption,
    markdown,
    publishedGlobally,
    publishedByUser,
  } = req.body;

  try {
    const existingPost = await Post.findById(id);
    if (!existingPost)
      return res.status(404).json({ message: "No such post found" });

    const updatedPost = {
      creator,
      title,
      desc,
      tags,
      selectedFile,
      publishedByUser,
      publishedGlobally,
      caption,
      markdown,
      _id: id,
    };

    await Post.findByIdAndUpdate(id, updatedPost, { new: true });

    res.status(200).json(updatedPost);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deletePost = async (req, res) => {
  const { id } = req.params;

  try {
    const existingPost = await Post.findById(id);
    if (!existingPost)
      return res
        .status(404)
        .json({ message: "No post found with the given id.." });

    await Post.findByIdAndRemove(id, { next: true });

    res.json({ message: "Post deleted successfylly!" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const likePost = async (req, res) => {
  const { id } = req.params;

  try {
    const existingPost = await Post.findById(id);
    if (!existingPost)
      return res
        .status(404)
        .json({ message: "No post found with the given id.." });
    const index = existingPost.likes.findIndex(
      (id) => id === String(req.userId)
    );

    if (index === -1) {
      existingPost.likes.push(req.userId);
    } else {
      existingPost.likes = existingPost.likes.filter((id) => id !== req.userId);
    }
    const updatePost = await Post.findByIdAndUpdate(id, existingPost, {
      new: true,
    });

    res.status(200).json(updatePost);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const commentPost = async (req, res) => {
  const { id } = req.params;
  const comment = req.body;

  try {
    const existingPost = await Post.findById(id);

    existingPost.comments.push({ comment, createdAt: Date.now() });
    const updatedPost = await Post.findByIdAndUpdate(id, existingPost, {
      new: true,
    }).populate("creator");

    res.status(200).json(updatedPost);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getUserPosts = async (req, res) => {
  const { id } = req.params;

  try {
    let posts = await Post.find({}).populate("creator").sort({ _id: -1 });
    posts = posts.filter((post) => post?.creator?._id == id);
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getLengthOfCategoryPosts = async (req, res) => {
  try {
    let categories = {
      historic_places: [],
      lakes: [],
      famous_places: [],
      adventure: [],
      education: [],
    };

    const posts = await Post.find({});

    posts.forEach((post) => {
      if (post.categories === "historic-places") {
        categories.historic_places.push(post);
      }
      if (post.categories === "lakes") {
        categories.lakes.push(post);
      }
      if (post.categories === "famous-places") {
        categories.famous_places.push(post);
      }
      if (post.categories === "adventure") {
        categories.adventure.push(post);
      }
    });

    res.status(200).json({
      historic_places: categories.historic_places.length,
      travel: categories.famous_places.length,
      health: categories.lakes.length,
      education: categories.success_stories.length,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const topCategoryPosts = async (req, res) => {
  try {
    let topCategories = [
      "historic_places",
      "lakes",
      "news",
      "adventure",
      "success_stories",
      "success_stories",
      "life_style",
      "fashion",
      "world",
    ];
    const allPosts = await Post.find({}).populate("creator");
    let posts = {
      historic_places: [],
      lakes: [],
      news: [],
      adventure: [],
      entertainment: [],
      success_stories: [],
      life_style: [],
      fashion: [],
      world: [],
    };
    topCategories.forEach((cate) => {
      posts[cate].push(
        ...allPosts
          .filter((post) => cate.split("_").join("-") == post.categories)
          .sort((a, b) => b.comments.length - a.comments.length)
      );
    });
    res.status(200).json({
      historic_places: [...posts.historic_places][0] || {},
      lakes: [...posts.lakes][0] || {},
      news: [...posts.news][0] || {},
      adventure: [...posts.adventure][0] || {},
      success_stories: [...posts.success_stories][0] || {},
      success_stories: [...posts.success_stories][0] || {},
      fashion: [...posts.fashion][0] || {},
      life_style: [...posts.life_style][0] || {},
      world: [...posts.world].splice(0, 5) || {},
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

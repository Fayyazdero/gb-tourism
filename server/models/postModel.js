import mongoose from "mongoose";

const postSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    markdown: {
      type: String,
    },
    publishedByUser: {
      type: Boolean,
      default: false,
    },
    publishedGlobally: {
      type: Boolean,
      default: false,
    },
    selectedFile: {
      type: String,
      required: false,
    },
    creator: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    name: {
      type: String,
      required: true,
    },
    caption: {
      type: String,
      required: true,
    },
    tags: {
      type: Array,
      required: false,
    },
    categories: {
      type: String,
      required: false,
    },
    likes: {
      type: [String],
      default: [],
    },
    comments: {
      type: [
        {
          user: Object,
          comment: Object,
          createdAt: String,
        },
      ],
      default: [],
    },
  },
  { timestamps: true }
);

const Post = mongoose.model("Post", postSchema);
export default Post;

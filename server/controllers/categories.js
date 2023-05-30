import Category from "../models/categoryModel.js";
import Post from "../models/postModel.js";

export const createCategory = async (req, res) => {
  const category = req.body;
  const { name } = req.body;

  try {
    const existingCategory = await Category.findOne({ name });
    if (existingCategory)
      return res
        .status(400)
        .json({ message: "Category with this name is already exists." });

    const newCategory = new Category(category);
    await newCategory.save();
    res.status(200).json(newCategory);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getCategories = async (req, res) => {
  try {
    const categories = await Category.find({});
    if (categories.length <= 0)
      return res.status(404).json({ message: "No categories found!" });

    res.status(200).json(categories);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

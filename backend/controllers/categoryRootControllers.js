const { CategoryRoot } = require("../models/categoryRootsModel");

const postCategoryRoot = (req, res) => {
  const data = { ...req.body, user_id: req.user };

  if (data.title.length === 6)
    return res.status(400).json({ error: "Title is too short" });
  CategoryRoot.create(data)
    .then((data) => res.status(200).json(data))
    .catch((err) => res.status(400).json({ error: err }));
};

const getCategoryRoots = (req, res) => {
  CategoryRoot.find({ user_id: req.user })
    .then((data) => res.status(200).json(data))
    .catch((err) => res.status(400).json({ error: err }));
};

module.exports = { postCategoryRoot, getCategoryRoots };

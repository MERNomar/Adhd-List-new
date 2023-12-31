const mongoose = require("mongoose");
const { Schema } = mongoose;

const categoryRootSchema = new Schema(
  {
    user_id: { type: String, required: true },
    title: { type: String, required: true },
    category: { type: String, required: true },
    completed: { type: Boolean, required: true },
  },
  { timestamps: true }
);

const CategoryRoot = mongoose.model("categoryRoot", categoryRootSchema);

module.exports = { CategoryRoot };

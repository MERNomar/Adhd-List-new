const mongoose = require("mongoose");
const { Schema } = mongoose;

const workDaySchema = new Schema(
  {
    user_id: { type: String, required: true },
    date: { type: String, required: true },
    time_worked: { type: String, required: true },
    commits_made: { type: Array, required: true },
  },
  { timestamps: true }
);

const WorkDay = mongoose.model("work_day", workDaySchema);

module.exports = { WorkDay };

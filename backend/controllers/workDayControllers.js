const { WorkDay } = require("../models/workDayModel");

const postWorkDay = (req, res) => {
  const data = { ...req.body, user_id: req.user };
  WorkDay.create(data)
    .then((data) => res.status(200).json(data))
    .catch((err) => res.status(400).json({ error: err }));
};

const getWorkDay = (req, res) => {
  WorkDay.find({ user_id: req.user })
    .then((data) => res.status(200).json(data))
    .catch((err) => res.status(400).json({ error: err }));
};

const putWorkDay = (req, res) => {
  const { id, ...data } = req.body;
  WorkDay.findByIdAndUpdate(id, data, { returnDocument: "after" })
    .then((data) => res.status(200).json(data))
    .catch((err) => res.status(400).json({ error: err }));
};

module.exports = { postWorkDay, getWorkDay, putWorkDay };

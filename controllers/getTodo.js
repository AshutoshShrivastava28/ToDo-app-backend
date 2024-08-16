//import the model
const Todo = require("../models/Todo");

// define controller

exports.getTodo = async (req, res) => {
  try {
    //fetch all todo items
    const todos = await Todo.find({});

    // response
    res.status(200).json({
      success: true,
      data: todos,
      message: "Entire data is fetched",
    });
  } catch (err) {
    console.error(err);
    console.log(err);
    res.status(500).json({
      success: false,
      err: err.message,
      message: "Server Error",
    });
  }
};

exports.getTodoById = async (req, res) => {
  try {
    //extract todo by id
    const id = req.params.id;
    const todo = await Todo.findById({ _id: id });

    //data for given id not found
    if (!todo) {
      return res.status(404).json({
        success: false,
        message: "Data not found",
      });
    }

    res.status(200).json({
      success: true,
      data: todo,
      message: "Data fetched successfully with id: ${id}",
    });
  } catch (err) {
    console.error(err);
    console.log(err);
    res.status(500).json({
      success: false,
      err: err.message,
      message: "Server Error",
    });
  }
};

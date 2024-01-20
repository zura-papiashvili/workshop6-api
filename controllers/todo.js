import { Todo } from "../models/todo.js";

export const getTodos = async (req, res) => {
  try {
    const todos = await Todo.find({});
    res.json({ message: "retrieved successfully", todos });
  } catch (error) {}
};

export const addTodo = async (req, res) => {
  const { title, completed } = req.body;
  try {
    const newTodo = await new Todo({ title, completed });
    await newTodo.save();
    return res.json({ message: "user saved successfully" });
  } catch (error) {}
};

export const updateTodo = async (req, res) => {
  const { id } = req.params;
  const { title, completed } = req.body;
  try {
    await Todo.findOneAndUpdate({ _id: id }, { title, completed });
    return res.json({ message: "user updated successfully" });
  } catch (error) {}
};


export const deleteTodo = async (req, res) => {
  const { id } = req.params;
  try {
    await Todo.findOneAndDelete({ _id: id });
    return res.status(200).json({ message: "user removed successfully" });
  } catch (error) {}
};

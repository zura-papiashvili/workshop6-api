import express from "express";
import { addTodo, deleteTodo, getTodos } from "../controllers/todo.js";

const router = express.Router();

router.get("/", getTodos);

router.post("/", addTodo);

router.delete("/:id", deleteTodo);

export default router;

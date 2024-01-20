import express from "express";
import { getUsers, addUser, updateUser, deleteUser, login, logout } from "../controllers/user.js";
const router = express.Router();

router.get("/", getUsers);

router.post("/", addUser);

router.put("/:id", updateUser);

router.delete("/:id", deleteUser);

router.post("/login", login);

router.post("/logout/:id", logout);

export default router;

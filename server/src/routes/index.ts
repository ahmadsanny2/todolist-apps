import { Router } from "express";
import {
    addTodo,
    getTodo,
    getTodos,
    updateTodo,
    removeTodo,
} from "../controllers/todos";
import bodyParser from "body-parser";

const router = Router();
const jsonParser = bodyParser.json();

router.get("api/todos", getTodos);

router.get("api/todo/:id", getTodo);

router.post("api/add-todo", addTodo);

router.put("api/update-todo/:id", updateTodo);

router.delete("api/remove-todo/:id", removeTodo);

export default router;

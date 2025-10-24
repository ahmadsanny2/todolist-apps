import { Todo } from './../types/todo';
import { model, Schema } from "mongoose";

const todoSchema: Schema = new Schema(
    {
        title: {
            type: String,
            required: true
        },
        status: {
            type: String,
            required: true
        }
    },
    { timestamps: true }
);

export default model<Todo>('Todo', todoSchema)
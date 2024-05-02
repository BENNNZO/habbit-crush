import { model, models, Schema } from "mongoose";

const TodoSchema = new Schema({
    title: String,
    desc: { type: String, default: "" }
})

export default models.Todo || model("Todo", TodoSchema)
import { model, models, Schema } from "mongoose";

const TodoSchema = new Schema({
    title: String,
    desc: String
})

export default models.Todo || model("Todo", TodoSchema)
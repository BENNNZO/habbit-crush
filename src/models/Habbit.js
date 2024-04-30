import { model, models, Schema } from "mongoose";

const HabbitSchema = new Schema({
    title: String,
    last_check: String,
    streak: Number,
})

export default models.User || model("Habbit", HabbitSchema)
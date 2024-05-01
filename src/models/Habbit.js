import { model, models, Schema } from "mongoose";

const HabbitSchema = new Schema({
    title: String,
    last_check: { type: Date, default: Date.now() },
    streak: { type: Number, default: 0 },
    type: Boolean
})

export default models.Habbit || model("Habbit", HabbitSchema)
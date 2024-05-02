import { model, models, Schema } from "mongoose";

const HabbitSchema = new Schema({
    title: String,
    last_check: { type: Date, default: Date.now() - (1000 * 60 * 60 * 24) },
    streak: { type: Number, default: 0 },
    coins: { type: Number, default: 0 },
    type: Boolean
})

export default models.Habbit || model("Habbit", HabbitSchema)
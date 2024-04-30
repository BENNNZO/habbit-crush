import { model, models, Schema } from "mongoose";

const UserSchema = new Schema({
    username: String,
    email: String,
    picture: String,
    coins: Number,
    habbits: [{ type: Schema.Types.ObjectId, ref: 'habbit' }]

})

export default models.User || model("User", UserSchema)
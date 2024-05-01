import { model, models, Schema } from "mongoose";

const UserSchema = new Schema({
    username: String,
    email: String,
    picture: String,
    coins: { type: Number, default: 0 },
    habbits: [{ 
        type: Schema.Types.ObjectId, 
        ref: 'Habbit' 
    }],
    todo: [{
        title: String,
        desc: String
    }]

})

export default models.User || model("User", UserSchema)
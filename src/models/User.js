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
    todos: [{
        type: Schema.Types.ObjectId, 
        ref: 'Todo'
    }]

})

export default models.User || model("User", UserSchema)
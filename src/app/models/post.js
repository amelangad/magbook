import mongoose, { Schema } from 'mongoose';
import User from '../models/user'



const postSchema = new Schema({
    authorId: String,
    title: String,
    description: String,
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User,"
    }
},
    {
        timestamps: true
    },
)


const Post = mongoose.models.Post || mongoose.model("Post", postSchema);

export default Post;

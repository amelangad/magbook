import mongoose, {Schema} from "mongoose";

const commentSchema = new Schema ({
    author: String,
    content: String,
    postId: String,
})


const Comment = mongoose.models.Comment || mongoose.model("Comment", commentSchema)


export default Comment;

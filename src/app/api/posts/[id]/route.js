import connectMongoDB from "../../../lib/connect";
import Post from '../../../models/post'
import { NextResponse } from "next/server";


export  async function PUT(request, {params}){
    const {id} = params;
    const {newTitle: title, newDescription: description, newAuthor: author} = await request.json();
    await connectMongoDB();
    await Post.findByIdAndUpdate(id, {title, description, author});
    return NextResponse.json({message:"Post updated"}, {status: 200})
}

export async function GET(request, {params}){
    const {id} = params;
    await connectMongoDB();
    const post = await Post.findOne({_id: id})
    return NextResponse.json( {post}, {status:200});
}
export async function DELETE (request) {
    const id = request.nextUrl.searchParams.get("id");
    await connectMongoDB();
    await Post.findByIdAndDelete(id);
    return NextResponse.json({message: "Post deleted"}, {status: 200})
}

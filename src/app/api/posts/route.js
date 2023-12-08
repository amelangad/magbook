import User from "@/app/models/user";
import connectMongoDB from "../../lib/connect";
import Post from '../../models/post'
import { NextResponse } from "next/server";


export async function POST (request) {
    const { title, description, author, authorId} = await request.json();
    await connectMongoDB();
    await Post.create({ title, description, author, authorId});
    return NextResponse.json({message: "Post created"}, {status: 201});
}

export async function GET () {
    await connectMongoDB();
    const posts = await Post.find();
    return NextResponse.json({posts});
}

export async function DELETE (request) {
    const id = request.nextUrl.searchParams.get("id");
    await connectMongoDB();
    await Post.findByIdAndDelete(id);
    return NextResponse.json({message: "Post deleted"}, {status: 200})
}

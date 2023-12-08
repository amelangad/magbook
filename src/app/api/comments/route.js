import connectMongoDB from '../../lib/connect'
import Comment from '../../models/comment.js'
import { NextResponse } from 'next/server'


export async function POST ( request ) {
    const { author, content, postId } = await request.json();
    await connectMongoDB();
    await Comment.create({ author, content, postId })
    return NextResponse.json ({ message: "Comment created"}, {status: 201})
}


export async function GET () {
    await connectMongoDB();
    const comments = await Comment.find();
    return NextResponse.json({comments});
}
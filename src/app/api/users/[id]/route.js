import connectMongoDB from "../../../lib/connect";
import User from '../../../models/user'
import { NextResponse } from "next/server";

export  async function PUT(request, {params}){
    const {id} = params;
    const {newName:name, newEmail:email, newAvatar:avatar} = await request.json();
    await connectMongoDB();
    await User.findByIdAndUpdate(id, {name, email, avatar});
    return NextResponse.json({message:"User updated"}, {status: 200})
}

export async function GET(request, {params}){
    const {id} = params;
    await connectMongoDB();
    const user = await User.findOne({_id: id});
    return NextResponse.json( {user}, {status:200});
}

export async function DELETE (request) {
    const id = request.nextUrl.searchParams.get("id");
    await connectMongoDB();
    await User.findByIdAndDelete(id);
    return NextResponse.json({message: "User deleted"}, {status: 200})
}
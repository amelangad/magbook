import React from 'react'
import PostById from '@/components/PostById'
import { getPost } from '@/functions/getPost'
import { getComments } from '@/functions/getComments'
import { getUser } from '@/functions/getUser'


export default async function getPostById({ params }) {
    try{
    const  { id }  = params;
    const { post }  = await getPost(id);
    const { title, description, authorId} = post;
    const { comments } = await getComments();
    const { user} = await getUser(authorId)
    
    return (
        <div className="bg-slate-50">
            <PostById postId = { id } title = { title }  authorId ={ authorId}  description = { description }  comments={comments} user={user} />
        </div>

    )
}
catch(err) {
    console.log(err)
}}

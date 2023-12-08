import React from 'react'
import ListOfPosts from '@/components/ListOfPosts'
import { getPosts } from '@/functions/getPosts'


const  getPostList = async () =>{
  try{
  const {posts} = await getPosts();

  return (
    <div className ="bg-slate-50"><ListOfPosts posts={posts}/>
    </div>
  )
}
catch (err){
  <div className ="bg-slate-50"><ListOfPosts posts={err}/>
  </div>
}}


export default getPostList;
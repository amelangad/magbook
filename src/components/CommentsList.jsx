import React from 'react'

export  default  function CommentsList({comments}) {
  return (
    <div className ="w-full min-h-[50vh] bg-orange-400 ">{comments?.map(comment => <div className='text-black bg-slate-500 w-full'>{comment}</div>)}</div>
  )
}

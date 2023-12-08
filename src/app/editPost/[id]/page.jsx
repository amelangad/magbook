import EditPostForm from '../../../components/EditPostForm'

const getPost = async (id)=> {
  try{
   const res = await fetch(`http://localhost:3000/api/posts/${id}`, {
    cache: 'no-store',
   })

   if (!res.ok){
    throw new Error ('Failed')
   }

   return res.json();
  }
  catch(err) {console.log(err)}
}

export default async function EditPost({params}) {
const { id } = params;
const { post } = await getPost(id);
 const {title, description, author} = post;
  return (
    <div className ="bg-slate-50 w-full h-full">
        <EditPostForm id={id} title={title} description={description} author={author} />
    </div>
  )
}

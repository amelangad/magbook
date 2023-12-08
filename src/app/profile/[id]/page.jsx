import UserProfile from '@/components/UserProfile'
import { getUser } from '@/functions/getUser'
import { getPosts }from '@/functions/getPosts'

export default async function getUserProfile({ params }) {
  const { id } = params;
  const { user } = await getUser(id);
  const { name, avatar, email } = user;
  const {posts } = await getPosts();
  

  return (
    <div className="w-full h-full bg-slate-50">
      <UserProfile userId={id} name={name} avatar={avatar} email={email} posts={posts}/>
    </div>
  )
}


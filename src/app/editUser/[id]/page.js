import Settings from '../../../components/Settings'
import { getUser } from '@/functions/getUser'

export default async function EditUser({params}) {
const { id } = params;
const { user } = await getUser(id);
 const {name, email, avatar} = user;

  return (
    <div className ="bg-slate-50 w-full h-full">
        <Settings id={id} name={name} email={email} avatar={avatar}/>
    </div>
  )
}

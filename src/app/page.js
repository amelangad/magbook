import Header from '../components/Header'
import UsersList from '@/components/UsersList'
import ContactForm from '@/components/ContactForm'
import { getUsers } from '@/functions/getUsers'

async function getUsersList() {
  try{
  const {users}  = await getUsers();
  return (
    <main className="w-full h-full bg-[#14173a]">
      <Header />
      <UsersList users={users} />
     <ContactForm/>
    </main>
  )
}
catch(err) {
  <main className="w-full h-full bg-[#14173a]">
  <Header />
  <UsersList />
 <ContactForm/>
</main>
}}

export default getUsersList;
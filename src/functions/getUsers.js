export async function getUsers () {
    try{
      const res = await fetch('http://localhost:3000/api/users', {
  cache: 'no-store',
  method: 'GET'
      })
    
  if(!res.ok){
      throw new Error ("error")
  }
  return await res.json();
  }
    catch(err){
      console.log('res')
    }
  
  }
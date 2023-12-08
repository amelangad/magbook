export async function getPosts () {
    try{
      const res = await fetch('http://localhost:3000/api/posts', {
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
export const getUser = async (id) => {
    try {
      const res = await fetch(`http://localhost:3000/api/users/${id}`, {
        cache: 'no-store',
      })
  
      if (!res.ok) {
        throw new Error('Failed')
      }
  
      return res.json();
    }
    catch (err) { console.log(err) }
  }
  
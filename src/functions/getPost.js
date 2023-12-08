export const getPost = async (id) => {
    try {
      const res = await fetch(`http://localhost:3000/api/posts/${id}`, {
        cache: 'no-store',
        method: 'GET'
      })
  
      if (!res.ok) {
        throw new Error('Failed')
      }
  
      return res.json();
    }
    catch (err) { console.log(err) }
  }
  
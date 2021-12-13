export  async function getPlaceholderData() {
    try {
        const result = await fetch('https://jsonplaceholder.typicode.com/posts')
        const data = await result.json();
       return data;
    } catch (error) {
      throw new Error('Error');
    }
  }

  export  async function getPlaceholderDataDetails(id) {
    try {
        const result = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        const data = await result.json();
       return data;
    } catch (error) {
      throw new Error('Error');
    }
  }
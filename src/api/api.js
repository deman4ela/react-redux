export  async function getPlaceholderData() {
    try {
        const result = await fetch('https://jsonplaceholder.typicode.com/posts')
        const data = result.json();
       return data;
    } catch (error) {
      throw new Error('Error');
    }
  }
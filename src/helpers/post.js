export const post_request = async ({url, formData}) => {
    console.log(formData)
    try {
        const response = await fetch(`https://shreshthbansal.pythonanywhere.com/api/${url}/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      console.log(response)
      return response.json()

    } catch (error) {
      console.error('Error:', error);
      throw error; // Re-throw the error to propagate it to the calling function
    }
  };
  
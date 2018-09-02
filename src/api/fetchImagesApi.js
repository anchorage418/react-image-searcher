export default function fetchImagesApi({value: subject, page}) {
  const access_token = '009dfcb184267a371f8e417b6e5aca1f570ec526ec1cbdb276014c05a19d85ba';
  const init = {
    headers: {
      'Accept-Version': 'v1',
      'Authorization': `Client-ID ${access_token}`,
    }
  };
  return fetch(`https://api.unsplash.com/search/photos?page=${page}&per_page=24&orientation=squarish&query=${subject}`, init)
  .then((response) => {
    return response.json();
  })
  .then((response) => {
    return response.results;
  })
  .catch((error) => {
    throw new Error(error); 
  });
}
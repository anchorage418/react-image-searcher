export default function fetchImagesApi(subject) {
  const access_token = '009dfcb184267a371f8e417b6e5aca1f570ec526ec1cbdb276014c05a19d85ba';
  // const secret_key = 'ce98294c699d4ffbc8ba0329049fed786caccf11e2c27a10fadeec1c308ecb78';
  const init = {
    headers: {
      'Accept-Version': 'v1',
      'Authorization': `Client-ID ${access_token}`,
      // 'Secret': secret_key
    }
  };
  return fetch(`https://api.unsplash.com/search/photos?query=${subject}`, init)
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
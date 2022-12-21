import axios from 'axios';
import Notiflix from 'notiflix';
export { axiosImg };

Notiflix.Notify.init({
  position: 'left-top',
  cssAnimationStyle: 'zoom',
  fontSize: '20px',
  // showOnlyTheLastOne: true,
});

const API_URL = 'https://pixabay.com/api/';
const KEY = '30747162-c0f899af5e8792e55f79454a6';

async function axiosImg(query, pageNumber) {
    const BASE_SEARH_PARAMS = {
    key: KEY,
    image_type: 'photo',
    orientation: 'horizontal',
    per_page: 12,
    page,
    q: query,
  };

  const response = await axios.get(API_URL, {
    params: BASE_SEARH_PARAMS,
  });

  return response.data;
}

// async function axiosImg(query, pageNumber) {
//   try {
//     return await axios.get(API_URL, {
//       params: {
//         key: KEY,
//         q: query,
//         image_type: 'photo',
//         orientation: 'horizontal',
//         safesearch: 'true',
//         page: pageNumber,
//         per_page: 40,
//       },
//     });
//   } catch (error) {
//     console.error(error);
//   }
// }

// export { axiosImg };

// async function axiosImg(query, page) {
//   //   let page = 1;
//   return await axios.get(
//     `${API_URL}?key=${KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=40`
//   );
// }

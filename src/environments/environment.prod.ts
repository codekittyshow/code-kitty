require('dotenv').config();

export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: 'AIzaSyADRQa_QudNyokpOLAaf0-h82ChyQ_koM4',
    authDomain: 'code-kitty.firebaseapp.com',
    projectId: 'code-kitty',
    storageBucket: 'code-kitty.appspot.com',
    messagingSenderId: '95976574440',
    appId: '1:95976574440:web:00e2f4f8d28978c7dfe85d',
  },
  apiURL: process.env.API_URL || 'https://code-kitty-api.herokuapp.com/api/v1',
  postAPIPath: 'post',
  categoryAPIPath: 'category',
  userAPIPath: 'user',
};

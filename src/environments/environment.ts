// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

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
  apiURL: 'https://code-kitty-api.herokuapp.com/api/v1',
  postAPIPath: 'post',
  categoryAPIPath: 'category',
  userAPIPath: 'user',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

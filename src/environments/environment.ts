// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyDTEX6K2dDjesLH1NWAybIruQR3XizA1U4",
    authDomain: "thingstodo-ddb6b.firebaseapp.com",
    databaseURL: "https://thingstodo-ddb6b.firebaseio.com",
    projectId: "thingstodo-ddb6b",
    storageBucket: "thingstodo-ddb6b.appspot.com",
    messagingSenderId: "585599997005"
  }
};
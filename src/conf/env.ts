let env = process.env.NODE_ENV;
let serverURL;
let directServerUrl;

if (env === 'development') {
  serverURL = '/api';
  directServerUrl = 'http://127.0.0.1:7080';
} else if (env === 'production') {
  serverURL = window.location.origin;
  directServerUrl = window.location.origin;
}

const Env = { serverURL: serverURL, directServerUrl };

export default Env;

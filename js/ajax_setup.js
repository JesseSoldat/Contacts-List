import $ from 'jquery';

const APP_ID = 'm5UX1mLV60kfzS5IO5tfKnXFWA8Yjj1X7FKl8tHM';
const API_KEY = 'MXgBISqr4yfUkD1mia7b9fR7JXzoivs4KStY3zfZ';

$.ajaxSetup({
  headers: {
    'X-Parse-Application-Id': APP_ID,
    'X-Parse-REST-API-Key': API_KEY
  }
});

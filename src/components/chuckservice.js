import APIRequest from '../components/chuckijokes';

export function getRandomJoke() {
    return APIRequest.get('/', {
        validateStatus: function (status) {
          return status < 500; // Resolve only if the status code is less than 500
        }
    });
}
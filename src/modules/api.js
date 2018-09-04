import axios from 'axios';

const Resource = {
  google: 'https://www.google.com',
  scores: 'http://localhost:8080/static/wolfe-scores/2018/2018.09.01.txt',
};

class Api {
  constructor($http) {
    this.$http = $http;
  }

  get wolfeScores() {
    return this.$http.get(Resource.scores, { responseType: 'text', transformResponse: undefined })
      .then(result => result.data);
  }
}

export default new Api(axios);

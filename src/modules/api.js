import axios from 'axios';

const Resource = {
  scores: '/static/wolfe-scores/2018/current.txt',
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

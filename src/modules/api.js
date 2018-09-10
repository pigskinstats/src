import Http from '@/modules/http';

class Api {
  constructor(http) {
    this._http = http;
  }

  get wolfeScores() {
    return this._http.getText('/static/wolfe-scores/2018/current.txt');
  }
}

export default new Api(Http);

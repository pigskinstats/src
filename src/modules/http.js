import axios from 'axios';

const OPTIONS = {
  text: {
    responseType: 'text',
    transformResponse: undefined
  },
  get: {
    method: 'get',
  },
};

class Http {
  async getText(url) {
    const options = Object.assign({}, OPTIONS.text, OPTIONS.get, { url: url });
    const result = await axios(options);
    return result.data;
  }
}

export default new Http();

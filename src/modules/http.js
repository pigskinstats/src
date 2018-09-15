import axios from 'axios';

const OPTIONS = {
  text: {
    responseType: 'text',
    transformResponse: undefined
  },
};

function AxiosOptions(...options) {
    return Object.assign({}, ...options);
}

class Http {
  async getText(url) {
    const options = new AxiosOptions(OPTIONS.text, { method: 'get', url: url });
    const result = await axios(options);
    return result.data;
  }

  async getJson(url) {
    const options = new AxiosOptions({ method: 'get', url: url });
    const result = await axios(options);
    return result.data;
  }
}

export default new Http();

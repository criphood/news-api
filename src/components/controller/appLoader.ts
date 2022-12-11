import Loader from './loader';

const proxy = 'https://newsapi-redirect-production.up.railway.app/';

class AppLoader extends Loader {
  constructor() {
    super(proxy, {
      apiKey: '83636afcd89044f48eebdf10b612c2e7', // получите свой ключ https://newsapi.org/
    });
  }
}

export default AppLoader;

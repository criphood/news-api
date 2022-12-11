import AppLoader from './appLoader';
import { Data, Endpoint } from '../types';

class AppController extends AppLoader {
  public getSources(callback: ((arg?: Data) => void) | undefined) {
    super.getResp(
      {
        endpoint: Endpoint.sources,
      },
      callback
    );
  }

  public getNews(e: Event, callback: ((arg?: Data) => void) | undefined) {
    let target, newsContainer;
    if (!e.target || !e.currentTarget) {
      throw new Error('There is no e.target or e.currentTarget');
    } else {
      target = <HTMLElement>e.target;
      newsContainer = <HTMLElement>e.currentTarget;
    }

    while (target !== newsContainer) {
      if (target) target = <HTMLElement>target;
      if (target?.classList.contains('source__item')) {
        const sourceId = target.getAttribute('data-source-id');
        if (newsContainer && sourceId && newsContainer.getAttribute('data-source') !== sourceId) {
          newsContainer.setAttribute('data-source', sourceId);
          super.getResp(
            {
              endpoint: Endpoint.everything,
              options: {
                sources: sourceId,
              },
            },
            callback
          );
        }
        return;
      }
      if (target) {
        target = target.parentNode;
      }
    }
  }
}

export default AppController;

import News from './news/news';
import Sources from './sources/sources';
import { Data, IDataSources } from '../types';

export class AppView {
  private news: News;
  private sources: Sources;

  constructor() {
    this.news = new News();
    this.sources = new Sources();
  }

  public drawNews(data: Data | undefined) {
    const values = data?.articles ?? [];
    if (values) this.news.draw(values);
  }

  public drawSources(data: IDataSources | undefined) {
    const values = data?.sources ?? [];
    this.sources.draw(values);
  }
}

export default AppView;

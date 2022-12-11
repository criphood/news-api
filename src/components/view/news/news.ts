import './news.css';
import { Article } from '../../types';
import { getSelector, getTemplate, getFragment } from '../../utils';

class News {
  public draw(data: [Article] | never[]) {
    const news = data.length >= 10 ? data.filter((_item: Article, idx: number) => idx < 10) : data;
    const fragment = document.createDocumentFragment();
    const newsItemTemp = getSelector(document, '#newsItemTemp');

    news.forEach((item: Article, idx: number) => {
      const newsClone = getFragment(getTemplate(newsItemTemp));

      if (idx % 2) newsClone.querySelector('.news__item')?.classList.add('alt');

      const photo = getSelector(newsClone, '.news__meta-photo'),
        author = getSelector(newsClone, '.news__meta-author'),
        date = getSelector(newsClone, '.news__meta-date'),
        title = getSelector(newsClone, '.news__description-title'),
        source = getSelector(newsClone, '.news__description-source'),
        content = getSelector(newsClone, '.news__description-content');

      photo.style.backgroundImage = `url(${item.urlToImage || 'img/news_placeholder.jpg'})`;
      author.textContent = item.author || item.source.name;
      date.textContent = item.publishedAt.slice(0, 10).split('-').reverse().join('-');
      title.textContent = item.title;
      source.textContent = item.source.name;
      content.textContent = item.description;
      newsClone.querySelector('.news__read-more a')?.setAttribute('href', item.url);

      fragment.append(newsClone);
    });

    const container = getSelector(document, '.news');
    container.innerHTML = '';
    container.appendChild(fragment);
  }
}

export default News;

import './sources.css';
import { ISource } from '../../types';
import { getSelector, getTemplate, getFragment } from '../../utils';

class Sources {
  public draw(data: [ISource] | never[]) {
    const fragment = document.createDocumentFragment();
    const sourceItemTemp = getSelector(document, '#sourceItemTemp');
    const sources = getSelector(document, '.sources');

    const rows = 10;
    let currentPage = 1;

    function displayList(res: [ISource] | never[], rowPerPage: number, page: number) {
      sources.innerHTML = '';
      page--;

      const start = rowPerPage * page;
      const end = start + rowPerPage;
      const paginatedData = res.slice(start, end);

      paginatedData.forEach((item) => {
        const sourceClone = getFragment(getTemplate(sourceItemTemp)),
          name = getSelector(sourceClone, '.source__item-name');

        name.textContent = item.name;
        sourceClone.querySelector('.source__item')?.setAttribute('data-source-id', item.id);
        fragment.append(sourceClone);
      });

      sources.append(fragment);
    }

    function displayPagination(res: [ISource] | never[], rowPerPage: number) {
      const pagination = getSelector(document, '.pagination');
      const pagesCount = Math.ceil(res.length / rowPerPage);
      const ul = document.createElement('ul');

      pagination.innerHTML = '';
      ul.classList.add('pagination__list');

      for (let i = 0; i < pagesCount; i++) {
        const li = displayPaginationBtn(i + 1);
        ul.append(li);
      }

      pagination?.append(ul);
    }

    function displayPaginationBtn(page: number) {
      const li = document.createElement('li');

      li.classList.add('pagination__item');
      li.textContent = String(page);

      if (currentPage === page) li.classList.add('pagination__item--active');

      li.addEventListener('click', () => {
        currentPage = page;
        displayList(data, rows, currentPage);

        const current = getSelector(document, '.pagination__item--active');
        current.classList.remove('pagination__item--active');
        li.classList.add('pagination__item--active');
      });

      return li;
    }

    displayList(data, rows, currentPage);
    displayPagination(data, rows);

    sources.append(fragment);
  }
}

export default Sources;

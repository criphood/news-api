enum Endpoint {
  sources = 'sources',
  everything = 'everything',
}

type Options = { [key: string]: string };

type IRes<T = string, U = boolean> = {
  json(): Promise<T>;
  readonly type: T;
  readonly bodyUsed: U;
  readonly url: T;
  readonly ok: U;
  readonly redirected: U;
  readonly status: number;
  readonly statusText: T;
};

interface ISource<T = string> {
  slice(start: number, end: number): [];
  category: T;
  country: T;
  description: T;
  id: T;
  language: T;
  name: T;
  url: T;
}

interface IDataSources {
  status: string;
  sources?: [ISource];
}

interface Data {
  status: string;
  totalResults: number;
  articles: [Info];
}

interface Info<T = string> {
  source: {
    id: T;
    name: T;
  };
  author: T;
  content: T;
  description: T;
  publishedAt: T;
  title: T;
  url: T;
  urlToImage: T;
  length: number;
}

type Article = Pick<
  Info,
  'source' | 'author' | 'content' | 'description' | 'publishedAt' | 'title' | 'url' | 'urlToImage'
>;

export { Data, IRes, Article, ISource, IDataSources, Endpoint, Options };

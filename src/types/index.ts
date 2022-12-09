interface IArticle {
  source: {
    id: string | null;
    name: string | null;
  };
  author: string | null;
  title: string | null;
  description: string | null;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string | null;
}

interface IResponse {
  status: string;
  totalResults: number;
  articles: IArticle[];
}

interface IResponseError {
  status: string;
  code: string;
  message: string;
}

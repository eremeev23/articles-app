export interface IArticle {
  createdAt: string;
  title: string;
  content: string;
  slug: string;
  image: string;
  id: string;
}

export interface IComment {
  createdAt: string;
  name: string;
  avatar: string;
  comment: string;
  id: string
}

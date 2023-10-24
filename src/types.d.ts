export interface IPostMeta {
  excerpt: string
  slug: string
  title: string
  tags: string[]
  date: string
  image: string
}

export interface IPost {
  content: string
  meta: IPostMeta
}

export type PageLinkProps = {
  title: string
  description: string
  href: string
}

interface ISEO {
  description?: string
  author?: string
  title?: string
  urlImage?: string
}

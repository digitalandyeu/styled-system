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
  meta: PostMeta
}

export type Link = {
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

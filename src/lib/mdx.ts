import fs from "fs"
import path from "path"
import { IPost } from "@/types"
import { sync } from "glob"
import matter from "gray-matter"

const POSTS_PATH = path.join(process.cwd(), "md")

export const getSlugs = (): string[] => {
  const paths = sync(`${POSTS_PATH}/*.md`)

  return paths.map((path) => {
    const parts = path.split("/")
    const fileName = parts[parts.length - 1]
    const slug = fileName.split(".")[0]
    return slug
  })
}

export const getAllPosts = () => {
  const posts = getSlugs()
    .map((slug) => getPostFromSlug(slug))
    .sort((a, b) => {
      if (a.meta.date > b.meta.date) return 1
      if (a.meta.date < b.meta.date) return -1
      return 0
    })
    .reverse()
  return posts
}

export const getPostFromSlug = (slug: string): IPost => {
  const postPath = path.join(POSTS_PATH, `${slug}.md`)
  const source = fs.readFileSync(postPath)
  const { content, data } = matter(source)

  return {
    content,
    meta: {
      slug,
      excerpt: data.excerpt ?? "",
      title: data.title ?? slug,
      tags: (data.tags ?? []).sort(),
      date: (data.date ?? new Date()).toString(),
      image: data.image ?? "",
    },
  }
}

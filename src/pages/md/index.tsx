import { GetStaticProps } from "next"
import Link from "next/link"
import MainLayout from "@/layouts/MainLayout"
import { IPost } from "@/types"
import { ChevronRightIcon } from "@heroicons/react/24/solid/index"

import { getAllPosts } from "@/lib/mdx"

Md.getLayout = (page: JSX.Element) => <MainLayout>{page}</MainLayout>

interface IMdPageIndex {
  posts: IPost[]
}

export default function Md(props: IMdPageIndex) {
  const { posts, ..._props } = props
  return (
    <ul role="list" className="divide-y divide-gray-100">
      {posts.map(({ meta, content: _content }, index) => {
        const { slug, title, date, ..._meta } = meta
        return (
          <li
            key={`post-${index}`}
            className="relative flex justify-between gap-x-6 px-4 py-5 hover:bg-gray-50 sm:px-6 lg:px-8"
          >
            <article className="flex min-w-0 gap-x-4">
              <div className="min-w-0 flex-auto">
                <p className="text-sm font-semibold leading-6 text-gray-900">
                  <Link href={`/md/${slug}`}>
                    <span className="absolute inset-x-0 -top-px bottom-0" />
                    {title}
                  </Link>
                </p>
                <p className="mt-1 flex text-xs leading-5 text-gray-500">
                  {`md/${slug}.md`}
                </p>
                <p className="mt-1 text-xs leading-5 text-gray-500">
                  Created: <time dateTime={date}>{date}</time>
                </p>
              </div>
            </article>
            <div className="flex shrink-0 items-center gap-x-4">
              <ChevronRightIcon
                className="h-5 w-5 flex-none text-gray-400"
                aria-hidden="true"
              />
            </div>
          </li>
        )
      })}
    </ul>
  )
}

export const getStaticProps = (async (context) => {
  const posts = getAllPosts()
  return {
    props: {
      posts,
    },
  }
}) satisfies GetStaticProps<IMdPageIndex>

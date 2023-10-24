import React, { ReactNode } from "react"
import ReadmeMD from "@/../README.md"
import { defaultNextReadmeLinks, GitFileLink, mdxPages } from "@/data"
import MainLayout from "@/layouts/MainLayout"
import { Link } from "@/types"

import { MDXLayout } from "@/components/MDXComponents"

Home.getLayout = (page: JSX.Element) => <MainLayout>{page}</MainLayout>

const LinksWrapper = ({
  links,
  blank = false,
}: {
  links: Link[]
  blank?: boolean
}): ReactNode => (
  <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
    {links.map(({ title, description, href }) => (
      <a
        target={blank ? "_blank" : "_self"}
        key={`page-${title}`}
        href={href}
        rel={blank ? "noopener noreferrer" : ""}
        className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
      >
        <h2 className={`mb-3 text-2xl font-semibold`}>
          {title}{" "}
          <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
            -&gt;
          </span>
        </h2>
        <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>{description}</p>
      </a>
    ))}
  </div>
)

export default function Home() {
  return (
    <>
      <GitFileLink file={"README.md"} className={"mb-2"}>
        README.md:
      </GitFileLink>

      <MDXLayout>
        <ReadmeMD />
      </MDXLayout>
      <aside>
        <h2>Next MD + MDX Features</h2>

        <LinksWrapper links={mdxPages} />

        <hr />

        <h2>Next Readme</h2>

        <LinksWrapper links={defaultNextReadmeLinks} />
      </aside>
    </>
  )
}

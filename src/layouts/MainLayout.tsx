import React, { ComponentPropsWithoutRef, ReactNode } from "react"
import { mdxPages } from "@/data"
import { Link } from "@/types"

interface IMainLayout extends ComponentPropsWithoutRef<"div"> {}

const LinksWrapper = ({
  links,
  blank = false,
}: {
  links: Link[]
  blank?: boolean
}): ReactNode => (
  <div className="mb-32 grid gap-4 text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
    {links.map(({ title, description, href }) => (
      <a
        target={blank ? "_blank" : "_self"}
        key={`page-${title}`}
        href={href}
        rel={blank ? "noopener noreferrer" : ""}
        className="group rounded-lg border border-gray-200 bg-white px-5 py-4 transition-colors hover:border-gray-300 hover:dark:border-neutral-700"
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
const MainLayout: React.FC<IMainLayout> = ({ children }) => {
  return (
    <>
      <>{children}</>
      <hr className={"my-5"} />
      <aside>
        <div
          className={
            "mb-5 rounded-xl border border-neutral-200 bg-neutral-50 px-6 py-4"
          }
        >
          <h2 className={"paragraph mb-2 block text-xs"}>
            Next MD + MDX Features
          </h2>
          <LinksWrapper links={mdxPages} />
        </div>
      </aside>
    </>
  )
}

export default MainLayout

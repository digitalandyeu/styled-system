import { mdxPages } from "@/data"
import MainLayout from "@/layouts/MainLayout"

Md.getLayout = (page: JSX.Element) => <MainLayout>{page}</MainLayout>

export default function Md() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24`}
    >
      <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
        {mdxPages.map(({ title, description, href }) => (
          <a
            target={"_self"}
            key={`page-${title}`}
            href={href}
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              {title}{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              {description}
            </p>
          </a>
        ))}
      </div>
    </main>
  )
}
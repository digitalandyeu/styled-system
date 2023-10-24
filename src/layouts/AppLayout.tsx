import React, { ComponentPropsWithoutRef } from "react"
import { Inter } from "next/font/google"
import Link from "next/link"
import { mdxPages, packageJsonData, packageName } from "@/data"
import { GithubIcon } from "lucide-react"

import ThemeToggle from "@/components/themeToggle"

const inter = Inter({ subsets: ["latin"] })
interface IAppLayout extends ComponentPropsWithoutRef<"div"> {}

const AppLayout: React.FC<IAppLayout> = ({ children }) => {
  return (
    <>
      <div className={`flex min-h-screen flex-col ${inter.className}`}>
        <section className="brand-white border-b-2 border-slate-200 dark:border-slate-600">
          <div className="container mx-auto flex flex-wrap items-center justify-between p-4">
            <div>
              <Link href={"/"} className={"font-extrabold"}>
                {packageName}
              </Link>
            </div>
            {/* menu */}
            <div className="flex items-center space-x-4">
              <div className="hidden items-center border-r-2 lg:flex">
                {mdxPages.map(({ href, description, title }, i) => (
                  <div className="mr-2" key={i}>
                    <Link
                      href={href}
                      className="text-md hover:text-primary focus:text-primary inline-block rounded-md px-4 font-medium no-underline dark:text-gray-200"
                      title={description}
                    >
                      {title}
                    </Link>
                  </div>
                ))}
              </div>
              <div className="flex items-center space-x-2">
                <ThemeToggle />
                <a
                  href={packageJsonData.repo}
                  target={"_blank"}
                  rel={"noreferrer nofollow"}
                  className={
                    "flex cursor-pointer items-center rounded-md bg-slate-100 p-2 dark:bg-slate-600"
                  }
                >
                  <GithubIcon className="h-4" />
                </a>
              </div>
            </div>
          </div>
        </section>
        <main className="grow">
          <div className={"container"}>
            <div className="py-4">
              <div className="py-5 text-base text-gray-700">{children}</div>
            </div>
          </div>
        </main>
      </div>
    </>
  )
}

export default AppLayout

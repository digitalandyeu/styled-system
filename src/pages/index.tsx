import React from "react"
import ReadmeMD from "@/../README.md"
import { GitFileLink } from "@/data"
import MainLayout from "@/layouts/MainLayout"

Home.getLayout = (page: JSX.Element) => <MainLayout>{page}</MainLayout>

export default function Home() {
  return (
    <>
      <GitFileLink file={"README.md"} className={"mb-2 text-xs text-gray-300"}>
        README.md:
      </GitFileLink>
      <ReadmeMD />
    </>
  )
}

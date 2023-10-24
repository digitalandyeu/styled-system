import React from "react"
import { publicRemoteMarkdownFile, readmeBadgesFix } from "@/data"
import MainLayout from "@/layouts/MainLayout"
import { useMDXComponents } from "@/mdx-components"
import classes from "@/theme/styles/hide-labels.pcss.module.css"
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote"
import { serialize } from "next-mdx-remote/serialize"

interface Props {
  mdxSource: MDXRemoteSerializeResult
}

export default function RemoteMdxPage({ mdxSource }: Props) {
  return (
    <>
      <div className={classes.mdIconsFix}>
        <MDXRemote components={useMDXComponents} {...mdxSource} />
      </div>
    </>
  )
}

RemoteMdxPage.getLayout = (page: JSX.Element) => <MainLayout>{page}</MainLayout>

export async function getStaticProps() {
  // MDX text - can be from a local file, database, CMS, fetch, anywhere...
  const res = await fetch(publicRemoteMarkdownFile)
  const mdxText = await res.text()
  const mdxSource = await serialize(readmeBadgesFix(mdxText))
  return { props: { mdxSource: mdxSource } }
}

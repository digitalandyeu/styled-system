import { ReactNode } from "react"
import { author, name, repository } from "@/../package.json"
import { Link } from "@/types"

export const mdxPages: Link[] = [
  {
    title: "Home",
    description: "src/pages/index.tsx",
    href: "/",
  },
  {
    title: "Mdx",
    description: "src/pages/mdx.mdx",
    href: "/mdx",
  },
  {
    title: "Mdx Layout",
    description: "src/pages/mdx-layout.mdx",
    href: "/mdx-layout",
  },
  {
    title: "Mdx Remote",
    description: "src/pages/mdx-remote.tsx",
    href: "/mdx-remote",
  },
  {
    title: "MD Files",
    description: "md/*.md",
    href: "/md",
  },
]

export const defaultNextReadmeLinks: Link[] = [
  {
    title: "Docs",
    description: "Find in-depth information about Next.js features and API.",
    href: "https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app",
  },
  {
    title: "Learn",
    description: "Learn about Next.js in an interactive course with quizzes!",
    href: "https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app",
  },
  {
    title: "Templates",
    description: "Discover and deploy boilerplate example Next.js projects.",
    href: "https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app",
  },
  {
    title: "Deploy",
    description:
      "Instantly deploy your Next.js site to a shareable URL with Vercel.",
    href: "https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app",
  },
]

const _package = {
  name,
  author,
  repo: repository.url,
}

type Package = typeof _package

export const packageJsonData: Package = _package

type PublicGitFileUrl = (file: string) => string
const publicGitFileUrl: PublicGitFileUrl = (file) =>
  repository.url + "/blob/main/" + file

export const GitFileLink = ({
  file,
  children,
  className,
}: {
  file: string
  children?: ReactNode
  className?: string
}): ReactNode => {
  return (
    <a
      href={publicGitFileUrl(file)}
      rel={"noreferrer nofollow"}
      target={"_blank"}
      className={className}
    >
      {children ?? file}
    </a>
  )
}

export const packageName = `@digitalandyeu/${packageJsonData.name}`

export const publicDomain = "sparkblog.vercel.app"
export const publicURL = "https://" + publicDomain

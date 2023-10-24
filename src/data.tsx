import { ReactNode } from "react"
import packageJson from "@/../package.json"
import { PageLinkProps } from "@/types"

const { author, name, repository, homepage } = packageJson

export const mdxPages: PageLinkProps[] = [
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

export const defaultNextReadmeLinks: PageLinkProps[] = [
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

export const publicRemoteMarkdownFile =
  "https://raw.githubusercontent.com/digitalandyeu/.github/main/profile/README.md"

export const readmeBadgesFix = (content: string) =>
  content.replace(/<!-- START BADGES -->[\s\S]*?<!-- END BADGES -->/, "")

export const publicGithubPagesUrl = homepage

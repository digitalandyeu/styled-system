import React, { ComponentPropsWithoutRef } from "react"

interface IMDXLayout extends ComponentPropsWithoutRef<"div"> {}

const MDXLayout: React.FC<IMDXLayout> = ({ children }) => {
  return <article className={"prose max-w-none"}>{children}</article>
}

export default MDXLayout

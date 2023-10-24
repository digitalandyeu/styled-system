import React, { ComponentPropsWithoutRef } from "react"

interface IHomeLayout extends ComponentPropsWithoutRef<"div"> {}

const HomeLayout: React.FC<IHomeLayout> = ({ children }) => {
  return <>{children}</>
}

export default HomeLayout

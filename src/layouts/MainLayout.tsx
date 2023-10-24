import React, { ComponentPropsWithoutRef } from "react"

interface IMainLayout extends ComponentPropsWithoutRef<"div"> {}
const MainLayout: React.FC<IMainLayout> = ({ children }) => {
  return <>{children}</>
}

export default MainLayout

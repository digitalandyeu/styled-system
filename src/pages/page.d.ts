import { ComponentType, ReactElement, ReactNode } from "react"
import { NextPage } from "next"

// eslint-disable-next-line
export type NextPageWithLayout<P = {}> = NextPage<P> & {
  getLayout?: (_page: ReactElement) => ReactNode
  layout?: ComponentType
}

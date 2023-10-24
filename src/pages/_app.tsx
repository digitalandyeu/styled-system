import "@/theme/styles/globals.css"

import type { AppProps } from "next/app"
import AppLayout from "@/layouts/AppLayout"
import { NextPageWithLayout } from "@/pages/page"
import { ThemeProvider } from "next-themes"

import Gtag from "@/components/Gtag"
import SEO from "@/components/SEO"

interface AppPropsWithLayout extends AppProps {
  Component: NextPageWithLayout
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page) => page)

  return (
    <>
      <Gtag />
      <SEO />
      <ThemeProvider enableSystem={true} attribute="class">
        <AppLayout>{getLayout(<Component {...pageProps} />)}</AppLayout>
      </ThemeProvider>
    </>
  )
}

export default MyApp

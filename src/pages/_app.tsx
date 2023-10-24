import "@/theme/styles/globals.css"

import type { AppProps } from "next/app"
import Script from "next/script"
import AppLayout from "@/layouts/AppLayout"
import { NextPageWithLayout } from "@/pages/page"
import { ThemeProvider } from "next-themes"

import SEO from "@/components/SEO"

interface AppPropsWithLayout extends AppProps {
  Component: NextPageWithLayout
}

const GID = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page) => page)

  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${GID}`} />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', '${GID}');
        `}
      </Script>
      <SEO />
      <ThemeProvider enableSystem={false} attribute="class">
        <AppLayout>{getLayout(<Component {...pageProps} />)}</AppLayout>
      </ThemeProvider>
    </>
  )
}

export default MyApp

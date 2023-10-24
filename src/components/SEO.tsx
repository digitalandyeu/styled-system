import React from "react"
import Head from "next/head"
import { packageName, publicDomain, publicURL } from "@/data"
import { ISEO } from "@/types"

const SEO: React.FC<ISEO> = ({
  description = "NextJS with MDX TailwindCSS based styled-system",
  title = `Style Guide | ${packageName}`,
  urlImage = `${publicURL}/images/preview-light.jpeg`,
}) => {
  const HTMLMetaTags = [
    {
      name: `description`,
      content: description,
    },
  ]

  const facebookMetaTags = [
    {
      property: "og:url",
      content: "https://www.skillflowhq.com/",
    },
    {
      property: "og:type",
      content: "website",
    },
    {
      property: "og:title",
      content: title,
    },
    { property: "og:description", content: description },
    {
      property: "og:image",
      content: urlImage,
    },
  ]

  const twitterMetaTags = [
    {
      name: "twitter:card",
      content: "summary_large_image",
    },
    {
      name: "twitter:image",
      content: urlImage,
    },
    {
      name: "twitter:title",
      content: title,
    },
    {
      name: "twitter:description",
      content: description,
    },
  ]

  const otherTwitter = [
    { property: "twitter:domain", content: publicDomain },
    { property: "twitter:url", content: publicURL },
  ]

  return (
    <Head>
      {/* HTML Meta Tags */}
      <title>{title}</title>
      {HTMLMetaTags.map(({ name, content }, i) => (
        <meta key={i} name={name} content={content} />
      ))}

      {/* Facebook Meta Tags */}
      {facebookMetaTags.map(({ property, content }, i) => (
        <meta key={i} property={property} content={content} />
      ))}

      {/* Twitter Meta Tags */}
      {twitterMetaTags.map(({ name, content }, i) => (
        <meta key={i} name={name} content={content} />
      ))}
      {otherTwitter.map(({ property, content }, i) => (
        <meta key={i} property={property} content={content} />
      ))}
    </Head>
  )
}

export default SEO

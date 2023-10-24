import Image, { ImageProps } from "next/image"
import type { MDXComponents } from "mdx/types"

const YouTube = ({ id }: { id: string }) => {
  return (
    <div className="relative my-10 h-0 max-w-full overflow-hidden rounded-lg pb-[56.25%]">
      <iframe
        src={`https://www.youtube.com/embed/${id}`}
        allow="autoplay; encrypted-media"
        title="Embedded YouTube video"
        className="absolute left-0 top-0 h-full w-full border-0"
      />
    </div>
  )
}

const ResponsiveImage = (props: ImageProps | any) => (
  <Image
    alt={props.alt}
    width={800}
    height={100}
    layout={"responsive"}
    {...props}
  />
)

export function useMDXComponents(components: MDXComponents): MDXComponents {
  const { img: _img, ..._components } = components

  return {
    img: ResponsiveImage,
    youtube: YouTube,
    ..._components,
  }
}

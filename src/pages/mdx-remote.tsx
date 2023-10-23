import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'

interface Props {
    mdxSource: MDXRemoteSerializeResult
}

export default function RemoteMdxPage({ mdxSource }: Props) {
    return <MDXRemote {...mdxSource} />
}

export async function getStaticProps() {
    // MDX text - can be from a local file, database, CMS, fetch, anywhere...
    const res = await fetch('https://raw.githubusercontent.com/digitalandyeu/.github/main/profile/README.md')
    const mdxText = await res.text()
    const mdxSource = await serialize(mdxText)
    return { props: { mdxSource } }
}

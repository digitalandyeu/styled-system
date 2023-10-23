export type Page = {
    name: string
    description: string
    href: string
}

export const pages: Page[] = [{
    name: 'Mdx', description: 'src/pages/mdx.mdx', href: '/mdx'
}, {
    name: 'Mdx Layout', description: 'src/pages/mdx-layout.mdx', href: '/mdx-layout'
}, {
    name: 'Mdx Remote', description: 'src/pages/mdx-remote.tsx', href: '/mdx-remote'
}]

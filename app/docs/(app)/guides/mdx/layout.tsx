import { Article } from "@/components/server/ServerComponents";

export const metadata = {
    title: "Guides - MDX in Next.js",
    description: "Learn how to integrate MDX into your Next.js application, allowing you to use JSX components within Markdown files for dynamic content.",
}

export default function MdxLayout({ page, mdx, hybrid, remote }: { page: React.ReactNode, mdx: React.ReactNode, hybrid?: React.ReactNode, remote?: React.ReactNode }) {
    return (
        <Article title="Using MDX in Next.js"
                 description={
                    <>
                        <a href="https://mdxjs.com/" target="_blank" className="text-blue-600 dark:text-blue-400 font-medium hover:opacity-100">MDX</a> is a powerful format that allows you to write <a href="https://reactjs.org/docs/jsx-in-depth.html" target="_blank" className="text-blue-600 dark:text-blue-400 font-medium hover:opacity-100">JSX</a> components directly within Markdown files. This layout demonstrates how to use MDX in a <a href="https://nextjs.org/" target="_blank" className="text-blue-600 dark:text-blue-400 font-medium hover:opacity-100">Next.js</a> application, showcasing both static and dynamic content.
                    </>
                 }
                 officialDocsLink="https://nextjs.org/docs/app/guides/mdx"
                 preview={
                        <>
                            {page}
                            {mdx}
                            {hybrid}
                            {remote}
                        </>
                 }
                architecture={null}
                codebaseLink="https://github.com/ReggieAlbiosA/nextjs-playground-beta/tree/docs-dashboard/app/docs/(app)/guides/mdx">
        </Article>    
    );
}
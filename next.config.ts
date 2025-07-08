import type { NextConfig } from "next";
import createMDX from '@next/mdx'
import rehypeKatex from 'rehype-katex';

const nextConfig: NextConfig = {
  /* config options here */
  headers: async () => {
    return [
      {
        source: '/:path*', // Apply to all paths
        headers: [
          {
            key: 'Accept-CH',
            value: 'Sec-CH-Prefers-Color-Scheme',
          },
          {
            key: 'Vary',
            value: 'Sec-CH-Prefers-Color-Scheme',
          },
          // Optional: If you w ant this hint to be sent on the very first request (critical hint)
          // This can potentially make the initial load faster for theme consistency.
          {
            key: 'Critical-CH',
            value: 'Sec-CH-Prefers-Color-Scheme',
          },
        ],
      },
    ];
  },
    // Configure `pageExtensions` to include markdown and MDX files
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  // Optionally, add any other Next.js config below

};

const withMDX = createMDX({
  extension: /\.(md|mdx)$/,
  //  options: {
  //   rehypePlugins: [[rehypeKatex, { strict: true, throwOnError: true }]],
  // },
})

export default withMDX(nextConfig)
import Articles from './articles.mdx';
import { ComponentProps, ReactNode } from 'react';
import Image from 'next/image';

// Define styled components that will override the default HTML tags
interface WrapperProps {
    children: ReactNode;
}

const overrideComponents: {
    h1: (props: ComponentProps<'h1'>) => React.ReactElement;
    h2: (props: ComponentProps<'h2'>) => React.ReactElement;
    h4: (props: ComponentProps<'h4'>) => React.ReactElement;
    p: (props: ComponentProps<'p'>) => React.ReactElement;
    a: (props: ComponentProps<'a'>) => React.ReactElement;
    img: (props: ComponentProps<'img'>) => React.ReactElement;
    article: (props: ComponentProps<'article'>) => React.ReactElement;
    wrapper: (props: WrapperProps) => React.ReactElement;
} = {
    h1: (props: ComponentProps<'h1'>) => (
        <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight text-center mb-12" {...props} />
    ),
    h2: (props: ComponentProps<'h2'>) => (
        <h2 className="text-3xl font-bold text-gray-800 mb-4 leading-tight" {...props} />
    ),
    h4: (props: ComponentProps<'h4'>) => (
        <h4 className="text-sm text-gray-500 mb-2" {...props} />
    ),
    p: (props: ComponentProps<'p'>) => (
        <p className="text-gray-600 mb-6 leading-relaxed" {...props} />
    ),
    a: (props: ComponentProps<'a'>) => (
        <a className="inline-block bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-2 px-4 rounded-md transition-colors" {...props} />
    ),
    img: (props: ComponentProps<'img'>) => (
        <Image className="w-full h-auto object-cover rounded-lg shadow-md aspect-[4/3]" src={props.src as string} alt={props.alt || ""} width={400} height={300} />
    ),
    article: (props: ComponentProps<'article'>) => (
        <article className="flex flex-col md:flex-row items-center gap-8 md:gap-16" {...props} />
    ),
    // We can use a special `wrapper` component to style the container of all articles
    wrapper: ({ children }: WrapperProps) => (
        <div className="grid grid-cols-1 gap-y-20">{children}</div>
    )
};

export default function Page() {
  return (
    <section className="bg-white font-sans">
      <div className="container mx-auto max-w-5xl px-4 py-16 sm:py-24">
        <Articles components={overrideComponents} />
      </div>
    </section>
  );
}
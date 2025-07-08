
import { RouteJSPage } from "./(_shared)/server/RouteJS";
import { Article } from "@/components/server/ServerComponents";

export default function Page() {
    return (
        // <article className="prose dark:prose-invert max-w-none">
        //     <header className="mb-8">
        //     <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
        //         Route Handlers Preview
        //     </h1>
        //     <p className="mt-4 text-lg text-mut     ed-foreground">
        //         This page demonstrates the usage of Route Handlers in Next.js. Explore the interactive examples below to see how different rendering modes and cookie management work.
        //     </p>
        //     </header>
        //     <RouteJSPage />
        // </article>
        <Article title="route.js"
                 preview={<RouteJSPage />}  
                 architecture={null}
                 >
        </Article>
    )
}

import { cookies, headers } from "next/headers";
import React from "react";
import { ArticleContainer } from "../client/ArticleContainer";
import { CustomBreadcrumb } from "../client/CustomBreadcrumb";

interface ArticleProps {
    title: string;
    description?: React.ReactNode;
    preview?: React.ReactNode;
    architecture?: React.ReactNode;
    codebaseLink?: string;
    officialDocsLink?: string;
    children?: React.ReactNode;
}

export async function Article({ title, description, preview, architecture, codebaseLink, officialDocsLink, children }: ArticleProps) {
    const layout = (await cookies()).get('view-settings');
    const pathname = (await headers()).get('x-next-pathname') || '';
    

    let view = 'Preview'; // Default view
    if (layout) {
        try {
            const settings = JSON.parse(layout.value);
            const setting = settings.find((s: { path: string; }) => s.path === pathname);
            if (setting) {
                view = setting.view;
            }
        } catch (e) {
            console.error("Error parsing view-settings cookie:", e);
        }
    }

    return (
        <article className=" mx-auto px-6 py-8">

            <CustomBreadcrumb pathname={pathname} className=" w-max mb-4" />

            <header>
                <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">{title}</h1>
                {description && <p className="mt-4 text-lg text-accent-foreground">{description}</p>}
            </header>

            <div className="mt-10 not-prose ">
                <ArticleContainer
                    initialView={view}
                    preview={preview}
                    architecture={architecture}
                    codebaseLink={codebaseLink}
                    officialDocsLink={officialDocsLink}
                />
                {children}
            </div>
        </article>
    );
}

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { Eye, Code, Ruler } from "lucide-react";
import React from "react";

interface ArticleProps {
    title: string;
    description?: React.ReactNode;
    preview?: React.ReactNode;
    architecture?: React.ReactNode;
    codebaseLink?: string; // Use the updated prop
    officialDocsLink?: string;
}

export function Article({ title, description, preview, architecture, codebaseLink, officialDocsLink }: ArticleProps) {
    
    // Define shared styles for a consistent look between triggers and the link
    const tabStyle = "py-4 px-4 flex items-center gap-x-2 dark:bg-[#18181b] data-[state=active]:shadow-none data-[state=active]:bg-[#ececec] hover:bg-input/40 border-input dark:hover:bg-[#232327] rounded-md";

    return (
        <article className="container mx-auto px-6 py-8">
            <header>
                <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">{title}</h1>
                <p className="mt-4 text-lg text-accent-foreground">{description}</p>
            </header>

            <div className="mt-10 not-prose">
                <Tabs defaultValue="preview" className="flex flex-col gap-y-2">
                    <div className="flex items-center justify-between">
                        <TabsList className="bg-transparent gap-x-4">
                            
                            {/* Preview Tab */}
                            <TabsTrigger value="preview" className={tabStyle}>
                                <Eye className="h-4 w-4" />
                                Preview
                            </TabsTrigger>

                            {/* Architecture Tab */}
                            <TabsTrigger value="architecture" className={tabStyle}>
                                <Ruler className="h-4 w-4" />
                                Architecture
                            </TabsTrigger>
                            
                            {/* Codebase Link - This is the change */}
                            <a
                                href={codebaseLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={" dark:data-[state=active]:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring dark:data-[state=active]:border-input dark:data-[state=active]:bg-input/30 text-foreground dark:text-muted-foreground inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5  border  py-4 px-4 text-sm font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50  [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 p gap-x-2 dark:bg-[#18181b] data-[state=active]:shadow-none data-[state=active]:bg-[#ececec] hover:bg-input/40 border-input dark:hover:bg-[#232327] rounded-md"} // Apply the same styles
                            >
                                <Code className="h-4 w-4" />
                                Codebase
                            </a>

                        </TabsList>

                        <a href={officialDocsLink}target="_blank" className="text-blue-600 dark:text-blue-400 font-medium hover:opacity-100">- Official Nextjs Docs</a>
                    </div>

                    {/* Content for Preview */}
                    <TabsContent value="preview">
                        {preview}
                    </TabsContent>
                    
                    {/* Content for Architecture */}
                    <TabsContent value="architecture">
                        {architecture}
                    </TabsContent>
                    
                </Tabs>
            </div>
        </article>
    );
}
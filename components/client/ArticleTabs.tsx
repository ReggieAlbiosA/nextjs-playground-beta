'use client';

import * as React from 'react';
import { Eye, Code, Ruler } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export function ArticleTabs({
  value,
  onValueChange,
  preview,
  architecture,
  codebaseLink,
  officialDocsLink,
}: {
  value: string;
  onValueChange: (value: string) => void;
  preview: React.ReactNode;
  architecture: React.ReactNode;
  codebaseLink?: string;
  officialDocsLink?: string;
}) {
  const tabStyle =
    'py-4.5 px-3 flex items-center gap-x-2 dark:bg-[#18181b] data-[state=active]:shadow-none data-[state=active]:bg-[#ececec] hover:bg-input/40 border-input dark:hover:bg-[#232327] rounded-md';

  return (
    <Tabs
      value={value}
      onValueChange={onValueChange}
      className="lg:flex flex-col gap-y-2 hidden"
    >
      <div className="flex items-center justify-between">
        <TabsList className="bg-transparent gap-x-4">
          <TabsTrigger value="Preview" className={tabStyle}>
            <Eye className="h-4 w-4" />
            Preview
          </TabsTrigger>
          <TabsTrigger value="Architecture" className={tabStyle}>
            <Ruler className="h-4 w-4" />
            Architecture
          </TabsTrigger>
          <a
            href={codebaseLink}
            target="_blank"
            rel="noopener noreferrer"
            className={" dark:data-[state=active]:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring dark:data-[state=active]:border-input dark:data-[state=active]:bg-input/30 text-foreground dark:text-muted-foreground inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5  border  py-4.5 px-3 text-sm font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50  [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 p gap-x-2 dark:bg-[#18181b] data-[state=active]:shadow-none data-[state=active]:bg-[#ececec] hover:bg-input/40 border-input dark:hover:bg-[#232327] rounded-md"}
          >
            <Code className="h-4 w-4" />
            Codebase
          </a>
        </TabsList>
        <a
          href={officialDocsLink}
          target="_blank"
          className="text-blue-600 dark:text-blue-400 font-medium hover:opacity-100"
        >
          - Official Nextjs Docs
        </a>
      </div>
      <TabsContent value="Preview" className='mt-8 not-pros  e flex flex-col gap-8 items-stretch'>{preview}</TabsContent>
      <TabsContent value="Architecture" className='mt-8 not-pros  e flex flex-col gap-8 items-stretch'>{architecture}</TabsContent>
    </Tabs>
  );
}
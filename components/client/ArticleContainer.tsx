'use client';

import * as React from 'react';
import Cookies from 'js-cookie';
import { usePathname } from 'next/navigation';
import { ArticleTabs } from './ArticleTabs';
import { ComboboxLayout } from './ComboboxLayout';

const VIEW_COOKIE_NAME = 'view-settings';

export function ArticleContainer({
  initialView,
  preview,
  architecture,
  codebaseLink,
  officialDocsLink,
}: {
  initialView: string;
  preview: React.ReactNode;
  architecture: React.ReactNode;
  codebaseLink?: string;
  officialDocsLink?: string;
}) {
  const [view, setView] = React.useState(initialView);
  const pathname = usePathname();

  const handleValueChange = (newValue: string) => {
    setView(newValue);

    const cookieValue = Cookies.get(VIEW_COOKIE_NAME);
    let settings = [];
    if (cookieValue) {
      try {
        settings = JSON.parse(cookieValue);
      } catch (e) {
        console.error('Error parsing view-settings cookie:', e);
      }
    }

    const settingIndex = settings.findIndex((s: { path: string }) => s.path === pathname);

    if (settingIndex > -1) {
      settings[settingIndex].view = newValue;
    } else {
      settings.push({ path: pathname, view: newValue });
    }

    Cookies.set(VIEW_COOKIE_NAME, JSON.stringify(settings), { path: '/' });
  };

  return (
    <>
      <ArticleTabs
        value={view}
        onValueChange={handleValueChange}
        preview={preview}
        architecture={architecture}
        codebaseLink={codebaseLink}
        officialDocsLink={officialDocsLink}
      />

      <div className="lg:hidden">
        <ComboboxLayout 
          officialDocsLink={officialDocsLink}
          value={view} 
          onValueChange={handleValueChange} 
          codebaseLink={codebaseLink} 
        />
        <div className="mt-4">
          {view === 'Preview' && preview}
          {view === 'Architecture' && architecture}
        </div>
      </div>
    </>
  );
}

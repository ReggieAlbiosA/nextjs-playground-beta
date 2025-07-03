import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Counter from "./(_shared)/client/Counter";

// * server components
import { Article } from "@/components/server/ServerComponents";

export default function TemplateJsPreviewLayout({
  children,
  template,
}: {
  children: React.ReactNode;
  template: React.ReactNode;
}) {
  return (
    <Article title="template.js" 
             preview={
              <div className="space-y-8">
                    <Card> 
                          <CardHeader>
                              <CardTitle>Layout.tsx</CardTitle>
                              <CardDescription>
                              This is a shared layout component. The counter below is part of this
                              layout and should preserve its state when you navigate between Page 1 and Page 2.
                              </CardDescription>
                          </CardHeader> 
                          <CardContent className="space-y-4">
                              <Counter />
                              <div className="flex space-x-4">
                              <Button asChild>
                                  <Link href="/docs/api-reference/file-conventions/template-js/page1">
                                  Go to Page 1
                                  </Link>  
                              </Button> 
                              <Button asChild>
                                  <Link href="/docs/api-reference/file-conventions/template-js/page2">
                                    Go to Page 2
                                  </Link>
                              </Button>
                              </div>  
                              <div className="mt-4 p-4 border rounded-lg">
                              {children}    
                              </div>
                          </CardContent>
                      </Card>
                
                      {template}    
                </div>
                      
              } 
              architecture={null} 
              codebase={null}>
  
  </Article>
    
  );
}
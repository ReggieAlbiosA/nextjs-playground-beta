import { Article } from "@/components/server/ServerComponents";

export default function ErrorJsPreviewLayout({
  clientside,
  serverside,
}: {
  children: React.ReactNode;
  clientside: React.ReactNode;
  serverside: React.ReactNode;
}) {
  return (
      <Article title="Error Handling"
              preview={
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  {clientside}
                  {serverside}
                </div>
              }
              architecture={null}
              codebaseLink="#"
              >
      </Article>
  );
}

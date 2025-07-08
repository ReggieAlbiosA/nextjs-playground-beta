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
                <div className="flex flex-col gap-y-4">
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

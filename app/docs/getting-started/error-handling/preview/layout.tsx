
export default function ErrorJsPreviewLayout({
  clientside,
  serverside,
}: {
  children: React.ReactNode;
  clientside: React.ReactNode;
  serverside: React.ReactNode;
}) {
  return (
    <div className="prose dark:prose-invert max-w-none">
      <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
        <code>Error Handing</code> Preview
      </h1>
      <p className="mt-4 text-lg text-muted-foreground">
        This page demonstrates the behavior of an <code>error.js</code> file in Next.js.
      </p>
      <div className="mt-8 not-prose">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          {clientside}
          {serverside}
        </div>
      </div>
    </div>
  );
}

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

// Simulate a database connection function that always fails by throwing an error.
// This simulates an unexpected error during server-side data fetching.
async function connectToDatabase() {
  // In a real scenario, this could be a failed connection attempt.
  // We throw an error directly to be caught by the nearest `error.js` boundary.
  throw new Error('ECONNREFUSED: Connection refused by the server. Unable to connect to the database.');
}

export default async function DataFetcher() {
  // This line will cause the component to throw an error on the server.
  // The error will be caught by the `error.tsx` file in the same directory.
  await connectToDatabase();

  // This part of the component will not be rendered because the error is thrown above.
  return (
    <Card className="bg-background/50 ">
      <CardHeader>
        <CardTitle>Server-Side Data</CardTitle>
        <CardDescription>
          This content is rendered on the server.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p>Data successfully fetched!</p>
      </CardContent>
    </Card>
  );
}

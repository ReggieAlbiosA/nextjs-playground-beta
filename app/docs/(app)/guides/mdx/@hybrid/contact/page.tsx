import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export default function ContactPage() {
 return (
 <Card className="bg-background/50 flex flex-col">
 <CardHeader className="space-y-4">
 <CardTitle className="flex items-center gap-2">
 Contact Us
 </CardTitle>
 <CardDescription className="text-muted-foreground">
 This is an example &quot;Contact&quot; page for the hybrid MDX + TSX setup. Feel free to reach out to us!
 </CardDescription>
 </CardHeader>
 <CardContent className="space-y-6 flex-1">
 <p className="text-muted-foreground">You can reach us at <a href="mailto:info@example.com" className="text-blue-500 hover:underline">info@example.com</a> or through our social media channels.</p>
 </CardContent>
 </Card>
 );
}
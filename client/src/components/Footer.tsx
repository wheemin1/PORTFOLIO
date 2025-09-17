export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="border-t bg-background">
      <div className="container max-w-4xl mx-auto px-4 py-8">
        <div className="text-center text-sm text-muted-foreground space-y-2">
          <p>Last Updated: September 2025</p>
          <p>© {currentYear} Portfolio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
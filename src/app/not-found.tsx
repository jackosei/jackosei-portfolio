
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
      <div className="text-center max-w-2xl mx-auto px-4">
        <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-red-500/10 text-red-500 rounded-full text-xs sm:text-sm font-medium mb-6">
          <span className="text-lg">404</span>
          Page Not Found
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
          Oops! This Page
          <br />
          <span className="gradient-text">Got Lost in Space.</span>
        </h1>

        <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
          The page you&apos;re looking for doesn&apos;t exist or has been moved. But don&apos;t worry—we&apos;ve got plenty of amazing things to show you!
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link 
            href="/" 
            className="inline-block bg-accent-highlight text-white px-6 py-3 rounded-lg hover:bg-accent-highlight/90 transition-colors font-medium"
          >
            Back to Home
          </Link>
          <Link 
            href="/#contact" 
            className="inline-block bg-secondary text-foreground px-6 py-3 rounded-lg hover:bg-secondary/80 transition-colors font-medium"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </div>
  );
}

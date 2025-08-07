
import Link from "next/link";
import { Home, Mail } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
      <div className="text-center max-w-2xl mx-auto px-4">
        <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-red-500/10 text-red-500 rounded-full text-xs sm:text-sm font-medium mb-6">
          <span className="text-lg">404</span>
          Page Not Found
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
          Oops! 
          <br />
          <span className="gradient-text text-2xl sm:text-3xl lg:text-4xl ">This Page Got Lost in Space.</span>
        </h1>

        <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
          The page you&apos;re looking for doesn&apos;t exist or has been moved. But don&apos;t worry, we&apos;ve got plenty of amazing things to show you!
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link 
            href="/" 
            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-gray-900 text-gray-100 hover:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group h-12 px-5"
          >
            Back to Home
            <Home className="w-4 h-4 ml-2 group-hover:scale-110 transition-transform" />
          </Link>
          <Link 
            href="/#contact" 
            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-foreground hover:text-accent-highlight transition-all duration-300 group h-12 px-5"
          >
            Get in Touch
            <Mail className="w-4 h-4 ml-2 group-hover:scale-110 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
}

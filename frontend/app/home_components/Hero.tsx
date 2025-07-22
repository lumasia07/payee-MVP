import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

interface HeroProps {
  className?: string;
}

export const Hero = ({ className }: HeroProps) => {
  return (
    <section className={`relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/20 ${className}`}>
      <div className="container mx-auto px-3 sm:px-4 lg:px-8 py-12 sm:py-16 lg:py-24 xl:py-32">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-6 lg:space-y-8 text-center lg:text-left">
            <div className="space-y-4 lg:space-y-6">
              {/* Professional Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200/30 text-blue-700 text-sm font-lexend font-medium shadow-sm">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span>Trusted by 10,000+ businesses</span>
              </div>
              
              {/* Main Heading */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-slate-900 leading-tight font-lexend">
                Accept Payments
                <span className="block bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-800 bg-clip-text text-transparent">
                  Anywhere, Anytime
                </span>
              </h1>
              
              {/* Description */}
              <p className="text-base sm:text-lg lg:text-xl text-slate-600 leading-relaxed max-w-xl font-lexend">
                Create secure payment links in seconds. No coding required. Get paid faster with our professional payment platform.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
              <Button 
                variant="default" 
                size="lg" 
                className="group font-lexend font-semibold rounded-full px-8 sm:px-10 py-4 sm:py-5 text-base sm:text-lg bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 relative overflow-hidden"
              >
                <span className="relative z-10">Start Free</span>
                <ArrowRight className="ml-3 h-5 w-7 sm:h-7 sm:w-7 transition-transform group-hover:translate-x-1 relative z-10" />
                {/* Animated background */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Button>
              
              {/* Secondary CTA - More subtle */}
              <div className="text-center lg:text-left">
                <p className="text-sm text-slate-500 font-lexend">
                  Setup in <span className="font-semibold text-blue-600">under 2 minutes</span>
                </p>
                <p className="text-xs text-slate-400 font-lexend mt-1">
                  No setup fees • No monthly charges
                </p>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="pt-6 lg:pt-8">
              <p className="text-xs sm:text-sm text-slate-500 mb-4 font-lexend text-center lg:text-left">
                Trusted by industry leaders worldwide
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start items-center gap-4 sm:gap-6 opacity-70">
                <div className="flex items-center gap-1 text-xs sm:text-sm font-semibold text-slate-600 font-lexend">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  Bank-level Security
                </div>
                <div className="flex items-center gap-1 text-xs sm:text-sm font-semibold text-slate-600 font-lexend">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  99.9% Uptime
                </div>
                <div className="flex items-center gap-1 text-xs sm:text-sm font-semibold text-slate-600 font-lexend">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  24/7 Support
                </div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative order-first lg:order-last">
            <div className="relative group">
              {/* Main Image Container */}
              <div className="relative overflow-hidden rounded-3xl shadow-2xl bg-gradient-to-br from-white to-gray-50 p-4 sm:p-6 lg:p-8">
                <Image
                  src="/payment-hero.jpg"
                  width={600}
                  height={400}
                  alt="Payee Payment Platform Dashboard"
                  className="w-full h-auto rounded-2xl transition-transform duration-500 group-hover:scale-105"
                  priority
                />
                {/* Overlay gradient */}
                <div className="absolute inset-4 sm:inset-6 lg:inset-8 bg-gradient-to-t from-blue-900/10 via-transparent to-transparent rounded-2xl pointer-events-none"></div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl shadow-lg animate-bounce opacity-80 flex items-center justify-center">
                <span className="text-white font-bold text-lg sm:text-xl">💳</span>
              </div>
              
              <div className="absolute -bottom-4 -left-4 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl shadow-lg animate-pulse opacity-80 flex items-center justify-center">
                <span className="text-white font-bold text-sm sm:text-lg">✓</span>
              </div>
              
              <div className="absolute top-1/4 -left-8 w-8 h-8 sm:w-12 sm:h-12 bg-gradient-to-br from-purple-400 to-indigo-500 rounded-full shadow-lg animate-ping opacity-60"></div>
              
              {/* Stats Cards */}
              <div className="absolute -top-8 left-4 sm:left-8 bg-white rounded-lg shadow-lg p-2 sm:p-3 border border-gray-100">
                <div className="text-xs sm:text-sm font-bold text-green-600 font-lexend">+127%</div>
                <div className="text-xs text-gray-500 font-lexend">Revenue Growth</div>
              </div>
              
              <div className="absolute -bottom-8 right-4 sm:right-8 bg-white rounded-lg shadow-lg p-2 sm:p-3 border border-gray-100">
                <div className="text-xs sm:text-sm font-bold text-blue-600 font-lexend">5.2s</div>
                <div className="text-xs text-gray-500 font-lexend">Avg. Processing</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background decorations */}
      <div className="absolute top-4 -left-4 w-72 h-72 bg-primary/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute -bottom-4 -right-4 w-72 h-72 bg-secondary/10 rounded-full blur-3xl -z-10"></div>

      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 -z-20"></div>
    </section>
  );
};
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  CreditCard, 
  Shield, 
  Zap, 
  BarChart3, 
  Globe, 
  Smartphone 
} from "lucide-react";

interface Feature {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: CreditCard,
    title: "Multiple Payment Methods",
    description: "Accept credit cards, digital wallets, bank transfers, and more. Support for 100+ payment methods worldwide."
  },
  {
    icon: Shield,
    title: "Bank-Level Security",
    description: "PCI DSS compliant with end-to-end encryption. Your customers' data is always protected with industry-leading security."
  },
  {
    icon: Zap,
    title: "Instant Payment Links",
    description: "Generate secure payment links in seconds. No technical knowledge required - just point, click, and get paid."
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description: "Track payments, monitor performance, and gain insights with our comprehensive analytics dashboard."
  },
  {
    icon: Globe,
    title: "Global Reach",
    description: "Accept payments from customers worldwide with support for 150+ currencies and local payment methods."
  },
  {
    icon: Smartphone,
    title: "Mobile Optimized",
    description: "Perfect payment experience on any device. Your customers can pay seamlessly from mobile, tablet, or desktop."
  }
];

interface FeaturesProps {
  className?: string;
}

export const Features = ({ className }: FeaturesProps) => {
  return (
    <section id="features" className={`py-16 sm:py-20 lg:py-32 bg-gradient-to-br from-slate-50 via-blue-50/20 to-indigo-50/10 ${className}`}>
      <div className="container mx-auto px-3 sm:px-4 lg:px-8">
        <div className="text-center space-y-4 lg:space-y-6 mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 font-lexend leading-tight">
            Everything You Need to
            <span className="block bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-800 bg-clip-text text-transparent">
              Get Paid Online
            </span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto font-lexend leading-relaxed">
            Our comprehensive payment platform provides all the tools you need to accept payments, 
            manage transactions, and grow your business.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white/80 backdrop-blur-sm border border-slate-200/50 hover:border-blue-200 rounded-2xl overflow-hidden"
            >
              <CardHeader className="space-y-4 p-6">
                <div className="relative">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg">
                    <feature.icon className="h-7 w-7 text-white" />
                  </div>
                  {/* Floating indicator */}
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full opacity-80 group-hover:scale-125 transition-transform duration-300"></div>
                </div>
                <CardTitle className="text-lg sm:text-xl font-bold text-slate-900 font-lexend group-hover:text-blue-700 transition-colors duration-300">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="px-6 pb-6">
                <CardDescription className="text-slate-600 leading-relaxed font-lexend text-sm sm:text-base">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
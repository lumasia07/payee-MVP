import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Link, Send, CheckCircle } from "lucide-react";

interface Step {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  stepNumber: number;
}

const steps: Step[] = [
  {
    stepNumber: 1,
    icon: Link,
    title: "Create Payment Link",
    description: "Set up your payment link in seconds with our intuitive interface. Add product details, set amounts, and customize your payment page."
  },
  {
    stepNumber: 2,
    icon: Send,
    title: "Share with Customers",
    description: "Share your secure payment link via email, SMS, social media, or embed it on your website. Your customers can pay instantly."
  },
  {
    stepNumber: 3,
    icon: CheckCircle,
    title: "Get Paid Fast",
    description: "Receive payments instantly with real-time notifications. Funds are automatically transferred to your account within 24 hours."
  }
];

interface HowItWorksProps {
  className?: string;
}

export const HowItWorks = ({ className }: HowItWorksProps) => {
  return (
    <section id="how-it-works" className={`py-16 sm:py-20 lg:py-32 bg-white ${className}`}>
      <div className="container mx-auto px-3 sm:px-4 lg:px-8">
        <div className="text-center space-y-4 lg:space-y-6 mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 font-lexend leading-tight">
            Start Accepting Payments in
            <span className="block bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-800 bg-clip-text text-transparent">
              3 Simple Steps
            </span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto font-lexend leading-relaxed">
            Getting started with Payee is incredibly simple. No technical expertise required - 
            just follow these three easy steps and start getting paid today.
          </p>
        </div>

        <div className="relative">
          {/* Connection Lines */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-blue-200 to-transparent transform -translate-y-1/2 z-0"></div>
          
          <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white/90 backdrop-blur-sm border border-slate-200/50 hover:border-blue-200 rounded-2xl overflow-hidden">
                  <CardContent className="p-6 lg:p-8 text-center space-y-6">
                    {/* Step Number */}
                    <div className="relative">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg">
                        <span className="text-2xl font-bold text-white font-lexend">
                          {step.stepNumber}
                        </span>
                      </div>
                      {index < steps.length - 1 && (
                        <ArrowRight className="hidden lg:block absolute top-1/2 -right-8 transform -translate-y-1/2 h-6 w-6 text-blue-400" />
                      )}
                    </div>

                    {/* Icon */}
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-105 transition-transform duration-300">
                      <step.icon className="h-7 w-7 text-blue-600" />
                    </div>

                    {/* Content */}
                    <div className="space-y-3">
                      <h3 className="text-lg sm:text-xl font-bold text-slate-900 font-lexend group-hover:text-blue-700 transition-colors duration-300">
                        {step.title}
                      </h3>
                      <p className="text-slate-600 leading-relaxed font-lexend text-sm sm:text-base">
                        {step.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12 lg:mt-16 space-y-4">
          <Button 
            variant="default" 
            size="lg" 
            className="group font-lexend font-semibold rounded-full px-8 sm:px-10 py-4 sm:py-5 text-base sm:text-lg bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
          >
            Start Free Today
            <ArrowRight className="ml-3 h-5 w-5 sm:h-6 sm:w-6 transition-transform group-hover:translate-x-1" />
          </Button>
          <p className="text-sm text-slate-500 font-lexend">
            No credit card required
          </p>
        </div>
      </div>
    </section>
  );
};
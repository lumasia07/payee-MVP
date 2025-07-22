import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Twitter, Linkedin, Github, Mail } from "lucide-react";

interface FooterProps {
  className?: string;
}

export const Footer = ({ className }: FooterProps) => {
  const footerLinks = {
    product: [
      { label: "Features", href: "#features" },
      { label: "Pricing", href: "#pricing" },
      { label: "API Documentation", href: "#" },
      { label: "Integrations", href: "#" },
    ],
    company: [
      { label: "About Us", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Press", href: "#" },
      { label: "Contact", href: "#" },
    ],
    support: [
      { label: "Help Center", href: "#" },
      { label: "Community", href: "#" },
      { label: "Security", href: "#" },
      { label: "Status", href: "#" },
    ],
    legal: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
      { label: "Cookie Policy", href: "#" },
      { label: "Compliance", href: "#" },
    ],
  };

  const socialLinks = [
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Mail, href: "#", label: "Email" },
  ];

  return (
    <footer className={`bg-slate-900 border-t border-slate-800 ${className}`}>
      <div className="container mx-auto px-3 sm:px-4 lg:px-8 py-12 lg:py-16">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-6 gap-8 lg:gap-12 mb-8 lg:mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center space-x-3">
              <div className="relative w-10 h-10">
                {/* Creative layered logo */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400 via-blue-500 to-indigo-600 rounded-xl shadow-lg transform rotate-6"></div>
                <div className="absolute inset-0 bg-gradient-to-tr from-cyan-300 to-blue-400 rounded-xl shadow-md transform -rotate-3"></div>
                <div className="relative w-full h-full bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center shadow-xl">
                  <span className="text-white font-bold text-lg font-lexend">P</span>
                </div>
                {/* Floating elements */}
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-yellow-400 rounded-full opacity-80"></div>
                <div className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-green-400 rounded-full opacity-70"></div>
              </div>
              <span className="text-2xl font-bold text-white font-lexend tracking-tight">Payee</span>
            </div>
            <p className="text-slate-300 leading-relaxed max-w-sm font-lexend">
              The modern payment platform that helps businesses of all sizes accept payments online. 
              Secure, fast, and trusted by thousands worldwide.
            </p>
            
            {/* Newsletter Signup */}
            <div className="space-y-4">
              <h4 className="font-semibold text-white font-lexend">Stay Updated</h4>
              <div className="flex gap-2">
                <Input 
                  placeholder="Enter your email" 
                  className="flex-1 bg-slate-800 border-slate-700 text-white placeholder:text-slate-400 focus:border-blue-500 font-lexend"
                  type="email"
                />
                <Button 
                  variant="default" 
                  size="sm"
                  className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 font-lexend font-medium"
                >
                  Subscribe
                </Button>
              </div>
              <p className="text-xs text-slate-400 font-lexend">
                Get the latest updates and payment insights.
              </p>
            </div>
          </div>

          {/* Links Sections */}
          <div className="lg:col-span-4 grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            <div>
              <h4 className="font-semibold text-white mb-4 font-lexend">Product</h4>
              <ul className="space-y-3">
                {footerLinks.product.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-slate-300 hover:text-blue-400 transition-colors duration-200 font-lexend text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4 font-lexend">Company</h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-slate-300 hover:text-blue-400 transition-colors duration-200 font-lexend text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4 font-lexend">Support</h4>
              <ul className="space-y-3">
                {footerLinks.support.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-slate-300 hover:text-blue-400 transition-colors duration-200 font-lexend text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4 font-lexend">Legal</h4>
              <ul className="space-y-3">
                {footerLinks.legal.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-slate-300 hover:text-blue-400 transition-colors duration-200 font-lexend text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-6 lg:pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-400 text-sm font-lexend">
            © 2025 Payee. All rights reserved.
          </p>
          
          <div className="flex items-center space-x-5">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="text-slate-400 hover:text-blue-400 transition-colors duration-200 hover:scale-110 transform"
                aria-label={social.label}
              >
                <social.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
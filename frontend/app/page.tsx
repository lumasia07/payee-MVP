import { Header } from "./home_components/Header";
import { Hero } from "./home_components/Hero";
import { Features } from "./home_components/Features";
import { HowItWorks } from "./home_components/HowItWorks";
import { Footer } from "./home_components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
      </main>
      <Footer />
    </div>
  );
}

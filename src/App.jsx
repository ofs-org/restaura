import { About } from "./components/About";
import ContactSection from "./components/ContactSection";
import { Dishes } from "./components/Dishes";
import Expertise from "./components/Expertise";
import Footer from "./components/Footer";
import { HeroSection } from "./components/HeroSection";
import Mission from "./components/Mission";
import { NavBar } from "./components/NavBar";
import Review from "./components/Review";
export function App() {
  return (
    <main className="overflow-hidden text-neutral-200 antialiased">
      <HeroSection />
      <NavBar />
      <Dishes />
      <About />
      <Mission />
      <Expertise />
      <Review />
      <ContactSection />
      <Footer />
    </main>
  );
}

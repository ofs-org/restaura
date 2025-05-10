import { About } from "./components/About";
import { Dishes } from "./components/Dishes";
import { HeroSection } from "./components/HeroSection";
import { NavBar } from "./components/NavBar";
export function App() {
  return (
    <main className="antialiased overflow-hidden text-neutral-200">
      <HeroSection />
      <NavBar />
      <Dishes />
      <About />
    </main>
  );
}

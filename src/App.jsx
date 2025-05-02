import { HeroSection } from "./components/HeroSection";
import { NavBar } from "./components/NavBar";
export function App() {
  return (
    <main className="antialiased overflow-hidden text-neutral-200">
      <HeroSection />
      <NavBar />
    </main>
  );
}

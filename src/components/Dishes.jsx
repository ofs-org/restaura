import { DISHES } from "../utils/data";
import { DishCard } from "./DishCard";

export function Dishes() {
  return (
    <>
      <section className="container mx-auto py-16" id="dishes">
        <h2 className="lg:text-4xl mb-8 text-3xl text-center tracking-tighter">
          Our Dishes
        </h2>
        <div className="gap-8 grid grid-cols-1 lg:grid-cols-5 md:grid-cols-4">
          {DISHES.map((project, index) => (
            <DishCard key={index} project={project} />
          ))}
        </div>
      </section>
    </>
  );
}

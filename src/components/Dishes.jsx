import { DISHES } from "../utils/data";
import { DishCard } from "./DishCard";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
export function Dishes() {
  return (
    <>
      <section className="container mx-auto py-16" id="dishes">
        <h2 className="mb-8 text-center text-3xl tracking-tighter lg:text-4xl">
          Our Dishes
        </h2>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 1 }}
          className="grid grid-cols-1 gap-8 md:grid-cols-4 lg:grid-cols-5"
        >
          {DISHES.map((project, index) => (
            <DishCard key={index} project={project} />
          ))}
        </motion.div>
      </section>
    </>
  );
}

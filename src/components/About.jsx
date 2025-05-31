import about from "../assets/about.jpeg";
import { ABOUT } from "../utils/data";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
export function About() {
  return (
    <>
      <section className="container mx-auto mb-8" id="about">
        <h2 className="mb-8 text-center text-3xl tracking-tighter lg:text-4xl">
          About Us
        </h2>
        <div className="flex flex-wrap">
          <div className="w-full p-4 lg:w-1/2">
            <img className="rounded-3xl lg:-rotate-3" src={about} alt="" />
          </div>
          <div className="w-full px-2 lg:w-1/2">
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl tracking-tighter lg:text-6xl"
            >
              {ABOUT.header}
            </motion.h2>
            <motion.span
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-2 mb-6 inline-block h-1 w-28 -rotate-3 rounded-sm bg-linear-to-r from-amber-800 from-20% to-amber-300 lg:w-46"
            ></motion.span>

            <motion.p
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="m-8 text-2xl leading-relaxed tracking-tight text-balance text-white/70 lg:max-w-xl"
            >
              {ABOUT.content}
            </motion.p>
          </div>
        </div>
      </section>
    </>
  );
}

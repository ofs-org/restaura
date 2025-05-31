import { REVIEW } from "../utils/data";
import xaviour from "../assets/xaviour.jpeg";
import customer1 from "../assets/customer1.jpeg";
import customer2 from "../assets/customer2.jpeg";
import customer3 from "../assets/customer3.jpeg";
import customer4 from "../assets/customer4.jpeg";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.8,
    },
  },
};

const ItemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Review = () => {
  return (
    <section id="review" className="container mx-auto mt-12">
      <motion.div
        className="flex flex-col"
        initial="hidden"
        whileInView="show"
        variants={containerVariants}
        viewport={{ once: true }}
      >
        <motion.p
          variants={ItemVariants}
          className="mg:mt-40 lg:text[3.5rem] mb-10 text-3xl leading-normal font-light tracking-tighter lg:mx-40"
        >
          .{REVIEW.content}
        </motion.p>
        <motion.div
          variants={ItemVariants}
          className="flex items-center justify-center gap-6"
        >
          <img
            className="rounded-full"
            src={xaviour}
            width={80}
            height={80}
            alt={REVIEW.name}
          />
          <div className="tracking-tighter">
            <h6>{REVIEW.name}</h6>
            <p className="text-sm text-neutral-500">{REVIEW.profession}</p>
          </div>
        </motion.div>
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="show"
        variants={ItemVariants}
        viewport={{ once: true }}
        className="mt-14 flex flex-col items-center justify-center gap-2 md:flex-row"
      >
        {[customer1, customer2, customer3, customer4].map((customer, index) => (
          <motion.img
            variants={ItemVariants}
            key={index}
            src={customer}
            alt="customer"
            className="h-[300px] w-[200px] rounded-tl-3xl rounded-br-3xl object-cover"
          />
        ))}{" "}
      </motion.div>
    </section>
  );
};

export default Review;

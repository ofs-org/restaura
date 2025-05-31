import { CUSINES } from "../utils/data";

const Expertise = () => {
  return (
    <section id="expertise">
      <h2 className="my-8 text-center text-3xl tracking-tighter">
        0ur Expertise
      </h2>
      <div className="container mx-auto px-4"></div>
      {CUSINES.map((cusine, index) => (
        <div
          key={index}
          className="flex items-center border-b-4 border-dotted border-neutral-700/40 py-2"
        >
          <div className="flex-shrink-0 pr-8 text-2xl">{cusine.number}</div>
          <div className="w-1/3 flex-shrink-0">
            <img
              src={cusine.image}
              alt={cusine.title}
              className="h-auto rounded-3xl"
            />
          </div>
          <div className="pl-8">
            <h3 className="text-2xl tracking-tighter text-yellow-600 uppercase">
              {cusine.title}
            </h3>
            <p className="mt-4 text-lg tracking-tighter">
              {cusine.description}
            </p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Expertise;

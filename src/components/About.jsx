import about from "../assets/about.jpeg";
import { ABOUT } from "../utils/data";
export function About() {
  return (
    <>
      <section className="container mb-8 mx-auto" id="about">
        <h2 className="lg:text-4xl mb-8 text-3xl text-center tracking-tighter">
          About Us
        </h2>
        <div className="flex flex-wrap">
          <div className="lg:w-1/2 p-4 w-full">
            <img className="lg:-rotate-3 rounded-3xl" src={about} alt="" />
          </div>
          <div className="lg:w-1/2 px-2 w-full">
            <h2 className="lg:text-6xl text-4xl tracking-tighter">
              {ABOUT.header}
            </h2>
            <span className="-rotate-3 bg-linear-to-r from-20% from-amber-800 h-1 inline-block lg:w-46 mb-6 mt-2 rounded-sm to-amber-300 w-28"></span>

            <p className="leading-relaxed lg:max-w-xl m-8 text-2xl text-balance text-white/70 tracking-tight">
              {ABOUT.content}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

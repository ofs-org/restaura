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
            <span className="bg-amber-300/80 h-1.5 inline-block lg:-rotate-3 mb-8 mt-1 w-36"></span>

            <p className="leading-relaxed lg:max-w-xl m-8 text-2xl tracking-tight">
              {ABOUT.content}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

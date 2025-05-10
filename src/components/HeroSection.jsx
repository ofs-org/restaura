import hero from "../assets/hero.jpeg";
import video from "../assets/hero.mp4";
import logo from "../assets/logo.png";

export function HeroSection() {
  return (
    <section
      className="flex h-screen items-center justify-center relative w-screen"
      id="intro"
    >
      <div className="-z-20 absolute h-full inset-0 overflow-hidden w-full">
        <video
          className="h-full object-cover w-full"
          autoPlay
          loop
          playsInline
          poster={hero}
          muted
          src={video}
        ></video>
      </div>
      <div className="-z-10 absolute bg-gradient-to-b from-70% from-transparent inset-0 to-black"></div>
      <div className="flex flex-col h-screen justify-end pb-20 relative z-20">
        <img className="p-4 w-full" src={logo} alt="Logo Restaura" />
        <p className="p-4 text-2xl text-white/70 tracking-wider">Paris</p>
      </div>
      <div></div>
    </section>
  );
}

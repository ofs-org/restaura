import hero from "../assets/hero.jpeg";
import video from "../assets/hero.mp4";
import logo from "../assets/logo.png";
// eslint-disable-next-line
import { motion } from "framer-motion";
export function HeroSection() {
  return (
    <section
      className="relative flex h-screen w-screen items-center justify-center"
      id="intro"
    >
      <div className="absolute inset-0 -z-20 h-full w-full overflow-hidden">
        <video
          className="h-full w-full object-cover"
          autoPlay
          loop
          playsInline
          poster={hero}
          muted
          src={video}
        ></video>
      </div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent from-70% to-black"></div>
      <div className="relative z-20 flex h-screen flex-col justify-end pb-20">
        <motion.img
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.5 }}
          className="w-full p-4"
          src={logo}
          alt="Logo Restaura"
        />
        <p className="p-4 text-2xl tracking-wider text-white/70">Paris</p>
      </div>
      <div></div>
    </section>
  );
}

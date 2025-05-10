import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { FaBars } from "react-icons/fa6";
import logo from "../assets/logo.png";
import { LINKS } from "../utils/data.js";

export function NavBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toogleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleScroll = (event, targetId) => {
    event.preventDefault();
    const targetElement = document.getElementById(targetId);
    const offsetTop = targetElement.offsetTop - 80;
    window.scrollTo({
      top: offsetTop,
      behavior: "smooth",
    });
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="fixed flex flex-col items-center justify-center top-4 w-full z-50">
      <div className="backdrop-blur-lg flex items-center justify-between lg:m-2 lg:rounded-full lg:shadow-lg lg:w-[50rem] overflow-y-hidden p-4 w-full">
        <a href="#intro">
          {" "}
          <img src={logo} alt=" logo Restaura" width={80} height={80} />
        </a>

        <div className="hidden lg:flex space-x-6">
          {LINKS.map((link, index) => (
            <a
              className={`text-sm ${index !== 0 ? "border-l-2 border-neutral-300/20 pl-2" : ""} hover:opacity-50`}
              key={index}
              href={`#${link.targetId}`}
              onClick={(e) => handleScroll(e, link.targetId)}
            >
              {link.text}
            </a>
          ))}
        </div>

        <div className="lg:hidden">
          <button onClick={toogleMobileMenu}>
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="backdrop-blur-lg lg:hidden w-full">
          {LINKS.map((link, index) => (
            <a
              className="block p-4 tracking-tighter uppercase"
              key={index}
              href={`#${link.targetId}`}
              onClick={(e) => handleScroll(e, link.targetId)}
            >
              {link.text}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}

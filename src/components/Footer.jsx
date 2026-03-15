import { SOCIAL_MEDIA_LINKS } from "../utils/data";

const Footer = () => {
  return (
    <div className="mt-20 mb-8">
      <div className="flex items-center justify-center gap-8">
        {SOCIAL_MEDIA_LINKS.map((link, index) => {
          const Icon = link.icon;
          return (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon fontSize={30} className="hover-opacity-80" />
            </a>
          );
        })}
      </div>
      <p className="mt-8 text-center tracking-tighter text-neutral-500">
        <a
          href="https://www.linkedin.com/in/oliveira-emmanuel/"
          target="_blank"
          rel="noopener noreferrer"
        >
          &copy;Emmanuel Oliveira | OFS - 2026
        </a>
      </p>
    </div>
  );
};

export default Footer;

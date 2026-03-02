import dish1 from "../assets/dish1.jpeg";
import dish10 from "../assets/dish10.jpeg";
import dish2 from "../assets/dish2.jpeg";
import dish3 from "../assets/dish3.jpeg";
import dish4 from "../assets/dish4.jpeg";
import dish5 from "../assets/dish5.jpeg";
import dish6 from "../assets/dish6.jpeg";
import dish7 from "../assets/dish7.jpeg";
import dish8 from "../assets/dish8.jpeg";
import dish9 from "../assets/dish9.jpeg";

import indian from "../assets/indian.jpeg";
import italian from "../assets/italian.jpeg";
import japanese from "../assets/japanese.jpeg";

import { FaXTwitter, FaFacebook, FaInstagram } from "react-icons/fa6";

export const LINKS = [
  { text: "Pratos", targetId: "dishes" },
  { text: "Sobre", targetId: "about" },
  { text: "Missão", targetId: "mission" },
  { text: "Especialização", targetId: "expertise" },
  { text: "Análise", targetId: "review" },
  { text: "Contato", targetId: "contact" },
];

export const DISHES = [
  {
    image: dish1,
    title: "Spaghetti Carbonara",
    description: "Massa cremosa com bacon e queijo",
  },
  {
    image: dish2,
    title: "Chicken Tikka Masala",
    description: "Curry indiano com frango macio em molho picante",
  },
  {
    image: dish3,
    title: "Caprese Salad",
    description:
      "Tomates frescos, muçarela e manjericão com redução de vinagre balsâmico",
  },
  {
    image: dish4,
    title: "Sushi Roll",
    description: "Frutos do mar e legumes variados enrolados em alga e arroz",
  },
  {
    image: dish5,
    title: "Oatmeal",
    description:
      "Mingau de aveia cremoso com laranja, mirtilos e chocolate amargo — uma opção nutritiva e equilibrada para o café da manhã.",
  },
  {
    image: dish6,
    title: "Greek Salad",
    description: "Alface crocante, azeitonas, queijo feta e molho agridoce",
  },
  {
    image: dish7,
    title: "Pad Thai",
    description: "Macarrão de arroz salteado com camarão, tofu e amendoim",
  },
  {
    image: dish8,
    title: "Peking Duck",
    description: "Pato crocante servido com panquecas, pepino e molho hoisin",
  },
  {
    image: dish9,
    title: "Beef Wellington",
    description:
      "Filé de carne macio envolto em massa folhada com cogumelos e ervas",
  },
  {
    image: dish10,
    title: "Ramen",
    description:
      "Ramen com macarrão em caldo quente, servido com ovo cozido, cebolinha e pimenta fatiada.",
  },
];

export const ABOUT = {
  header: "Nós Adoramos cozinhar",
  content:
    "No Restaura, acreditamos que a boa comida vai além do sabor; ela conta uma história de dedicação e criatividade. Das criações exclusivas do nosso chef ao nosso serviço atencioso, cada detalhe é cuidadosamente pensado para garantir que sua visita seja simplesmente excepcional. Seja saboreando nosso renomado Tikka Kebab ou explorando nosso cardápio diversificado inspirado em sabores do mundo todo, cada prato é uma celebração de sabor e inovação. Junte-se a nós em uma jornada culinária onde cada mordida deixa uma impressão duradoura. Experimente o Restaura — onde cada refeição é uma obra-prima.",
};

export const MISSION =
  "Em nosso restaurante, nossa missão é criar experiências gastronômicas deliciosas e memoráveis.";

export const CUSINES = [
  {
    number: "01.",
    image: italian,
    title: "Italian",
    description:
      "Descubra os sabores da Itália com a nossa requintada cozinha italiana, que apresenta receitas tradicionais e pratos contemporâneos.",
  },
  {
    number: "02.",
    image: japanese,
    title: "Japanese",
    description:
      "Delicie-se com a arte da excelência culinária japonesa, que oferece uma fusão de sabores clássicos e modernos.",
  },
  {
    number: "03.",
    image: indian,
    title: "Indian",
    description:
      "Delicie-se com os sabores ricos e diversos da Índia, com um menu que celebra a herança culinária do país.",
  },
];

export const REVIEW = {
  name: "Xaviour Fernando",
  profession: "Food Critic",
  content:
    " “Como crítico gastronômico experiente, minhas expectativas são sempre altas ao entrar em um novo restaurante. O Restaura, com sua fachada discreta e interior elegantemente decorado, prometia uma experiência culinária única desde o momento em que entrei. E devo dizer que superou minhas expectativas.” ",
};

export const CONTACT = [
  { key: "address", value: "Address: 123 Main Street, Paris, France, 345678" },
  { key: "phone", value: "Phone: 123-456-7890" },
  { key: "email", value: "Email: contact@restaurant.com" },
];

export const SOCIAL_MEDIA_LINKS = [
  {
    href: "https://x.com/",
    icon: FaFacebook,
  },

  {
    href: "https://x.com/",
    icon: FaInstagram,
  },
  {
    href: "https://x.com/",
    icon: FaXTwitter,
  },
];

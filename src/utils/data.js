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

import { FaFacebook, FaInstagram, FaXTwitter } from "react-icons/fa6";

export const LINKS = [
  { text: "Pratos", targetId: "dishes" },
  { text: "Sobre", targetId: "about" },
  { text: "Missão", targetId: "mission" },
  { text: "Especialidade", targetId: "expertise" },
  { text: "Avaliações", targetId: "review" },
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

    description: "Curry indiano com frango macio em um molho bem temperado",

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
    description:
      "Seleção de frutos do mar e vegetais enrolados em alga e arroz",
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

    description: "Alface crocante, azeitonas, queijo feta e molho cítrico",
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

      "Filé de carne macia envolto em massa folhada com cogumelos e ervas",

  },
  {
    image: dish10,
    title: "Ramen",
    description:

      "Sobremesa italiana com camadas de biscoitos embebidos em café e mascarpone",

  },
];

export const ABOUT = {

  header: "Nós adoramos cozinhar!",
  content:
    "No Restaura, acreditamos que uma ótima comida vai além do sabor: ela conta uma história de dedicação e criatividade. Das criações exclusivas do nosso chef ao nosso atendimento atencioso, cada detalhe é pensado para tornar sua visita verdadeiramente especial. Seja saboreando o nosso famoso Tikka Kebab ou explorando nosso cardápio diverso, inspirado em sabores do mundo todo, cada prato é uma celebração de sabor e inovação. Junte-se a nós em uma jornada gastronômica onde cada garfada deixa uma lembrança marcante. Viva o Restaura — onde cada refeição é uma obra-prima.",

};

export const MISSION =
  "Em nosso restaurante, nossa missão é criar experiências gastronômicas deliciosas e memoráveis.";

export const CUSINES = [
  {
    number: "01.",
    image: italian,
    title: "Italian",
    description:

      "Experimente os sabores da Itália com nossa requintada culinária italiana, reunindo receitas tradicionais e releituras contemporâneas.",

  },
  {
    number: "02.",
    image: japanese,
    title: "Japanese",
    description:
      "Encante-se com a arte da culinária japonesa, oferecendo uma fusão de sabores clássicos e modernos.",
  },
  {
    number: "03.",
    image: indian,
    title: "Indian",
    description:

      "Desfrute dos sabores ricos e diversos da Índia, com um menu que celebra a herança culinária do país.",

  },
];

export const REVIEW = {
  name: "Xaviour Fernando",
  profession: "Food Critic",
  content:

    "Como um crítico gastronômico experiente, minhas expectativas são sempre altas ao entrar em um novo restaurante. O Restaura, com seu exterior discreto e interior elegantemente projetado, prometia uma experiência culinária única desde o momento em que atravessei a porta. E devo dizer: superou todas as minhas expectativas.",

};

export const CONTACT = [
  {
    key: "address",
    value: "Endereço : 123 Main Street, Paris, France, 345678",
  },
  { key: "phone", value: "Telefone: 123-456-7890" },
  { key: "email", value: "E-mail: contact@restaurant.com" },
];

export const SOCIAL_MEDIA_LINKS = [
  {
    href: "#",
    icon: FaFacebook,
  },

  {
    href: "#",
    icon: FaInstagram,
  },
  {
    href: "#",
    icon: FaXTwitter,
  },
];

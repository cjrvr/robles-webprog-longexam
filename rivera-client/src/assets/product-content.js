import blush from "./img/blush.jpeg";
import foundation from "./img/foundation.jpeg";
import lipoil from "./img/lipoil.jpeg";
import mascara from "./img/mascara.jpeg";
import palette from "./img/palette.jpeg";
import primer from "./img/primer.jpeg";
import rouge from "./img/rouge.jpeg";
import set from "./img/set.jpeg";

const products = [
  {
    name: "rouge-velvet-lipstick",
    title: "Rouge Velvet Lipstick",
    category: "Lips",
    price: "₱1,299",
    stock: "In Stock",
    image: rouge,
    content: [
      "A luxury velvet lipstick with bold color and a smooth matte finish.",
      "Perfect for elegant everyday looks or evening glam.",
      "Inspired by classic couture beauty with a soft, lightweight feel.",
    ],
  },

  {
    name: "gold-glow-foundation",
    title: "Gold Glow Foundation",
    category: "Face",
    price: "₱1,899",
    stock: "In Stock",
    image: foundation,
    content: [
      "A radiant liquid foundation that gives the skin a smooth and glowing finish.",
      "Lightweight, buildable, and made for a polished luxury makeup look.",
      "Best for creating a fresh base for day or night events.",
    ],
  },

  {
    name: "couture-blush-compact",
    title: "Couture Blush Compact",
    category: "Cheeks",
    price: "₱1,099",
    stock: "In Stock",
    image: blush,
    content: [
      "A soft blush compact that adds a natural rose tint to the cheeks.",
      "Blends easily and gives the face a fresh, elegant finish.",
    ],
  },

  {
    name: "lash-volume-mascara",
    title: "Lash Volume Mascara",
    category: "Eyes",
    price: "₱999",
    stock: "Low Stock",
    image: mascara,
    content: [
      "A volumizing mascara designed to lift and define the lashes.",
      "Creates a bold eye look without clumping or heaviness.",
    ],
  },

  {
    name: "nude-eyeshadow-palette",
    title: "Nude Eyeshadow Palette",
    category: "Eyes",
    price: "₱1,499",
    stock: "In Stock",
    image: palette,
    content: [
      "A nude-toned eyeshadow palette with soft mattes and elegant shimmer shades.",
      "Ideal for natural glam, soft smokey eyes, and formal makeup looks.",
    ],
  },

  {
    name: "satin-lip-oil",
    title: "Satin Lip Oil",
    category: "Lips",
    price: "₱899",
    stock: "In Stock",
    image: lipoil,
    content: [
      "A nourishing lip oil that gives a glossy satin finish.",
      "Keeps lips soft while adding a subtle luxury shine.",
    ],
  },

  {
    name: "radiance-primer",
    title: "Radiance Primer",
    category: "Face",
    price: "₱1,199",
    stock: "In Stock",
    image: primer,
    content: [
      "A smoothing primer that prepares the skin before foundation.",
      "Helps makeup last longer while giving a soft radiant base.",
    ],
  },

  {
    name: "luxury-brush-set",
    title: "Luxury Brush Set",
    category: "Accessories",
    price: "₱1,699",
    stock: "In Stock",
    image: set,
    content: [
      "A complete brush set for face, eyes, and detail makeup application.",
      "Designed with soft bristles and a sleek luxury-inspired finish.",
    ],
  },
];

export default products;
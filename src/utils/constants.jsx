import { GiCompass, GiDiamondHard, GiStabbedNote } from 'react-icons/gi';

export const links = [
  {
    id: 1,
    text: 'home',
    url: '/',
  },
  {
    id: 2,
    text: 'about',
    url: '/about',
  },
  {
    id: 3,
    text: 'products',
    url: '/products',
  },
];

export const services = [
  {
    id: 1,
    icon: <GiCompass />,
    title: 'mission',
    text: `Our mission is to create furniture that not only meets but exceeds our customers' expectations. We are committed to using only the highest quality materials and working with skilled craftsmen.`,
  },
  {
    id: 2,
    icon: <GiDiamondHard />,
    title: 'vision',
    text: `Our vision is to be the leading provider of custom-made furniture, delivering exceptional quality and unparalleled customer service.`,
  },
  {
    id: 3,
    icon: <GiStabbedNote />,
    title: 'history',
    text: `Our history is a story of passion and craftsmanship. From our humble beginnings as a small furniture shop, we have grown into a trusted provider of high-quality custom furniture.`,
  },
];

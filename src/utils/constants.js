import React from 'react';
import {
  GiBigGear,
  GiDiamondHard,
  GiMoneyStack,
  GiStabbedNote,
} from 'react-icons/gi';
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
    icon: <GiBigGear />,
    title: 'wide variety',
    text: 'We offer a wide variety of different artifacts offered by a range of sellers',
  },
  {
    id: 2,
    icon: <GiDiamondHard />,
    title: 'rich quality',
    text: 'Feel and experience the quality of our wide range of products',
  },
  {
    id: 3,
    icon: <GiMoneyStack />,
    title: 'easy payments',
    text: 'Buy the products with ease with a wide variety of different payment options',
  },
];

export const products_url = 'https://course-api.com/react-store-products';

export const single_product_url = `https://course-api.com/react-store-single-product?id=`;

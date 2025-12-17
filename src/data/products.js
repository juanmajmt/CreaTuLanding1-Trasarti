import filtroAceiteImg from "../assets/products/filtro-aceite.jpg";
import pastillasFrenoImg from "../assets/products/pastillas-freno.jpg";
import bujiaImg from "../assets/products/bujia.jpg";
import amortiguadorImg from "../assets/products/amortiguador.jpg";

export const products = [
  {
    id: "1",
    title: "Filtro de aceite Corsa 2017",
    price: 5000,
    category: "motor",
    brand: "Chevrolet",
    model: "Corsa Classic",
    condition: "Usado",
    zone: "Capital Federal",
    img: filtroAceiteImg,
    description: "Filtro compatible con Chevrolet Corsa 2016–2018."
  },
  {
    id: "2",
    title: "Pastillas de freno delanteras",
    price: 12000,
    category: "frenos",
    brand: "Volkswagen",
    model: "Gol / Fox",
    condition: "Nuevo",
    zone: "Córdoba",
    img: pastillasFrenoImg,
    description: "Pastillas nuevas, compatibles con varios modelos VW."
  },
  {
    id: "3",
    title: "Bujía estándar",
    price: 3000,
    category: "motor",
    brand: "Ford",
    model: "Fiesta",
    condition: "Nuevo",
    zone: "Mendoza",
    img: bujiaImg,
    description: "Bujía estándar para motores nafta."
  },
  {
    id: "4",
    title: "Amortiguador trasero",
    price: 25000,
    category: "suspension",
    brand: "Renault",
    model: "Clio",
    condition: "Usado",
    zone: "Rosario",
    img: amortiguadorImg,
    description: "Amortiguador en buen estado."
  }
];
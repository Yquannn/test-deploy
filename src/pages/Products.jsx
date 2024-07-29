import React from "react";
import { Link, useParams } from "react-router-dom";
import ProductCard from "/src/components/ProductCard";
import profile1 from '../assets/2x2 picture.jpg';
import profile2 from "../assets/photo_6080170684966878826_y (1).jpg";
import profile3 from "../assets/photo_6080170684966878827_y (1).jpg";

const ProductsPage = () => {
  const { productId } = useParams();

  const products = [
    {
      id: "1",
      picture: profile1,
      name: "Yquan",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta in, harum dolor dicta a molestiae nihil. Dicta, labore laborum? Sunt dolorem voluptatibus minus quos corporis ea quaerat modi, quae necessitatibus!",
    },
    {
      id: "2",
      picture: profile2,
      name: "Kali",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta in, harum dolor dicta a molestiae nihil. Dicta, labore laborum? Sunt dolorem voluptatibus minus quos corporis ea quaerat modi, quae necessitatibus!",
    },
    {
      id: "3",
      picture: profile3,
      name: "Dondon",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta in, harum dolor dicta a molestiae nihil. Dicta, labore laborum? Sunt dolorem voluptatibus minus quos corporis ea quaerat modi, quae necessitatibus!",
    },
    {
      id: "4",
      picture: profile3,
      name: "Dondon",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta in, harum dolor dicta a molestiae nihil. Dicta, labore laborum? Sunt dolorem voluptatibus minus quos corporis ea quaerat modi, quae necessitatibus!",
    },
    {
      id: "5",
      picture: profile3,
      name: "Dondon",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta in, harum dolor dicta a molestiae nihil. Dicta, labore laborum? Sunt dolorem voluptatibus minus quos corporis ea quaerat modi, quae necessitatibus!",
    },
    {
      id: "6",
      picture: profile3,
      name: "Dondon",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta in, harum dolor dicta a molestiae nihil. Dicta, labore laborum? Sunt dolorem voluptatibus minus quos corporis ea quaerat modi, quae necessitatibus!",
    },
    {
      id: "7",
      picture: profile3,
      name: "Dondon",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta in, harum dolor dicta a molestiae nihil. Dicta, labore laborum? Sunt dolorem voluptatibus minus quos corporis ea quaerat modi, quae necessitatibus!",
    },
  ];

  return (
    <div>
      {products.map(product => (
        <Link to={`/products/${product.id}`} key={product.id}>
          <ProductCard
            productPicture={product.picture}
            ProductName={product.name}
            description={product.description}
          />
        </Link>
      ))}
    </div>
  );
}

export default ProductsPage;

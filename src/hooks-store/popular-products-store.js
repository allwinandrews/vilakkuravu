import { initStore } from "./store";

import ProductImage1 from "../assets/images/items/1.jpg";
import ProductImage2 from "../assets/images/items/2.jpg";
import ProductImage3 from "../assets/images/items/3.jpg";
import ProductImage4 from "../assets/images/items/4.jpg";
import ProductImage5 from "../assets/images/items/5.jpg";
import ProductImage6 from "../assets/images/items/6.jpg";
import ProductImage7 from "../assets/images/items/7.jpg";
import ProductImage9 from "../assets/images/items/9.jpg";

const configureStore = () => {
  const actions = {
    TOGGLE_FAV: (curState, productId) => {
      const prodIndex = curState.products.findIndex((p) => p.id === productId);
      const newFavStatus = !curState.products[prodIndex].isFavorite;
      const updatedProducts = [...curState.products];
      updatedProducts[prodIndex] = {
        ...curState.products[prodIndex],
        isFavorite: newFavStatus,
      };

      return { products: updatedProducts };
    },
  };
  initStore(actions, {
    products: [
      {
        id: "pp1",
        title: "PP1",
        price: 179.0,
        image: ProductImage1,
        category: "men",
        type: "Shirts",
        isFavorite: false,
      },
      {
        id: "pp2",
        title: "PP2",
        price: 179.0,
        image: ProductImage2,
        category: "women",
        type: "Shorts & Trousers",
        isFavorite: false,
      },
      {
        id: "pp3",
        title: "PP3",
        price: 179.0,
        image: ProductImage3,
        category: "men",
        type: "Shirts",
        isFavorite: false,
      },
      {
        id: "pp4",
        title: "PP4",
        price: 179.0,
        image: ProductImage4,
        category: "women",
        type: "T-Shirts",
        isFavorite: false,
      },
      {
        id: "pp5",
        title: "PP5",
        price: 179.0,
        image: ProductImage5,
        category: "men",
        type: "Jeans",
        isFavorite: false,
      },
      {
        id: "pp6",
        title: "PP6",
        price: 179.0,
        image: ProductImage6,
        category: "women",
        type: "Jeans",
        isFavorite: false,
      },
      {
        id: "pp7",
        title: "PP7",
        price: 179.0,
        image: ProductImage7,
        category: "men",
        type: "Shorts & Trousers",
        isFavorite: false,
      },
      {
        id: "pp8",
        title: "PP8",
        price: 179.0,
        image: ProductImage9,
        category: "women",
        type: "Kurtas",
        isFavorite: false,
      },
    ],
  });
};

export default configureStore;

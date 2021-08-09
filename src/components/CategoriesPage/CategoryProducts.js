import React from "react";
import { useParams } from "react-router-dom";

import SectionHeader from "../SectionHeader";
import ProductGrid from "../ProductGrid";
import SectionNameCard from "../UI/Cards/SectionNameCard";

import Image1 from "../../assets/images/items/1.jpg";
import Image2 from "../../assets/images/items/2.jpg";
import Image3 from "../../assets/images/items/3.jpg";
import Image4 from "../../assets/images/items/4.jpg";
import Image5 from "../../assets/images/items/5.jpg";
import Image6 from "../../assets/images/items/6.jpg";
import Image7 from "../../assets/images/items/7.jpg";

const productCategories = [
  {
    id: "pc1",
    title: "Shirts",
    image: Image1,
    category: "men",
  },
  {
    id: "pc2",
    title: "T-Shirts",
    image: Image2,
    category: "men",
  },
  {
    id: "pc3",
    title: "Jeans",
    image: Image3,
    category: "men",
  },
  {
    id: "pc4",
    title: "Shorts & Trousers",
    image: Image4,
    category: "men",
  },
  {
    id: "pc5",
    title: "Kurtas",
    image: Image5,
    category: "women",
  },
  {
    id: "pc6",
    title: "Sarees",
    image: Image6,
    category: "women",
  },
  {
    id: "pc7",
    title: "Shorts & Trousers",
    image: Image7,
    category: "women",
  },
];

export default function CategoryProducts() {
  const params = useParams();

  const filteredProductCategories = productCategories.filter(
    (item) => item.category === params.categoryName
  );

  const capitalizedString = (word) => {
    const lower = word.toLowerCase();
    return word.charAt(0).toUpperCase() + lower.slice(1);
  };

  const availabilityText = filteredProductCategories.length
    ? "Products Available for "
    : "No Products Available for ";

  const sectionHeaderTitle =
    availabilityText + capitalizedString(params.categoryName);

  return (
    <SectionNameCard padding="padding-y-sm">
      <SectionHeader title={sectionHeaderTitle} />

      <div className="row">
        {filteredProductCategories &&
          filteredProductCategories.map((section) => (
            <ProductGrid
              key={section.id}
              id={section.id}
              image={section.image}
              title={section.title}
              category={section.category}
              link={`/category/${
                section.category
              }/${section.title.toLowerCase()}`}
            />
          ))}
      </div>
    </SectionNameCard>
  );
}

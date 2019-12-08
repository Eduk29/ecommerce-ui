// React
import React from "react"

// Storybook
import { storiesOf } from "@storybook/react"
import { boolean, text, withKnobs } from "@storybook/addon-knobs/react"

// Components
import { UiProductCard } from "./UiProductCard"

const product = {
  title: "Iphone 8 Plus",
  description:
    "O Apple iPhone 8 Plus é um dos smartphones iOS mais avançados e completos que existem em circulação. Tem um grande display de 5.5 polegadas com uma resolução de 1920x1080 pixel.",
  image:
    "https://www.havan.com.br/media/catalog/product/cache/55f334c6f9412d6b39cfe195ce4e3943/c/e/celular-iphone-8-plus-64gb-single-chip-apple_195004_1.jpg",
  price: "4000,00",
}

const handleClickAddToCart = () => {
  console.log("Add product to Cart!")
}

storiesOf("Product Card", module)
  .addDecorator(withKnobs)
  .add("default", () => (
    <div style={{ width: "25%" }}>
      <UiProductCard
        description={text("Description", product.description)}
        handleClickAddToCart={handleClickAddToCart}
        image={text("Image Url", product.image)}
        price={text("Price", product.price)}
        title={text("Title", product.title)}
      />
    </div>
  ))

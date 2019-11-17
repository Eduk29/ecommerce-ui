// React
import React from "react"

// Storybook
import { storiesOf } from "@storybook/react"
import { boolean, text, withKnobs } from "@storybook/addon-knobs/react"

// Components
import { UiProductCard } from "./UiProductCard"

storiesOf("Product Card", module)
  .addDecorator(withKnobs)
  .add("default", () => (
    <UiProductCard />
  ))
// React
import React from "react"

// Storybook
import { storiesOf } from "@storybook/react"
import { boolean, text, withKnobs } from "@storybook/addon-knobs/react"
import UiMenu from "./UiMenu"

// Components

storiesOf("Navbar", module)
  .addDecorator(withKnobs)
  .add("default", () => <UiMenu />)

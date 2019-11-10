// React
import React from "react"

// Storybook
import { storiesOf } from "@storybook/react"
import { text, withKnobs } from "@storybook/addon-knobs/react"

// Components
import { UiNavbar } from "./UiNavbar"

storiesOf("Navbar", module)
  .addDecorator(withKnobs)
  .add("default", () => <UiNavbar label={text("Title", "Label", "Group")} />)

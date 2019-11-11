// React
import React from "react"

// Storybook
import { storiesOf } from "@storybook/react"
import { boolean, text, withKnobs } from "@storybook/addon-knobs/react"

// Components
import { UiNavbar } from "./UiNavbar"

storiesOf("Navbar", module)
  .addDecorator(withKnobs)
  .add("default", () => (
    <UiNavbar
      hasLoginButton={boolean("Has Login Button", true)}
      hasMenuButton={boolean("Has Menu Button", true)}
      label={text("Title", "Label")}
    />
  ))

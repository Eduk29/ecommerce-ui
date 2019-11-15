// React
import React from "react"

// Storybook
import { storiesOf } from "@storybook/react"
import { boolean, text, withKnobs } from "@storybook/addon-knobs/react"

// Components
import { UiNavbar } from "./UiNavbar"

const menuItemList = [
  {
    id: 1,
    label: "Option 1",
    handleClick: () => {
      console.log("Clicked in option 1")
    },
  },
  {
    id: 2,
    label: "Option 2",
    handleClick: () => {
      console.log("Clicked in option 2")
    },
  },
  {
    id: 3,
    label: "Option 3",
    handleClick: () => {
      console.log("Clicked in option 3")
    },
  },
]

const handleClickLoginButton = () => {
  console.log('Clicked in Login Button')
}

storiesOf("Navbar", module)
  .addDecorator(withKnobs)
  .add("default", () => (
    <UiNavbar
      authenticatedUser={boolean("Authenticated User", true)}
      handleClickLoginButton={handleClickLoginButton}
      hasLoginButton={boolean("Has Login Button", true)}
      hasMenuButton={boolean("Has Menu Button", true)}
      label={text("Title", "")}
      menuItemList={menuItemList}
    />
  ))

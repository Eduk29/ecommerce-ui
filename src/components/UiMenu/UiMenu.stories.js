// React
import React from "react"

// Material
import Button from "@material-ui/core/Button"

// Storybook
import { storiesOf } from "@storybook/react"

// Components
import { UiMenu } from "./UiMenu"

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

storiesOf("Menu", module)
  .add("default", () =>
    React.createElement(() => {
      const [anchorEl, setAnchorEl] = React.useState(null)

      const handleClick = event => {
        setAnchorEl(event.currentTarget)
      }

      const handleClose = () => {
        setAnchorEl(null)
      }

      return (
        <div>
          <Button
            aria-controls="simple-menu"
            aria-haspopup="true"
            onClick={handleClick}
          >
            Open Menu
          </Button>
          <UiMenu anchorEl={anchorEl} handleClose={handleClose} menuItemList={menuItemList} />
        </div>
      )
    })
  )

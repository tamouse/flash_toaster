import React from "react"
import { storiesOf } from "@storybook/react"

import { Button } from "@storybook/react/demo"

storiesOf("demo/Button", module).add("with text", () => (
  <Button>Hello, World</Button>
))

import { configure } from "@storybook/react"

function loadStories() {
  require("../src/FlashToastr/story.js")
  require("../src/index.stories.js")
}

configure(loadStories, module)

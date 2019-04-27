import { configure } from "@storybook/react"

function loadStories() {
  require("../src/index.stories.js")
  require("../src/FlashToastr/story.js")
}

configure(loadStories, module)

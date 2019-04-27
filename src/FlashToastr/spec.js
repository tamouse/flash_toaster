import React from "react"
import { shallow } from "enzyme"

// requires code under test to be directly exported
import { FlashToastr } from "./index"
// if code under test is exported as a default use
// import FlashToastr from "./index"

describe.skip("FlashToastr", () => {
  it("renders the FlashToastr component", () => {
    const actual = shallow(<FlashToastr/>) // don't forget to add required props
    expect(actual).toMatchSnapshot()
  })
})

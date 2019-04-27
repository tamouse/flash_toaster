// See https://storybook.js.org/basics/writing-stories/ for more info
import React from "react"
import T from "prop-types"
import { storiesOf } from "@storybook/react"
import { useFlash, FlashToastr, FlashProvider } from "./index"
import JunkFiller from "./JunkFiller"
import styled from "styled-components"

const Example = () => {
  const { setFlash, levels } = useFlash()
  return (
    <Wrapper>
      <ButtonList>
        {Object.keys(levels).map(level => (
          <ButtonItem key={level}>
            <Button
              key={level}
              id={`${level}-button`}
              onClick={() => {
                console.log({ in: `onClick for ${level}`, level })
                setFlash(
                  `This is a flash message for a(n) ${level} event. Click the close button on the alert to dismiss the flash message.`,
                  level
                )
              }}
            >
              {levels[level]} flash
            </Button>
          </ButtonItem>
        ))}
      </ButtonList>
    </Wrapper>
  )
}

storiesOf("components/FlashToastr", module)
  .addDecorator(storyFn => (
    <FlashProvider>
      <FlashToastr />
      {storyFn()}
      <JunkFiller />
    </FlashProvider>
  ))
  .add("success", () => <Example />)

const Wrapper = styled.div`
  font-family: sans-serif;
  font-size: 1.2em;
  max-width: 50vw;
  margin: 50px auto;
`

const ButtonList = styled.ul`
  list-style: none;
  width: 100%;
  margin: 2px 0;
  border: 1px solid #ccc;
`

const ButtonItem = styled.li`
  width: 90%;
`

const Button = styled.button`
  width: 100%;
  background-color: #33cc33;
  color: #fff;
  font-size: 2em;
  padding: 10px;
  text-align: center;
`

import styled from "styled-components"

function levelBGColor(level = "info") {
  const bgLevelColor = {
    info: "#d9edf7",
    success: "#dff0d8",
    warning: "#fcf8e3",
    danger: "#f2dede",
  }
  return level ? bgLevelColor[level] : bgLevelColor.info
}

function levelFGColor(level = "info") {
  const fgLevelColor = {
    info: "#31708f",
    success: "#3c763d",
    warning: "#8a6d3b",
    danger: "#a94442",
  }
  return level ? fgLevelColor[level] : fgLevelColor.info
}

export const FlashArea = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  max-width: 40vw;
  padding: 0.5em;
  background-color: ${props => levelBGColor(props.level)};
  color: ${props => levelFGColor(props.level)};
  border: 1px solid #ccc;
  box-shadow: 12px 12px 2px 1px rgba(0, 0, 255, 0.2);
`

export const FlashClose = styled.button`
  position: absolute;
  top: 2px;
  right: 2px;
  font-family: sans-serif;
  font-size: 1.5em;
  color: #ccc;
  width: 1em;
  height: 1em;
  padding: 0;
  border: none;
  background: none;
`

export const FlashMessage = styled.div`
  position: relative;
  padding: 30px;
  border-radius: 5px;
`

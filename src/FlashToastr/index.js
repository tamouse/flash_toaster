import React, {
  useState,
  useContext,
  useDebugValue,
  createContext,
} from "react"
import * as S from "./style"

export const FlashContext = createContext({
  isShowing: false,
  level: null,
  message: null,
  setIsShowing: () => {},
  setLevel: () => {},
  setMessage: () => {},
})

export function useFlash({ cb = () => {} } = {}) {
  const {
    isShowing,
    level,
    message,
    setIsShowing,
    setLevel,
    setMessage,
  } = useContext(FlashContext)

  const setFlash = (msg = "", lvl = FlashToastr.levels.info) => {
    console.log({ in: `setFlash`, msg, lvl })
    setLevel(lvl)
    setMessage(msg)
    setIsShowing(true)
  }

  const closeFlash = () => {
    setIsShowing(false)
    cb()
  }

  return {
    isShowing,
    level,
    message,
    levels: FlashToastr.levels,
    setFlash,
    closeFlash,
  }
}

export class FlashProvider extends React.Component {
  state = {
    isShowing: false,
    level: null,
    message: null,
  }

  setIsShowing = isShowing => {
    this.setState({ isShowing })
  }

  setLevel = level => {
    this.setState({ level })
  }

  setMessage = message => {
    this.setState({ message })
  }

  render() {
    return (
      <FlashContext.Provider
        value={{
          isShowing: this.state.isShowing,
          level: this.state.level,
          message: this.state.message,
          setIsShowing: this.setIsShowing,
          setLevel: this.setLevel,
          setMessage: this.setMessage,
        }}
        children={this.props.children}
      />
    )
  }
}

export const FlashToastr = () => {
  const { level, message, isShowing, closeFlash } = useFlash()

  if (!isShowing) {
    console.log({ isShowing })
    return null
  }

  return (
    <S.FlashArea level={level}>
      <S.FlashMessage>
        <S.FlashClose
          onClick={() => {
            closeFlash()
          }}
        >
          &times;
        </S.FlashClose>
        {message}
      </S.FlashMessage>
    </S.FlashArea>
  )
}

FlashToastr.levels = {
  info: "info",
  success: "success",
  warning: "warning",
  danger: "danger",
}

export default FlashToastr

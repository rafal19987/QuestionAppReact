import React from 'react'
import { Wrapper } from './Button.styles'

const Button = (props) => {
  return <Wrapper {...props}>{props.buttonText}</Wrapper>
}

export default Button

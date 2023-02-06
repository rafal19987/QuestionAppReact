import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
html {
  box-sizing: border-box;
}

*,
*::after,
*::before {
  box-sizing: inherit;

}

body {
  font-family: 'Monserrat', sans-serif;
}

a,
button {
  font-family: 'Monserrat', sans-serif;
}

`

export default GlobalStyle

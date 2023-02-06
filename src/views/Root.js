import React from 'react'
import GlobalStyle from '../assets/styles/GlobalStyle'
import { theme } from '../assets/styles/theme'
import { ThemeProvider } from 'styled-components'
import { Wrapper } from './Root.styles'
import RandomQuestions from '../components/organisms/RandomQuestions/RandomQuestions'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Wrapper>
        <RandomQuestions />
      </Wrapper>
    </ThemeProvider>
  )
}

export default App

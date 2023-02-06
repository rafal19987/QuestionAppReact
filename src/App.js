import React from 'react'
import GlobalStyle from '../assets/styles/GlobalStyle'
import { theme } from '../assets/styles/theme'
import { ThemeProvider } from 'styled-components'

const App = () => {
  return (
    <ThemeProvider>
      <GlovalStyle />
      <Wrapper>
        <RandomQuestions />
      </Wrapper>
    </ThemeProvider>
  )
}

export default App

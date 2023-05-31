import { ThemeProvider } from "styled-components"
import GlobalStyles from "./components/Global"
import Dashboard from "./components/Dashboard"

const theme = {

  colors: {

    limeGreen: 'hsl(163, 72%, 41%)',
    brightRed: 'hsl(356, 69%, 56%)',

    facebook: 'linear-gradient(to right, hsl(208, 92%, 53%), hsl(208, 92%, 53%))',
    twitter: 'linear-gradient(to right, hsl(203, 89%, 53%), hsl(203, 89%, 53%))',
    instagram: 'linear-gradient(to right, hsl(37, 97%, 70%), hsl(329, 70%, 58%))',
    youtube: 'linear-gradient(to right, hsl(348, 97%, 39%), hsl(348, 97%, 39%))',

    dark: {

      background: 'hsl(230, 17%, 14%)',
      topBackground: 'hsl(232, 19%, 15%)',
      cardBackground: 'hsl(228, 28%, 20%)',
      cardBackgroundHover: 'hsl(229.0909090909091, 27.27272727272727%, 23.72549019607843%)',
      text: 'hsl(228, 34%, 66%)',
      textAccent: 'hsl(0, 0%, 100%)',
      toggle: 'linear-gradient(to right, hsl(210, 78%, 56%), hsl(146, 68%, 55%))'
    },

    light: {

      background: 'hsl(0, 0%, 100%)',
      topBackground: 'hsl(225, 100%, 98%)',
      cardBackground: 'hsl(227, 47%, 96%)',
      cardBackgroundHover: 'hsl(229.99999999999991, 20.00000000000001%, 88.23529411764706%)',
      text: 'hsl(228, 12%, 44%)',
      textAccent: 'hsl(230, 17%, 14%)',
      toggle: 'hsl(230, 22%, 74%)',
    },

  },
  desktop: '1440px'
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Dashboard />
    </ThemeProvider>
  )
}

export default App

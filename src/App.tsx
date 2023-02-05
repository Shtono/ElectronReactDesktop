import { Stack, ThemeProvider } from '@mui/material'
import NavTop from './components/Navigation/Top/NavTop'
import WarzoneBg from './assets/bg/bg_warzone.jpg'
import theme from './ui/MuiTheme/theme'

const fs = window.require('fs')
const path = window.require('path-browserify')
const er = window.require('@electron/remote')

const styles = {
  fontFamily: 'Righteous',
  height: '100vh',
  backgroundImage: `url(${WarzoneBg})`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
}

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Stack justifyContent="space-between" sx={styles}>
          <NavTop />
        </Stack>
      </ThemeProvider>
    </>
  )
}

export default App

import { createTheme } from '@mui/material'

const theme = createTheme({
  typography: {
    fontFamily: [
      'Righteous',
      'Segoe UI',
      'Roboto',
      'Oxygen',
      'Ubuntu',
      'Cantarell',
      'Fira Sans',
      'Droid Sans',
      'Helvetica Neue',
      'sans-serif',
    ].join(','),
  },
})

export default theme

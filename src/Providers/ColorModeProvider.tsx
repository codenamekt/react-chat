import React from 'react'
import { ThemeProvider, createTheme } from '@mui/material/styles'

type Props = {
  children?: React.ReactNode
}

export const ColorModeContext = React.createContext({
  toggleColorMode: () => {},
})

const ColorModePovider: React.FC<Props> = (props) => {
  const [mode, setMode] = React.useState<'light' | 'dark'>('light')
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'))
      },
    }),
    []
  )

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  )

  return (
    <ThemeProvider theme={theme}>
      <ColorModeContext.Provider value={colorMode}>
        {props.children}
      </ColorModeContext.Provider>
    </ThemeProvider>
  )
}
export default ColorModePovider

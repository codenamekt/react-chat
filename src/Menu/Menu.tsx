import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import ThemeSwitch from './ThemeSwitch'

export default function Menu(): JSX.Element {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ textAlign: 'center', flexGrow: 1 }}
          >
            {/* Insert Window Title */}
          </Typography>
          <ThemeSwitch />
        </Toolbar>
      </AppBar>
    </Box>
  )
}

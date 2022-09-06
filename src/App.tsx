import React from 'react'
import Menu from './Menu/Menu'

import ApiClientProvider from './Providers/ApiClientProvider'
import DateProvider from './Providers/DateProvider'
import ColorModePovider from './Providers/ColorModeProvider'
import MessageContainer from './Cards/MessageContainer'
import {
  Grid,
  ListItemText,
  List,
  ListItemButton,
  ListItemIcon,
} from '@mui/material'

import MailOutlineIcon from '@mui/icons-material/MailOutline'
import AddBoxIcon from '@mui/icons-material/AddBox'
import DraftsIcon from '@mui/icons-material/Drafts'
import EmailIcon from '@mui/icons-material/Email'

function App(): JSX.Element {
  return (
    <React.StrictMode>
      <ApiClientProvider>
        <ColorModePovider>
          <DateProvider>
            <Grid container>
              <Grid item xs={12}>
                <Menu />
              </Grid>
              <Grid item xs={3} md={2} sx={{ height: 'calc(100vh - 72px)' }}>
                <List
                  sx={{
                    width: '100%',
                    maxWidth: 360,
                    bgcolor: 'background.paper',
                  }}
                >
                  <ListItemButton selected>
                    <ListItemIcon>
                      <DraftsIcon />
                    </ListItemIcon>
                    <ListItemText secondary="UFO Search" />
                  </ListItemButton>
                  <ListItemButton>
                    <ListItemIcon>
                      <EmailIcon />
                    </ListItemIcon>
                    <ListItemText secondary="SETI" />
                  </ListItemButton>
                  <ListItemButton>
                    <ListItemIcon>
                      <MailOutlineIcon />
                    </ListItemIcon>
                    <ListItemText
                      sx={{ fontSize: '4em' }}
                      secondary="Mars Rover"
                    />
                  </ListItemButton>
                  <ListItemButton sx={{ textAlign: 'center', width: '100%' }}>
                    <ListItemIcon sx={{ color: 'primary.main' }}>
                      <AddBoxIcon sx={{ fontSize: '3em' }}></AddBoxIcon>
                    </ListItemIcon>
                  </ListItemButton>
                </List>
              </Grid>
              <Grid
                item
                xs={9}
                md={10}
                sx={{
                  height: 'calc(100vh - 72px)',
                }}
              >
                <MessageContainer></MessageContainer>
              </Grid>
            </Grid>
          </DateProvider>
        </ColorModePovider>
      </ApiClientProvider>
    </React.StrictMode>
  )
}

export default App

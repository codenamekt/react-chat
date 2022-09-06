import 'react-chat-elements/dist/main.css'
import {
  Avatar,
  Button,
  Card,
  CardContent,
  CardHeader,
  Grid,
  Typography,
} from '@mui/material'
import React from 'react'
import NasaLogo from '../Menu/NasaLogo'

import ModeCommentIcon from '@mui/icons-material/ModeComment'

const MessageContainer: React.FC = () => {
  return (
    <Grid container>
      <Grid item sx={{ paddingTop: '2em' }} xs={2} md={1}>
        <NasaLogo sx={{ width: '100%', margin: 'auto', fontSize: '3em' }} />
      </Grid>
      <Grid
        item
        sx={{ paddingTop: '1em', paddingRight: '1em' }}
        xs={10}
        md={11}
      >
        <Card>
          <CardHeader
            sx={{ paddingBottom: '0' }}
            subheader="NASA Support"
          ></CardHeader>
          <CardContent>
            <Typography variant="body2">
              Looking for out of this world pics. Please provide proof of UFOs.
              <br />
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item sx={{ paddingTop: '2em' }} xs={2} md={1}>
        <Avatar sx={{ margin: 'auto' }}>TS</Avatar>
      </Grid>
      <Grid
        item
        sx={{ paddingTop: '1em', paddingRight: '1em' }}
        xs={10}
        md={11}
      >
        <Card>
          <CardHeader
            sx={{ paddingBottom: '0' }}
            subheader="Tobias Stevenson"
          ></CardHeader>
          <CardContent>
            <Typography variant="body2">
              Sent you all the pictures. Please have a look at your earliest
              convienience.
              <br />
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
              <br />
              <br />
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid xs={2} sx={{ width: '100%', margin: 'auto' }}>
        <Button sx={{ marginTop: '1em' }} variant="contained">
          <ModeCommentIcon />
        </Button>
      </Grid>
    </Grid>
  )
}

export default MessageContainer

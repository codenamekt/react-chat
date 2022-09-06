import * as React from 'react'
import TextField from '@mui/material/TextField'
import { AdapterLuxon } from '@mui/x-date-pickers/AdapterLuxon'
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker'
import { makeStyles } from '@mui/styles'
import { StyledComponentProps } from '@mui/material'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DateContext } from '../Providers/DateProvider'

const useStyles = makeStyles({
  textField: {
    '& input': {
      color: '#fff',
    },
  },
})

function DatePicker(props: StyledComponentProps): JSX.Element {
  const classes = useStyles(props)
  const dateContext = React.useContext(DateContext)

  return (
    <LocalizationProvider dateAdapter={AdapterLuxon}>
      <MobileDatePicker
        value={dateContext.getDate}
        onChange={(newValue) => {
          dateContext.setDate(newValue)
        }}
        renderInput={(params) => (
          <TextField className={classes.textField} {...params} />
        )}
      />
    </LocalizationProvider>
  )
}

export default DatePicker

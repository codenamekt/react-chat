import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import { INasaApodError } from '../ApiClient/ApiClient'

interface ErrorProps {
  error: INasaApodError | null
}

const ErrorCard: React.FC<ErrorProps> = ({ error }: ErrorProps) => {
  return (
    <Card
      sx={{ minWidth: 345, margin: 'auto', marginTop: '1em', maxWidth: 800 }}
    >
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Error Code {error?.code}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Error Code {error?.msg}
        </Typography>
      </CardContent>
      <CardActions></CardActions>
    </Card>
  )
}

export default ErrorCard

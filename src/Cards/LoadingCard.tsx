import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'

const LoadingCard: React.FC = () => {
  return (
    <Card
      sx={{ minWidth: 345, margin: 'auto', marginTop: '1em', maxWidth: 800 }}
    >
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Loading...
        </Typography>
      </CardContent>
    </Card>
  )
}

export default LoadingCard

import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { INasaApod } from '../ApiClient/ApiClient'

interface PictureProps {
  picture: INasaApod | null
}

const PictureCard: React.FC<PictureProps> = ({ picture }: PictureProps) => {
  return (
    <Card
      sx={{ minWidth: 345, margin: 'auto', marginTop: '1em', maxWidth: 800 }}
    >
      <CardMedia component="img" image={picture?.url} alt={picture?.title} />
      <CardContent>
        <Typography variant="caption" color="text.secondary">
          {picture?.copyright}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          {picture?.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {picture?.explanation}
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={() => window.open(picture?.hdurl, '_blank')}>
          HD Version
        </Button>
      </CardActions>
    </Card>
  )
}

export default PictureCard

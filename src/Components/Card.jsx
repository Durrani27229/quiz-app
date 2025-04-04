import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';

export default function MultiActionAreaCard(props) {
  return (
    <Card className='card' >
      <CardActionArea>
        <CardMedia
          sx={{objectFit:'contain',height:'200px'}}
          component="img"
          image={props.image}
          alt={props.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.title.slice(0,20)}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {props.description.slice(0,80)}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Price : {props.price}
        </Button>
      </CardActions>
    </Card>
  );
}

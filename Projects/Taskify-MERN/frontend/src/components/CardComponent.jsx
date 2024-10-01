import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import { useNavigate } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { modeContext } from '../context/ModeContext';

export default function CardComponent(props) {
    const navigate=useNavigate();
    const {dark}=React.useContext(modeContext);
    const darkTheme = createTheme({
      palette: {
        mode:dark?'dark':'light',
      },
    });
  return (
   <ThemeProvider theme={darkTheme}>
     <Card sx={{ maxWidth: 255,maxHeight:405}} className='shadow-xl'>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={`../../${props.img}`}
          alt="todo" 
          className='pt-2'
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.desc}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button onClick={()=>{navigate(props.link)}} variant='contained' size="small" color="primary">
          {props.title}
        </Button>
      </CardActions>
    </Card>
   </ThemeProvider>
  );
}
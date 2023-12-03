
import React, { useContext } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardHeader from '@mui/material/CardHeader';
import Typography from '@mui/material/Typography';
import img from '../../images/film-poster-placeholder.png';
import { Link } from 'react-router-dom';
import { Button, IconButton } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { MovieActorContext } from '../../contexts/movieActorContext';
import Avatar from '@mui/material/Avatar';
import AddToMovieActorFavoritesIcon from '../cardIcons/addToMovieActorFavorites';

const MovieActorCard = ({ actors }) => {
  //const { favorites, addToActorFavorites } = MovieActorContext;

  // if (favorites && favorites.find((id) => id === actors.id)) {
  //   actors.favourite = true;
  // } else {
  //   actors.favourite = false;
  // }


  // const handleAddToFavorites = (e) => {
  //   e.preventDefault();
  //   addToActorFavorites(actors);
  // };

  return (
    <Card sx={{ maxWidth: 345, border: '2px solid black', borderRadius: '5px', transition: 'transform 0.15s ease-in-out', '&:hover': {transform: 'scale(1.03)'}}}>
      <CardHeader
        avatar={
          actors.favourite ? (
            <Avatar sx={{ backgroundColor: 'red' }}>
              <FavoriteIcon />
            </Avatar>
          ) : null
        }
        title={
          <Typography variant="h5" component="p">
            {actors.name}{" "}
          </Typography>
        }
      />
      <CardMedia
        sx={{ height: 500 }}
        image={
          actors.profile_path
            ? `https://image.tmdb.org/t/p/w500/${actors.profile_path}`
            : img
        }
      />
      <CardContent>
      </CardContent>
      <CardActions disableSpacing>
        {/* <IconButton
          aria-label="toggle favorite"
          onClick={handleAddToFavorites}
        >
          <AddToMovieActorFavoritesIcon />
        </IconButton> */}
        <Link to={`/actors/${actors.id}`}>
          <Button variant="outlined" size="medium" color="primary">
            Biography
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}

export default MovieActorCard;

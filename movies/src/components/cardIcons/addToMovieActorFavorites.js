import React, { useContext } from "react";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { MovieActorContext } from "../../contexts/movieActorContext";

const AddToActorFavoritesIcon = ({ actor }) => {
  const context = useContext(MovieActorContext);

  const handleAddToFavorites = (e) => {
    e.preventDefault();
    context.addToActorFavorites(actor);
  };

  return (
    <IconButton aria-label="add to actor favorites" onClick={handleAddToFavorites}>
      <FavoriteIcon color="primary" fontSize="large" />
    </IconButton>
  );
};

export default AddToActorFavoritesIcon;
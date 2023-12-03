import React, { useContext } from "react";
import TemplateActorListPage from "../components/templateMovieActorsListPage";
import { MovieActorContext } from "../contexts/movieActorContext";
import { useQueries } from "react-query";
import { getMovieActor } from "../api/tmdb-api";
import Spinner from '../components/spinner';
import RemoveFromFavorites from "../components/cardIcons/removeFromMovieActorFavorites";

const FavoriteActorsPage = () => {
  const {favorites: actorsIds } = useContext(MovieActorContext);

  const favoriteActorQueries = useQueries(
    actorsIds.map((actorsId) => {
      return {
        queryKey: ["actors", { id: actorsId }],
        queryFn: getMovieActor,
      };
    })
  );
  const isLoading = favoriteActorQueries.find((m) => m.isLoading === true);

  if (isLoading) {
    return <Spinner />;
  }

   const actors = favoriteActorQueries.map((q) => {
     return q.data });

  return (
    <TemplateActorListPage
      title="Favorite Actors"
      actors={actors}
      action={(actors) => {
        return (
          <>
            <RemoveFromFavorites actors={actors} />
          </>
        );
      }}
    />
  );
};

export default FavoriteActorsPage;
import React, {useContext} from "react";
import PageTemplate from '../components/templateMovieListPage'
import { getUpcomingMovies } from "../api/tmdb-api";
import AddToFavoritesIcon from '../components/cardIcons/addToFavorites';
import Spinner from '../components/spinner';
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { MoviesContext  } from "../contexts/moviesContext";

const upcomingMovies = (props) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const {pageNum} = useContext(MoviesContext);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const {pageNumber} = useParams();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const {  data, error, isLoading, isError }  = useQuery(['upcoming',{pageNum:pageNum}], getUpcomingMovies)

  console.log("pageNumber" + pageNumber)
  

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  } 

  const upcomingMovies = data.results;

  return (
    <PageTemplate
      title='Upcoming Movies'
      movies={upcomingMovies}
      action={(movie) => {
        return <AddToFavoritesIcon movie={movie} />
      }}
    />
  );
};
export default upcomingMovies;
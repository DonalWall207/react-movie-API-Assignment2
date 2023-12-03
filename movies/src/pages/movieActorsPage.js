import React from "react";
import PageTemplate from "../components/templateMovieActorsListPage";
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import {getMovieActors} from '../api/tmdb-api';
import { useParams } from "react-router-dom";

const MovieActorsPage = (props) => {
  const {pageNumber} = useParams();
    const {data, error, isLoading, isError}  = useQuery('actors', getMovieActors)

    console.log("pageNumber" + pageNumber)
  
    if (isLoading){
       return <Spinner/>
    }
    if (isError) {
      return <h1>{error.message}</h1>
    }
      const actors = data.results;

      
  // Redundant, but necessary to avoid app crashing.
  const favorites = actors.filter(m => m.favorite)
  localStorage.setItem('favorites', JSON.stringify(favorites))
   
    return (
      <PageTemplate
        title="Movie Actors"
        actors={actors}
        action={(actors) => {
      
        }}
      />
    );
  };
  export default MovieActorsPage; 
import React, { useState } from "react";

export const MovieActorContext = React.createContext(null);

const MovieActorContextProvider = (props) => {
  const [favorites, setFavorites] = useState( [] ) 
  const [pageNum1, setPageNum1] = useState([])


  const addToActorFavorites = (actors) => {
    if(actors && actors.id){
    if (!favorites.includes(actors.id)) {
      const newFavorites = [...favorites,actors.id];
      
    setFavorites(newFavorites);
    console.log(newFavorites)
  }
  }
};

const setPageNumber1 = (num) =>{
  setPageNum1(num);
  console.log("PagenumSet"+ num)
}


   const removeFromFavorites = (actors) => {
    setFavorites( favorites.filter(
      (mId) => mId !== actors.id
    ) )
  };


 return (
    <MovieActorContext.Provider
      value={{
        favorites,
        addToActorFavorites,
        removeFromFavorites,
        setPageNumber1,
        pageNum1,
      }}
    >
      {props.children}
    </MovieActorContext.Provider>
  );
};

export default MovieActorContextProvider;
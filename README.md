# Assignment 2 - Web API.

Name: Donal Wall

## Features.
 
 + Actors endpoint on movies-api.
 + Modified the movies to call from the movie-api. 
 + Private/Protected Routes on the favourites movies page.
 + Sign up and Login functions created to use stored data in my MongoDB.

## Setup requirements.

Here is how to clone the repo and install it.

+ First begin by cloneing the repo using the following command:

```bat
git clone http:\https://github.com/DonalWall207/react-movie-API-Assignment2.git
```
​
+ Followed by installation using this command:
​
```bat
git install
```
​
## API Configuration

To create this, I had to create an .env file with the following content

'''bat
_____________________
NODE_ENV=development
PORT=8080
HOST=localhost
MONGO_DB=mongodb+srv://donal:puddiner@movies.vxooovd.mongodb.net/movies?retryWrites=true&w=majority
TMDB_KEY=20d56a52b43158187c0a8ddf65fc6587
SECRET=ilikecake
______________________

'''

## API Design

- /api/movies | GET | Gets a list of movies 
- /api/movies/{movieid} | GET | Gets a single movie 
- /api/movies/{movieid}/reviews | GET | Get all reviews for movie 
- /api/movies/{movieid}/reviews | POST | Create a new review for Movie 
- /api/actors | GET | Get a list of actors
- /api/actors/{actorid} | GET | Gets a single actor
- /api/genres | GET | Gets the genres for movies

## Security and Authentication

+ Login and signup 
+ Private Routes on the favorites movies page

## Integrating with React App

~~~Javascript
export const getMovies = () => {
    return fetch(
       '/api/movies',{headers: {
         'Authorization': window.localStorage.getItem('token')
      }
    }
    ).then(res => res.json());
  };

  export const getGenres = () => {
    return fetch(
       '/api/genres',{headers: {
         'Authorization': window.localStorage.getItem('token')
      }
    }
    ).then(res => res.json());
  };

  export const getActors = () => {
    return fetch(
       '/api/actors',{headers: {
         'Authorization': window.localStorage.getItem('token')
      }
    }
    ).then(res => res.json());
  };

  export const getTopMovies = () => {
    return fetch(
       '/api/top',{headers: {
         'Authorization': window.localStorage.getItem('token')
      }
    }
    ).then(res => res.json());
  };

export const getUpcomingMovies = () => {
    return fetch(
       '/api/upcoming',{headers: {
         'Authorization': window.localStorage.getItem('token')
      }
    }
    ).then(res => res.json());
  };
​
~~~

## Independent learning (if relevant)

N/A
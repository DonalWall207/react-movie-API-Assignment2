import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Navigate, Routes} from "react-router-dom";
import HomePage from "./pages/homePage";
import MoviePage from "./pages/movieDetailsPage";
import FavoriteMoviesPage from "./pages/favoriteMoviesPage";
import MovieReviewPage from "./pages/movieReviewPage";
import UpcomingMovies from "./pages/upcomingMovies";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools';
import SiteHeader from './components/siteHeader';
import MoviesContextProvider from "./contexts/moviesContext";
import AddMovieReviewPage from './pages/addMovieReviewPage';
import TrendingMoviesPage from "./pages/trendingMoviesPage";
import SimilarMoviesPage from "./pages/similarMoviesPage";
import TopRatedMoviesPage from "./pages/topRatedMovies";
import NowPlayingPage from "./pages/nowPlayingPage";
import MovieActorsPage from "./pages/movieActorsPage";
import MovieActorDetailsPage from "./pages/movieActorsDetailsPage";
import FavoriteMovieActorsPage from "./pages/favoriteMovieActorsPage";
import LoginPage from "./pages/loginPage";
import SignUpPage from "./pages/signUpPage";
import AuthContextProvider from "./contexts/authContext";
import PrivateRoutes from "./privateRoutes";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 360000,
      refetchInterval: 360000, 
      refetchOnWindowFocus: false
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
      <AuthContextProvider>
        <SiteHeader />
        <MoviesContextProvider>
        <Routes>
          <Route element={PrivateRoutes}/>
          <Route path="/movies/favorites" element={<FavoriteMoviesPage /> }/>
          <Route path="/movies/upcoming" element={<UpcomingMovies />} />
          <Route path="/reviews/:id" element={ <MovieReviewPage /> } />
          <Route path="/movies/:id" element={<MoviePage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={ <Navigate to="/" /> } />
          <Route path="/reviews/form" element={ <AddMovieReviewPage /> } />
          <Route path="/movies/trending" element={ <TrendingMoviesPage /> } />
          <Route path="/movies/:id/similar" element={<SimilarMoviesPage />} />
          <Route path="/movies/toprated" element={<TopRatedMoviesPage />} /> 
          <Route path="/movies/now-playing" element={<NowPlayingPage />} /> 
          <Route path="/actors/" element={<MovieActorsPage />} />
          <Route path="/actors/:id" element={<MovieActorDetailsPage />} />
          <Route path="/actors/favorites" element={<FavoriteMovieActorsPage />} />
          <Route path="/page=:pageNumber" element={<HomePage />} />
          <Route path="/page=:pageNumber" element={<TopRatedMoviesPage />} />
          <Route path="/page=:pageNumber" element={<UpcomingMovies />} />
          <Route path="/users/signup" element={<SignUpPage />} />
          <Route path="/users/login" element={<LoginPage />} />
        </Routes>
        </MoviesContextProvider>
        </AuthContextProvider>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

const rootElement = createRoot( document.getElementById("root") )
rootElement.render(<App />);
import userModel from '../api/users/userModel';
import users from './users';
import dotenv from 'dotenv';
import movieModel from '../api/movies/movieModel';
import movies from './movies.js';
import genreModel from '../api/genres/genresModel';
import genres from './genres.js';
import actorModel from '../api/actors/actorModel';
import actors from './actors.js';
import upcomingModel from '../api/upcomingMovies/upcomingModel';
import upcoming from './upcoming.js';



dotenv.config();

// deletes all user documents in collection and inserts test data
async function loadUsers() {
  console.log('load user Data');
  try {
    await userModel.deleteMany();
    await users.forEach(user => userModel.create(user));
    console.info(`${users.length} users were successfully stored.`);
  } catch (err) {
    console.error(`failed to Load user Data: ${err}`);
  }
}

// deletes all movies documents in collection and inserts test data
export async function loadMovies() {
  console.log('load movie data');
  console.log(movies.length);
  try {
    await movieModel.deleteMany();
    await movieModel.collection.insertMany(movies);
    console.info(`${movies.length} Movies were successfully stored.`);
  } catch (err) {
    console.error(`failed to Load movie Data: ${err}`);
  }
}

export async function loadGenres() {
  console.log('load genre data');
  console.log(genres.length);
  try {
    await genreModel.deleteMany();
    await genreModel.collection.insertMany(genres);
    console.info(`${genres.length} Generes were successfully stored.`);
  } catch (err) {
    console.error(`failed to Load generes Data: ${err}`);
  }
}

async function loadActors() {
  console.log('load actors Data');
  try {
    await actorModel.deleteMany();
    await actorModel.collection.insertMany(actors);
    console.info(`${actors.length} actors were successfully stored.`);
  } catch (err) {
    console.error(`failed to Load actors Data: ${err}`);
  }
}

export async function loadUpcomingMovies() {
  console.log('load upcoming movies data');
  console.log(upcoming.length);
  try {
    await upcomingModel.deleteMany();
    await upcomingModel.collection.insertMany(upcoming);
    console.info(`${upcoming.length} Upcoming Movies were successfully stored.`);
  } catch (err) {
    console.error(`failed to Load Upcoming Movies Data: ${err}`);
  }
}

export async function loadTopMovies() {
  console.log('load seed data');
  console.log(topMovies.length);
  try {
    await topMoviesModel.deleteMany();
    await topMoviesModel.collection.insertMany(topMovies);
    console.info(`${topMovies.length} Top Movies were successfully stored.`);
  } catch (err) {
    console.error(`failed to Load movie Data: ${err}`);
  }
}

// eslint-disable-next-line no-undef
if (process.env.SEED_DB) {
  loadUsers();
  loadGenres();//you may not need this line if you skipped the exercises
  loadMovies();//ADD THIS LINE
  loadActors();
  loadUpcomingMovies();
  loadTopMovies();
}
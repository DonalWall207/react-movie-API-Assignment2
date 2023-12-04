import dotenv from 'dotenv';
import mongoose from 'mongoose';
import users from './users';
import movies from './movies';
import actors from './actors';
import genres from './genres';
import User from '../api/users/userModel';
import Movie from '../api/movies/movieModel';
import Actor from '../api/actors/actorModel';
import Genre from '../api/genres/genresModel';

async function main() {
  try {
    dotenv.config();

    if (process.env.NODE_ENV !== 'development') {
      console.log('This script is only for the development environment.');
      return;
    }

    await mongoose.connect(process.env.MONGO_DB);

    // Drop the entire database
    await mongoose.connection.dropDatabase().catch(err => {
      console.log('Error dropping database:', err.message);
    });

    await User.create(users);
    await Movie.create(movies);
    await Actor.create(actors);
    await Genre.create(genres);

    console.log('Database initialized');
    console.log(`${users.length} users loaded`);
    console.log(`${movies.length} movies loaded`);
    console.log(`${actors.length} actors loaded`);
    console.log(`${genres.length} genres loaded`);
  } catch (error) {
    console.error('Error during script execution:', error);
  } finally {
    // Disconnect from the MongoDB database
    await mongoose.disconnect();
  }
}

main();

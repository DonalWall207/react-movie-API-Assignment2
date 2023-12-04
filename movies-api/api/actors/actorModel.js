import mongoose from 'mongoose';

const Schema = mongoose.Schema;


const ActorSchema = new Schema({
  adult: { type: Boolean },
  id: { type: Number, required: true, unique: true },
  poster_path: { type: String },
  name: {type: String},
  popularity: {type: Number}
});


ActorSchema.statics.findByActorDBId = function (id) {
  return this.findOne({ id: id });
};

export default mongoose.model('Actors', ActorSchema);
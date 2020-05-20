import * as mongoose from 'mongoose';

export const BeerSchema = new mongoose.Schema({
  name: String,
  country: String,
  abv: Number,
});
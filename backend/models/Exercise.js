// Exercise model for the application
// This model defines the structure of exercise data in the MongoDB database
import mongoose from 'mongoose';

const exerciseSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  title: { type: String, required: true },
  duration: { type: Number, required: true }, // in minutes
  date: { type: Date, required: true },
}, { timestamps: true });

const Exercise = mongoose.models.Exercise || mongoose.model('Exercise', exerciseSchema);

export default Exercise;


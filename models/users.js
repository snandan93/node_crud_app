const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true, unique: true },
  image: { type: String, required: true },
  createdAt: { type: Date, default: Date.now , required: true },
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);                

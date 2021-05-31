const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  googleId: String,
});

// Create Modal Class => Collection:
mongoose.model("users", userSchema);

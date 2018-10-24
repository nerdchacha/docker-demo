const express = require('express');
const mongoose = require('mongoose');

const User = mongoose.model('User', { name: String, email: String });
const app = express();
mongoose.connect(process.env.MONGO_URI);

app.use('/', async (req, res) => {
  const users = await User.find({}, {_id: 0, name: 1, email: 1});
  res.send(users);
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Sever is listening on port ${PORT}`));

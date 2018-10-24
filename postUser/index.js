const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const User = mongoose.model('User', { name: String, email: String });
const app = express();
mongoose.connect(process.env.MONGO_URI);

app.use(bodyParser.json());
app.use('/', async (req, res) => {
  const { name, email } = req.body;
  const user = new User({ name, email });
  await user.save();
  return res.sendStatus(201);
});


const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Sever is listening on port ${PORT}`));

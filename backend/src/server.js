const express = require('express');
const mongoose = require('mongoose');
const eventRoutes = require('./routes/eventRoutes');

const app = express();
app.use(express.json());
app.use('/api', eventRoutes);

const PORT = process.env.PORT || 5000;

mongoose.connect('mongodb://localhost:27017/event-management', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch(err => console.error(err));

const express = require('express');
const app = express();
const port = 8000;
const cors = require('cors');

require('./config/mongoose.config');

app.use(express.json());
app.use(cors());

app.use('/api/usersz', router);

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
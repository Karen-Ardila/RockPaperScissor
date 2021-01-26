const express = require('express');
const app = express();
const port = 8000;
const cors = require('cors');
const router = require('./routers/user.router')

require('./config/mongoose.config');

app.use(express.json());
app.use(cors());

app.use('/api/users', router);

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
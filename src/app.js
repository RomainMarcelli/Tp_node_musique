const express = require('express');
const app = express();
const port = 3001;
const host = '0.0.0.0'

const mongoose = require("mongoose");

mongoose.connect('mongodb://127.0.0.1:27017/musicnode');

app.use(express.urlencoded());
app.use(express.json());

// const postRoute = require('./routes/musiqueRoute')
// app.use('/musique', postRoute);

const musiqueRoute = require('./routes/musiqueRoute');
app.use('/musiques', musiqueRoute);

app.listen(port, host);



// const express = require('express');
// const app = express();
// const port = 3000;
// const host = '0.0.0.0'

// const mongoose = require("mongoose");

// mongoose.connect('mongodb://127.0.0.1:27017/apinode');

// app.use(express.urlencoded());
// app.use(express.json());


// const postRoute = require('./routes/postRoute');
// app.use('/posts', postRoute);

// app.listen(port, host);
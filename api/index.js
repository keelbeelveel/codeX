// Script modified: Tue July 14, 2020 @ 04:36:46 EDT
const express = require('express');
const app = express();

//IMPORT ROUTES
const apiCreateRouter = require('./routes/api/create');
const apiViewRouter = require('./routes/api/view');
app.use('/api/create*', apiCreateRouter);
app.use('/api/view*', apiViewRouter);

app.listen(3000);

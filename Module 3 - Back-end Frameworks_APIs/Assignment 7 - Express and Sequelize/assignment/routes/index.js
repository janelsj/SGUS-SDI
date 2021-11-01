const express = require('express');
const protectedRoutes = require('./protected.routes');
const generalRoutes = require('./general.routes');

const app = express();
app.use(express.json());
app.use(protectedRoutes);
app.use(generalRoutes);

module.exports = app;

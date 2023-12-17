const express = require('express');
const app = express();
const path = require('path');
const methodOverride = require('method-override');
const { initSession } = require('./src/utils/sessions');
require('dotenv').config();

const mainRoutes = require('./src/routes/mainRoutes');
const shopRoutes = require('./src/routes/shopRoutes');
const adminRoutes = require('./src/routes/adminRoutes');
const authRoutes = require('./src/routes/authRoutes');
const { notFoundPage } = require('./src/utils/errorHandlers');

const port =  process.env.SERVERPORT || 3004;

app.use(express.static(path.resolve(__dirname, "public")));

app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, "./src/views"));

app.use(initSession());

app.use((req, res, next) => {
    res.locals.isLogged = req.session.isLogged;
    next();
});

app.use(express.urlencoded());
app.use(express.json());

app.use(methodOverride('_method'));

app.use('/', mainRoutes);
app.use('/shop', shopRoutes);
app.use('/admin', adminRoutes);
app.use('/auth', authRoutes);

app.use(notFoundPage);

app.listen(port, () => console.log(`Servidor con puerto corriendo en ${port}`));


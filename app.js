const express = require('express');
const app = express();
const port = 3002;
const adminRoutes = require('./src/routes/adminRoutes');
const storeRoutes = require('./src/routes/storeRoutes');

app.use(express.static('public'));

app.use(express.urlencoded());
app.use(express.json());

app.use('/admin', adminRoutes);
app.use('/store', storeRoutes);




app.listen(port, () => console.log(`Puerto corriendo en ${port}`));


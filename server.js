const express = require('express');
const expressHandlebars = require('express-handlebars');
const path = require('path');
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
require('dotenv');

const sequelize = require('./config/connection');
const routes = require('./controller');
const handlebars = expressHandlebars.create();


const PORT = process.env.PORT || 3001;

const app = express();

const sess = {
    secret: process.env.SECRET_SALT,
    cookie: {maxAge: 600000},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({db: sequelize}),
}

app.use(session(sess));

// add handlebars to app
app.set('view engine', 'handlebars');
app.engine('handlebars', handlebars.engine);

//middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')))

app.use(routes);

app.get('*', (req, res) => res.status(404).end());

sequelize.sync({force: false}).then(() => {
    app.listen(PORT, () => console.log(`Listening on port ${PORT}`))
})


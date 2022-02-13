const express = require("express");
require("dotenv").config();
const sequelize = require("./config/connection");
const routes = require("./controllers");
const session = require("express-session");
const SequelizeStore = require("connect-session-sequelize")(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;

const sess = {
  secret: "I know you want my secret",
  cookie: { maxAge: 20000 },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};
app.use(session(sess));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(routes);

sequelize.sync({ force: true }).then(() => {
  app.listen(PORT, () => console.log(`Now listening on ${PORT}`));
});

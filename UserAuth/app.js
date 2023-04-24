const express = require(`express`);
const ejs = require(`ejs`)
const bodyParser = require(`body-parser`)

const session = require(`express-session`)
//express session package
const mongoSessionStore = require(`connect-mongodb-session`)
//session storage package via mongoDB
const MongoDBStore = mongoSessionStore(session)
//session storage constructor function

const db = require(`./data/database`);
const demoRoutes = require(`./routes/demo`);

const app = express();

const sessionStore = new MongoDBStore({
  uri: `mongodb://localhost:27017`,
  databaseName: `auth-demo`,
  collection: `sessions`
})
//session storage config

app.set(`view engine`, `ejs`);
app.set(`views`, `${__dirname}/views`);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json())
app.use(express.static(`public`));
app.use(session({
  secret: `superSecret`,
  resave: false,
  saveUninitialized: false,
  store: sessionStore
}))
app.use(async (req, res, next)=>{
  const userSession = req.session.user


  if(!userSession){
    return next()
  }

  const user = await db.getDb().collection(`users`).findOne({_id: userSession.id})

  const isAdmin = user.isAdmin

  res.locals.isAuth = userSession
  res.locals.isAdmin = isAdmin
  next()
})
//configure the session middleware using an obj
app.use(demoRoutes);

app.use((error, req, res, next) => {
  console.log(error);
  res.status(500).render(`500`);
});

db.connectDB().then(() => {
  app.listen(8080, () => {
    console.log(`Server Started: Port 8080`)
  })
});
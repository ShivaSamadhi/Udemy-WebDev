const express = require(`express`);
const bcrypt = require(`bcryptjs`);
//Package for hashing passwords
const db = require(`../data/database`);

const router = express.Router();

//GET ROUTES
router.get(`/`, (req, res) => {
  res.render(`welcome`);
});

router.get(`/signup`, (req, res) => {
  res.render(`signup`);
});

router.get(`/login`, (req, res) => {
  res.render(`login`);
});

router.get(`/admin`, (req, res) => {
  if (!req.session.user){
    return res.status(401).render(`401`)
  }
  //check for user session info to know if the request is from authenticated user
  res.render('admin');
});

//POST ROUTES
router.post(`/signup`, async (req, res) => {
  const userData = req.body
  //Access req body from form submission

  const email = userData.email
  const confirmEmail = userData.emailConfirm
  const password = userData.password

  const existingUser = await db
      .getDb()
      .collection(`users`)
      .findOne({email: email})

  if(
      !email ||
      !confirmEmail ||
      !password ||
      password.trim() < 6 ||
      email !== confirmEmail ||
      !email.includes(`@`) ||
      existingUser
  ){
    return res.redirect(`/signup`)
  }


  const hashPW = await bcrypt.hash(password, 12)
  //hash() takes 2 parameters, a string representing the password and a number used to determine how strong the hash is
  //returns a promise, must be awaited

  const newUser = {
    email: email,
    password: hashPW
  }

  await db.getDb().collection(`users`).insertOne(newUser)

  res.redirect(`/login`)
});

router.post(`/login`, async (req, res) => {
  const userData = req.body
  const userEmail = userData.email
  const userPassword = userData.password

  const existingUser = await db
      .getDb()
      .collection(`users`)
      .findOne({email: userEmail})


  if(!existingUser){
    return res.redirect(`/login`)
  }

  const hashCheckPW = await bcrypt.compare(userPassword, existingUser.password)
  //password comparison via bcrypt. Takes raw string and hashes it. returns boolean

  if(!hashCheckPW){
    return res.redirect(`/login`)
  }

  req.session.user = {
    id: existingUser._id,
    email: existingUser.email
  }
  //add necessary data to the session
  req.session.save(()=>{
    res.redirect(`/admin`)
  })
  //saves session data to the db, requires a callback function that only activates upon successful save. This makes sure the redirect doesn't happen until the session info is stored in the db for future use

});

router.post(`/logout`, (req, res) => {
  req.session.user = null
});

module.exports = router;

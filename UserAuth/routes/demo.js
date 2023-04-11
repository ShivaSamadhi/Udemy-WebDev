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
  let sessionInputData = req.session.inputData

  if(!sessionInputData){
  sessionInputData = {
    hasError: false,
    email: ``,
    confirmEmail: ``,
    password: ``
    }
  }

  req.session.inputData = null
  //Manually delete session data after successful signup

  res.render(`signup`, {inputData: sessionInputData});
});

router.get(`/login`, (req, res) => {
  let sessionInputData = req.session.inputData

  if(!sessionInputData){
    sessionInputData = {
      hasError: false,
      email: ``,
      password: ``
    }
  }

  req.session.inputData = null

  res.render(`login`, {inputData: sessionInputData});
});

router.get(`/admin`, async (req, res) => {

  if (!req.session.user){
    return res.status(401).render(`401`)
  }
  //Checks for user session info to know if the request is from authenticated user. If no user data exists for this session, client is redirected to an error page

  const user = await db
      .getDb()
      .collection(`users`)
      .findOne({_id: req.session.user.id})

  if(!user || !user.isAdmin){
    return res.status(403).render(`403`)
  }
  res.render('admin');
});

router.get(`/profile`, (req, res) => {
  if (!req.session.user){
    return res.status(401).render(`401`)
  }
  //Checks for user session info to know if the request is from authenticated user. If no user data exists for this session, client is redirected to an error page

  res.render('profile');
});

//POST ROUTES
router.post(`/signup`, async (req, res) => {
  const userData = req.body
  //Access req body from form submission

  const email = userData.email
  const confirmEmail = userData.confirmE
  const password = userData.password
  //Get data from each input field

  const existingUser = await db
      .getDb()
      .collection(`users`)
      .findOne({email: email})
  //Search for existing user email in DB

  if(
      !email ||
      !confirmEmail ||
      !password ||
      !email.includes(`@`) ||
      password.trim() < 6 ||
      email !== confirmEmail ||
      existingUser
  ){
    req.session.inputData = {
      hasError: true,
      message: `Invalid Credentials - Check Your Information And Try Again.`,
      email: email,
      confirmEmail: confirmEmail,
      password: password
    }

    req.session.save(()=>{
      res.redirect(`/signup`)
    })

    return
  }
  //Check for valid credentials

  const hashPW = await bcrypt.hash(password, 12)
  //hash() takes 2 parameters, a string representing the password and a number used to determine how strong the hash is
  //returns a promise, must be awaited

  const newUser = {
    email: email,
    password: hashPW
  }
  //Create new user obj to enter into DB

  await db.getDb().collection(`users`).insertOne(newUser)

  res.redirect(`/login`)
});

router.post(`/login`, async (req, res) => {
  const userData = req.body
  const userEmail = userData.email
  const userPassword = userData.password
  //Access req body from form submission
  //Get data from each input field

  const existingUser = await db
      .getDb()
      .collection(`users`)
      .findOne({email: userEmail})
  //Search for existing user email in DB

  if(!existingUser){
    req.session.inputData = {
      hasError: true,
      message: `Invalid Credentials - Check Your Information And Try Again.`,
      email: userEmail,
      password: userPassword
    }
    req.session.save(()=>{
      res.redirect(`/login`)
    })
    return
  }
  //Redirect for invalid email

  const hashCheckPW = await bcrypt.compare(userPassword, existingUser.password)
  //Password comparison via bcrypt. Takes raw string and hashes it. Returns boolean

  if(!hashCheckPW){
    req.session.inputData = {
      hasError: true,
      message: `Invalid Credentials - Check Your Information And Try Again.`,
      email: userEmail,
      password: userPassword
    }
    req.session.save(()=>{
      res.redirect(`/login`)
    })
    return
  }
  //Redirect for invalid password

  req.session.user = {
    id: existingUser._id,
    email: existingUser.email,
  }
  //Add necessary data to the session

  req.session.save(()=>{
    res.redirect(`/admin`)
  })
  //Saves session data to the db, requires a callback function that only activates upon successful save. This makes sure the redirect doesn't happen until the session info is stored in the db for future use

});

router.post(`/logout`, (req, res) => {
  req.session.user = null
  res.redirect(`/`)
});

module.exports = router;

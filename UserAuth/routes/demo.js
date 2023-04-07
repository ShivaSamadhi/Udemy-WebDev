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
  res.render('admin');
});

//POST ROUTES
router.post(`/signup`, async (req, res) => {
  const userData = req.body
  //Access req body from form submission

  const email = userData.email
  const confirmEmail = userData.confirm
  const password = userData.password

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

router.post(`/login`, async (req, res) => {});

router.post(`/logout`, (req, res) => {});

module.exports = router;

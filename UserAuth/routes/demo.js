const express = require(`express`);
const
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

  const newUser = {
    email: email,
    password: password
  }

  await db.getDb().collection(`users`).insertOne(newUser)

  res.redirect(`/login`)
});

router.post(`/login`, async (req, res) => {});

router.post(`/logout`, (req, res) => {});

module.exports = router;

const express = require('express');
const router = express.Router();


const User = require('../models/user')
// const Project = require('../models/project')


const bcrypt = require("bcryptjs");
const bcryptSalt = 10;

router.get("/checkuser", (req, res, next) => {
  if (req.session.currentUser) {
    res.json({ userDoc: req.session.currentUser });
  } else {
    res.json({ userDoc: null });
  }
});

//logout
router.post('/logout', (req, res, next) => {
  console.log("i am log out")
  req.session.destroy();
  res.status(200).json({ message: 'Log out success!' });
});
// /api/user-signup

router.post('/user-signup', (req, res, next) => {
  console.log("req.body ->", req.body)
  const pass = req.body.password;
  const salt = bcrypt.genSaltSync(bcryptSalt);
  const hashPass = bcrypt.hashSync(pass, salt);

  User.create({
    username: req.body.username,
    password: hashPass,
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    email: req.body.email,
    phone: req.body.phone,
    address: req.body.address,
  }).then((createdUser) => {
    console.log(createdUser)
    res.json(createdUser) // this is only one different from module 2 projects
  }).catch(error => {
    console.log("somwthing is wrong with creating user => ", error)
  })
});

// router.get('/:id/user-detailupdate', (req, res, next) => {
//   console.log("user id", req.params.id);
//   User.findById(req.params.id).then(user => {
//     console.log("my user profile", user)
//     res.render('user/edituser', { myUserDestails: user, user: user })
//   })
// });


// LOGOUT


router.put('/user-edit', (req, res, next) => {

  //const pass = req.body.password;
  //const salt = bcrypt.genSaltSync(bcryptSalt);
  //const hashPass = bcrypt.hashSync(pass, salt);

  console.log("req.body.newCartItem", req.body.newCartItem)

  User.findByIdAndUpdate(req.session.currentUser._id, {
    $addToSet: { cart: req.body.newCartItem },
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    email: req.body.email,
    phone: req.body.phone,
    address: req.body.address,
    //cart: [req.body.newCartItem]
  }).then((result) => {
    res.json({ msg: 'update success' })
  })


});

router.put("/delete-item/:id", (request, response) => {
  console.log("id-------------->", request.params.id)
  User.findByIdAndUpdate(request.session.currentUser._id, {
    $pull: {
      cart: request.params.id
    }
  }).then(res => {
    response.json({ msg: "remove done" })
  })


});



router.post('/login', (req, res, next) => {

  User.findOne({ username: req.body.username }).then((user) => {
    // compareSync does these two lines and then compares with user.password (which is a hash)
    // const salt = bcrypt.genSaltSync(bcryptSalt);
    // const hashPass = bcrypt.hashSync(password, salt);
    if (bcrypt.compareSync(req.body.password, user.password)) {
      req.session.currentUser = user;
      res.json(user)
    }
  })

});

router.get('/profile/:id', (req, res, next) => {

  User.findById(req.params.id).populate('cart').then((user) => {
    res.json(user)


  })

});


// ReactDOM.render(<App />, document.getElementById('root'));

module.exports = router;

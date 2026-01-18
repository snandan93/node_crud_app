const express = require('express');
const router = express.Router();

const User = require('../models/users');
const multer = require('multer');

//image upload configuration
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  }
});
const upload = multer({ storage: storage }).single('image');


//insert user route
router.post('/add', upload, async(req,res)=>{
  try{
      const newUser = new User({
          name:req.body.name,
          email:req.body.email,
          phone:req.body.phone,
          image:req.file.filename
      })
      await newUser.save();
      req.flash('success_msg','User added successfully')
      res.redirect('/');
  }catch(err){
      console.log(err)
  }
}
)
// Define your routes here
router.get('/', async (req, res) => {
  try {
    const users = await User.find().exec();
    res.render('index', { 
      title: 'Home Page',
      users: users
    });
  } catch (err) {
    res.json({ message: err.message });
  }
});

router.get('/add', (req, res) => {
  res.render('add_users', { title: 'Add Users' });
});

module.exports = router;
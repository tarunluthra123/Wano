const router = require("express").Router();
const { User } = require("../../db/models");
const bcrypt = require("bcrypt");

router.post("/", async (req, res) => {
  res.send(req.user);
  // const {username,password  } = req.body
  // const user = await User.findOne({where: {username}})
  // if(bcrypt.compareSync(user.password, password)){
  //     res.send()
  // }
});

module.exports = router;

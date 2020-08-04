const router = require("express").Router();
const { validationResult, check, body } = require("express-validator");
const nodemailer = require("nodemailer");

router.post("/", async (req, res) => {
  await check("firstName")
    .trim()
    .notEmpty()
    .isString()
    .isLength({ min: 1, max: 15 })
    .blacklist("()<>$*&^%!@#~`")
    .run(req),
    await check("lastName")
      .trim()
      .notEmpty()
      .isString()
      .isLength({ min: 1, max: 15 })
      .blacklist("()<>$*&^%!@#~`")
      .run(req);
  await check("email")
    .trim()
    .normalizeEmail()
    .notEmpty()
    .isEmail()
    .isLength({ min: 1, max: 50 })
    .isString()
    .blacklist("()<>$*&^%!#~`")
    .run(req),
    await check("message")
      .trim()
      .notEmpty()
      .isLength({ min: 20, max: 2000 })
      .isString()
      .blacklist("()<>$*&^%!@#~`")
      .run(req);

  const error = validationResult(req);

  if (!error.isEmpty()) {
    return res.status(422).json({
      err:
        "You've entered in something incorrectly, server didn't send message",
    });
  } else {
    const { firstName, lastName, email, message } = req.body;

    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
      },
    });

    let mailOptions = {
      from: `${email}`,
      to: process.env.EMAIL,
      subject: `${firstName + "" + lastName}`,
      text: `${message}`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) return res.status(500).json({ message: { error } });

      return res
        .status(200)
        .json({ message: "Message Sent well get back to you soon!" });
    });
  }
});

module.exports = router;

const { body, validationResult } = require("express-validator");

const validateUser = [
  body("name").isLength({ min: 2 }).withMessage("Name must be at least 2 characters"),
  body("age").isInt({ min: 0, max: 120 }).withMessage("Age must be between 0 and 120"),
  body("dateOfBirth").isISO8601().withMessage("Invalid date format"),
  body("password")
    .isLength({ min: 8 })
    .matches(/\d/)
    .withMessage("Password must be at least 8 characters and contain a number"),
  body("gender").isIn(["Male", "Female", "Other"]).withMessage("Invalid gender selection"),
  body("about").optional().isLength({ max: 5000 }).withMessage("About cannot exceed 5000 characters"),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

module.exports = validateUser;
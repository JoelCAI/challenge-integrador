const { validationResult } = require('express-validator');

const validateInput = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    
    res.render('credentials', {
      view: {
        title: "Credentials | Funkoshop"
      },
      
    })
  }

  next();
};

module.exports = validateInput;
const multer = require('multer');
// for getting a unique name without extension
const {v4: uuidv4} = require('uuid');
//for accessing the original extension of selected file using extname(file.originalname)
const path = require('path');


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/images/uploads')
    },
    filename: function (req, file, cb) {
      const unique = uuidv4();
      cb(null, unique + path.extname(file.originalname));
    }
  })
  
  const upload = multer({ storage: storage })

  module.exports = upload;
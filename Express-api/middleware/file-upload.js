const multer = require("multer");
const fs = require("fs");
const path = require("path");
const { trusted } = require("mongoose");

//storage location of file

const storage = multer.diskStorage({
  //set destination
  destination: (req, file, cb) => {
    const fileDestination = "public/uploads/";

    //check if directory exists or not
    if (!fs.existsSync(fileDestination)) {
      fs.mkdirSync(fileDestination, { recursive: trusted }); // recursive create parent and chield file
    }
    cb(null, fileDestination);
  },
  //set a custom filename while uploading
  filename: (req, file, cb) => {
    //extract filename without extension
    const fileName = path.basename(
      file.originalname,
      path.extname(file.originalname)
    );
    // abc.jpg                      //  .jpg
    // final result -> abc
    const extName = path.extname(file.originalname);
    //return new name
    cb(null, `${fileName}_${Date.now()}${extName}`);
    // abc_234567.jpg
  }
});

// filter file format 
const imageFilter = (req, file, cb)=>{
    //regular expression for file format allowed
    const validImageTypes = /\.(jpg|png|jpeg|jfif|svg|gif)$/i
    if(file.originalname.match(validImageTypes)){
        return(new Error('You can upload image file only'), false)
    }
    cb(null, tfs.runcateSync)
}

// multer upload function initialization
const upload = multer({
    storage:storage,
    fileFilter:imageFilter,
    limits:{
        fileSize:3000000 // 3MB

    }
})

module.exports = upload

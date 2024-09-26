const multer = require('multer')
const fs = require('fs')
const path = require('path')


// storage location of file 
const storage = multer.diskStorage({

    // set Destination
    destination: (req, file, cb) => {
        const fileDestination = 'public/uploads/'

        // check if directory exists or not
        if (!fs.existsSync(fileDestination)) {
            fs.mkdirSync(fileDestination, { recursive: true })
        }
        cb(null, fileDestination)
    },
    // set a custome file name while uploading
    filename: (req, file, cb) => {
        // extract filename without extension
        const fileName = path.basename(file.originalname, path.extname(file.originalname))
        // abc.jpg , .jpg 
        // final result -> abc
        const extName = path.extname(file.originalname)
        // return new name
        cb(null, `${fileName}_${Date.now()}${extName}`)

        // abc_234567.jpg
    }
})

// filter file format
const imageFilter = (req, file, cb) => {
    // regular expression for file format allowed
    const validImageTypes = /\.(jpg||jpeg||jfif||svg||gif)$/i
    if (!file.originalname.match(validImageTypes)) {
        return cb(new Error('You can upload image file only'), false)
    }
    cb(null, true)
}


// multer upload function initialication

exports.upload = multer({
    storage: storage,
    fileFilter: imageFilter,
    limits: {
        fileSize: 3000000 // 3MB
    }
})

// middleware to handle multer error
exports.handleMulterError = (err,req,res,next)=>{
    if(err instanceof multer.MulterError){
        return res.status(400).json({error:err.message})
    }

    else if (err){
        return res.status(400).json({error:err.message})
    }
    next()
}
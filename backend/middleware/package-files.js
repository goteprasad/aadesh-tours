const multer = require("multer");
const path = require("path");
const fs = require('fs');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const packageId = req.query.packageId;
        const dir = `backend/files/packages/${packageId}`;

        fs.access(dir, function (error) {
            if (error) {
                return fs.mkdir(dir, { recursive: true }, (error) => cb(error, dir));
            } else {
                return cb(null, dir);
            }
        });
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});

module.exports = multer({ storage: storage }).array('packages');


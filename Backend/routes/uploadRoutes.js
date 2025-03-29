const express = require('express');
const asyncHandler = require('express-async-handler');
const multer = require('multer');
const { cloudinary } = require('../config/cloudinary');
const upload = multer({ dest: 'uploads/' });

const router = express.Router();

// @desc    Upload an image
// @route   POST /api/upload
// @access  Private/Admin
router.post('/', upload.single('image'), asyncHandler(async (req, res) => {
  const result = await cloudinary.uploader.upload(req.file.path);
  res.send(result.secure_url);
}));

module.exports = router;
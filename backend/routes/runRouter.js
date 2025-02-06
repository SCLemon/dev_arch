const express = require('express');
const router = express.Router();
const archiver = require('archiver');
const { format } =require('date-fns');
const multer = require('multer');
const fileModel = require('../models/fileModel');
const { exec,spawn } = require('child_process');
const fs = require('fs');
const os = require('os');
const path = require('path');
const { v4: uuidv4 } = require('uuid');
const nodemailer = require('nodemailer');


// 一般請求
router.get('/run/main',(req, res) => {
    res.send('hello world')
});

// 文件處理
const upload = multer();
router.post('/run/upload/',upload.fields([
    { name: 'attachments', maxCount: 50 },
])
,(req, res) => {

    var attachments = req.files['attachments'];

});


module.exports = router;
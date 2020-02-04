const express = require('express');
const serveStatic = require('serve-static');
const cors = require('cors')
const path = require('path');

var app = express();
app.use(cors());
app.use('/AHRQ-CDS-Connect-PAIN-MANAGEMENT-SUMMARY', serveStatic(path.resolve(__dirname, '../build')));
app.listen(8000, err => {
  if (err != null) {
    console.error(err);
  }
  console.log('Launch URL: http://localhost:8000/AHRQ-CDS-Connect-PAIN-MANAGEMENT-SUMMARY/launch.html');
});
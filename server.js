const express = require('express');
const app = express();
const port = 4000;

// Serve all files in the current directory (including index.html, p5.js, etc.)
console.log(app.use(express.static(__dirname)));

app.listen(port, () => {
  console.log(`p5.js server running at: http://localhost:${port}`);
});

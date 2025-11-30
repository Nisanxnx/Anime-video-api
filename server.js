const express = require('express');
const videos = require('./N1SA9/videos.json');
const SHAN = express();

SHAN.use(express.json());

SHAN.get('/random-video', (req, res) => {
  const ShaN = videos[Math.floor(Math.random() * videos.length)];
  res.json({ 
    author: "♡︎ N1SA9 ♡︎",
    ShAn: ShaN,
  });
});

SHAN.get('/', (req, res) => {
  res.send('SH AN.S API IS Running');
});

const PORT = process.env.PORT || 3000;
SHAN.listen(PORT, () => console.log(`API running on port ${PORT}`));

const express = require('express');
const videos = require('./N1SA9/videos.json');
const NVC = express();

NVC.use(express.json());

NVC.get('/random-video', (req, res) => {
  const NisaN = videos[Math.floor(Math.random() * videos.length)];
  res.json({ 
    author: "𝐍⃝𝐕𝐂⏤͟͟͞͞𝐄𝐃𝐈𝐓𝐎𝐑᭄",
    NiShu: NisaN,
  });
});

NVC.get('/', (req, res) => {
  res.send('N1SA9 API IS Running');
});

const PORT = process.env.PORT || 3000;
NVC.listen(PORT, () => console.log(`API running on port ${PORT}`));

const express = require("express");
const axios = require("axios");
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/random-video", async (req, res) => {
  try {
    const response = await axios.get(
      "https://raw.githubusercontent.com/Nisanxnx/Anime-video-api/main/videos.json"
    );

    const videos = response.data.videos;
    if (!videos || videos.length === 0) {
      return res.status(404).json({ error: "কোনো ভিডিও পাওয়া যায়নি" });
    }

    const randomVideo = videos[Math.floor(Math.random() * videos.length)];
    res.json({ video: randomVideo });

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "ভিডিও আনা যায়নি" });
  }
});

app.listen(PORT, () => {
  console.log(`API চলছে port ${PORT} এ`);
});

const express = require("express");
const axios = require("axios");
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/random-video", async (req, res) => {
  try {
    // GitHub Private Repo Info
    const GITHUB_USERNAME = "Nisanxnx"; // GitHub username
    const GITHUB_REPO = "Anime-video-api";         // Private repo name
    const FILE_PATH = "videos.json";         // JSON ফাইলের path
    const TOKEN = "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"; // GitHub PAT

    // Private repo থেকে JSON fetch
    const response = await axios.get(
      `https://api.github.com/repos/${GITHUB_USERNAME}/${GITHUB_REPO}/contents/${FILE_PATH}`,
      {
        headers: {
          Authorization: `token ${TOKEN}`,
          Accept: "application/vnd.github.v3.raw" // raw content পাওয়ার জন্য
        }
      }
    );

    const videos = response.data;
    if (!videos || videos.length === 0) {
      return res.status(404).json({ error: "কোনো ভিডিও পাওয়া যায়নি" });
    }

    // র‍্যান্ডম ভিডিও নির্বাচন
    const randomVideo = videos[Math.floor(Math.random() * videos.length)];

    // রেসপন্স
    res.json({ video: randomVideo });

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "ভিডিও আনা যায়নি" });
  }
});

app.listen(PORT, () => {
  console.log(`API চলছে PORT ${PORT} এ`);
});

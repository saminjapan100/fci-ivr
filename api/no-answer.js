export default function handler(req, res) {
  res.setHeader('Content-Type', 'text/xml');
  res.status(200).send(`<?xml version="1.0" encoding="UTF-8"?>
<Response>
  <Play>https://your-storage-url.com/audio/corp_voicemail.mp3</Play>
  <Record maxLength="120" finishOnKey="#" transcribe="true"/>
</Response>`);
}

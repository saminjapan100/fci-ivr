export default function handler(req, res) {
  res.setHeader('Content-Type', 'text/xml');
  res.status(200).send(`<?xml version="1.0" encoding="UTF-8"?>
<Response>
  <Play>https://us-central-1.telnyxcloudstorage.com/fcgcaudio/audio.mp3</Play>
  <Gather action="https://fci-ivr.vercel.app/api/menu" method="POST" numDigits="1" timeout="5">
    <Play>https://us-central-1.telnyxcloudstorage.com/fcgcaudio/audio.mp3</Play>
  </Gather>
  <Hangup/>
</Response>`);
}

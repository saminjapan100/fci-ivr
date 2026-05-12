export default function handler(req, res) {
  res.setHeader('Content-Type', 'text/xml');
  res.status(200).send(`<?xml version="1.0" encoding="UTF-8"?>
<Response>
  <Play>https://your-storage-url.com/audio/welcome.mp3</Play>
  <Gather action="https://fci-humz3ue19-sams-projects-e77bff13.vercel.app/api/menu" method="POST" numDigits="1" timeout="5">
    <Play>https://your-storage-url.com/audio/menu.mp3</Play>
  </Gather>
  <Hangup/>
</Response>`);
}

export default function handler(req, res) {
  const digit = req.body?.Digits || req.query?.Digits;

  const xmlRoutes = {
    '1': `<?xml version="1.0" encoding="UTF-8"?>
<Response>
  <Play>https://your-storage-url.com/audio/corp_enter_id.mp3</Play>
  <Dial timeout="30" action="https://fci-humz3ue19-sams-projects-e77bff13.vercel.app/api/no-answer">
    <Number>+1XXXXXXXXXX</Number>
  </Dial>
</Response>`,
    '2': `<?xml version="1.0" encoding="UTF-8"?>
<Response>
  <Play>https://your-storage-url.com/audio/contact_info.mp3</Play>
  <Hangup/>
</Response>`,
    '9': `<?xml version="1.0" encoding="UTF-8"?>
<Response>
  <Play>https://your-storage-url.com/audio/menu.mp3</Play>
  <Gather action="https://fci-humz3ue19-sams-projects-e77bff13.vercel.app/api/menu" method="POST" numDigits="1" timeout="5">
  </Gather>
  <Hangup/>
</Response>`,
  };

  const xml = xmlRoutes[digit] || `<?xml version="1.0" encoding="UTF-8"?>
<Response>
  <Play>https://your-storage-url.com/audio/invalid.mp3</Play>
  <Redirect method="POST">https://fci-humz3ue19-sams-projects-e77bff13.vercel.app/api/menu</Redirect>
</Response>`;

  res.setHeader('Content-Type', 'text/xml');
  res.status(200).send(xml);
}

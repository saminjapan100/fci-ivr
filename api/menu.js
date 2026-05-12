export default function handler(req, res) {
  const digit = req.body?.Digits || req.query?.Digits;

  const xmlRoutes = {
    '1': `<?xml version="1.0" encoding="UTF-8"?>
<Response>
  <Play>https://fci-ivr.vercel.app/press1.mp3</Play>
  <Play>https://fci-ivr.vercel.app/queuemusic.mp3</Play>
  <Dial timeout="30" action="https://fci-ivr.vercel.app/api/no-answer">
    <Number>+17167100179</Number>
  </Dial>
</Response>`,
    '2': `<?xml version="1.0" encoding="UTF-8"?>
<Response>
  <Play>https://fci-ivr.vercel.app/press2.mp3</Play>
  <Hangup/>
</Response>`,
    '9': `<?xml version="1.0" encoding="UTF-8"?>
<Response>
  <Play>https://fci-ivr.vercel.app/welcome.mp3</Play>
  <Gather action="https://fci-ivr.vercel.app/api/menu" method="POST" numDigits="1" timeout="5">
  </Gather>
  <Hangup/>
</Response>`,
  };

  const xml = xmlRoutes[digit] || `<?xml version="1.0" encoding="UTF-8"?>
<Response>
  <Play>https://fci-ivr.vercel.app/welcome.mp3</Play>
  <Redirect method="POST">https://fci-ivr.vercel.app/api/menu</Redirect>
</Response>`;

  res.setHeader('Content-Type', 'text/xml');
  res.status(200).send(xml);
}

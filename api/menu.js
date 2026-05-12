export default function handler(req, res) {
  const digit = req.body?.Digits || req.query?.Digits;

  const routes = {
    '1': 'https://api.telnyx.com/v2/media/press1.xml',
    '2': 'https://api.telnyx.com/v2/media/press2.xml',
    '9': 'https://api.telnyx.com/v2/media/main-menu.xml',
  };

  const redirect = routes[digit] || 'https://api.telnyx.com/v2/media/invalid.xml';

  res.setHeader('Content-Type', 'text/xml');
  res.status(200).send(`<?xml version="1.0" encoding="UTF-8"?>
<Response>
  <Redirect>${redirect}</Redirect>
</Response>`);
}

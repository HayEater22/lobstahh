export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }
  try {
    const { season = '2023', ntCode } = req.query;
    const ftcApiUrl = `https://ftc-api.firstinspires.org/v2.0/${season}/teams?eventCode=${ntCode}`;
    const username = process.env.FTC_USERNAME;
    const token = process.env.FTC_TOKEN;
    if (!username || !token) {
      return res.status(500).json({ error: 'Server configuration error' });
    }
    const authString = Buffer.from(`${username}:${token}`).toString('base64');
    const response = await fetch(ftcApiUrl, {
      method: 'GET',
      headers: {
        'Authorization': `Basic ${authString}`,
        'Accept': 'application/json'
      }
    });
    if (!response.ok) {
      const errorText = await response.text();
      return res.status(response.status).json({ error: 'Failed to fetch from FTC API', details: errorText });
    }
    const data = await response.json();
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ error: 'Internal Server Error', details: error.message });
  }
}

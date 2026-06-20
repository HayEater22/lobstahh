export default async function handler(req, res) {
  // Ensure the function only processes HTTP GET requests
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    return res.status(405).json({ error: `Method ${req.method} Not Allowed` });
  }

  // Extract season and ntCode from req.query
  const { season, ntCode } = req.query;

  if (!season || !ntCode) {
    return res.status(400).json({ error: 'Missing required parameters: season and ntCode' });
  }

  // Pull credentials securely using Vercel environment variables
  const username = process.env.FTC_USERNAME;
  const token = process.env.FTC_TOKEN;

  if (!username || !token) {
    return res.status(500).json({ error: 'FTC API Username or Token is not configured.' });
  }

  // Combine credentials as username:token, encode into Base64
  const encodedCredentials = Buffer.from(`${username}:${token}`).toString('base64');

  // Dynamically construct the target URL
  const targetUrl = `https://ftc-api.firstinspires.org/v2.0/${season}/teams?eventCode=${ntCode}`;

  try {
    const response = await fetch(targetUrl, {
      method: 'GET',
      headers: {
        'Authorization': `Basic ${encodedCredentials}`,
        'Accept': 'application/json'
      }
    });

    if (!response.ok) {
      const text = await response.text();
      // Forward the status code and message cleanly back to frontend without leaking secrets
      return res.status(response.status).json({
        error: `FTC API responded with status ${response.status}`,
        details: text
      });
    }

    const data = await response.json();
    return res.status(200).json(data);
  } catch (error) {
    console.error('System fetch error:', error);
    // If a system fetch crash occurs, catch it and return 500
    return res.status(500).json({ error: 'Internal Server Error', message: error.message });
  }
}

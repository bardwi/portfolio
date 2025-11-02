import type { VercelRequest, VercelResponse } from '@vercel/node';
import type { Socket } from 'net';

export default function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method === 'OPTIONS') {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    return res.status(200).end();
  }

  if (req.method !== 'GET' && req.method !== 'POST') {
    res.setHeader('Allow', 'GET, POST, OPTIONS');
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const h = req.headers || {};
  const xff = (h['x-forwarded-for'] as string | undefined) || '';
  const cf = (h['cf-connecting-ip'] as string | undefined) || '';
  const xri = (h['x-real-ip'] as string | undefined) || '';

  const socket = req.socket as Socket;
  const remoteAddress = socket.remoteAddress || '';

  const ip = (xff && xff.split(',')[0].trim()) || cf || xri || remoteAddress;

  const payload = {
    timestamp: new Date().toISOString(),
    ip,
    forwardedFor: xff,
    cfConnectingIp: cf,
    xRealIp: xri,
    userAgent: (h['user-agent'] as string) || '',
    referer: (h['referer'] as string) || '',
    host: (h['host'] as string) || '',
    allHeaders: h,
  };

  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  return res.status(200).json(payload);
}

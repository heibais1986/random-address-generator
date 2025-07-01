# Random Address Generator - Cloudflare Workers

A random address generator deployed on Cloudflare Workers, supporting 24 countries/regions worldwide.

## Features

- 🌍 Generate addresses for 24 countries/regions
- 📱 Responsive design with mobile support
- 🗺️ Google Maps preview integration
- 💾 Local storage for saved addresses
- 📋 One-click copy functionality
- 🎨 Modern UI design

## Supported Countries/Regions

US, UK, FR, DE, CN, TW, HK, JP, IN, AU, BR, CA, RU, ZA, MX, KR, IT, ES, TR, SA, AR, EG, NG, ID

## Quick Deploy

1. Install Wrangler CLI:
```bash
npm install -g wrangler
```

2. Login to Cloudflare:
```bash
wrangler login
```

3. Deploy:
```bash
npm install
npm run deploy
```

## Configuration

Edit `wrangler.toml` to customize your Worker name:
```toml
name = "your-worker-name"
main = "worker.js"
compatibility_date = "2023-10-30"
```

## API Usage

Generate random address:
```
GET /api?country=US
```

Response:
```json
{
  "name": "John Smith",
  "gender": "Male", 
  "phone": "+1 (555) 123-4567",
  "address": "123 Main St, New York, 10001, US",
  "coordinates": {
    "lat": 40.7128,
    "lng": -74.0060
  }
}
```

## License

MIT License 

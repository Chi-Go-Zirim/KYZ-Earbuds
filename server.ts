import express from 'express';
import path from 'path';
import { createServer as createViteServer } from 'vite';

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Body parser for JSON payloads
  app.use(express.json());

  // API router: process waitlist and submit to webhook as raw binary file
  app.post('/api/submit-waitlist', async (req, res) => {
    try {
      const { firstName, lastName, email, phoneNumber, interest, colour } = req.body;

      if (!firstName || !lastName || !email || !phoneNumber) {
        res.status(400).json({ error: 'Missing required field parameters' });
        return;
      }

      const payload = {
        firstName,
        lastName,
        email,
        phoneNumber,
        interest: interest || 'discount',
        colour: colour || 'black',
        registeredAt: new Date().toISOString(),
      };

      // Convert JSON data into a clean, pretty string
      const jsonString = JSON.stringify(payload, null, 2);

      // Resolve webhook url: Prefer user's custom N8N_WEBHOOK_URL, fallback to the test speed-test URL
      const webhookUrl = process.env.N8N_WEBHOOK_URL || 'https://www.classwithspeed.pro/webhook-test/9660c984-3ca1-4ba5-9c5e-fe5587622ac7';

      console.log(`Sending waitlist submission for ${firstName} ${lastName} as multipart/form-data (fields + binary file) to webhook: ${webhookUrl}`);

      // Construct multipart form data containing parsed text fields and a binary file attachment
      const formDataToSend = new FormData();
      formDataToSend.append('firstName', firstName);
      formDataToSend.append('lastName', lastName);
      formDataToSend.append('email', email);
      formDataToSend.append('phoneNumber', phoneNumber);
      formDataToSend.append('interest', interest || 'discount');
      formDataToSend.append('colour', colour || 'black');
      formDataToSend.append('registeredAt', payload.registeredAt);

      // Create binary file / blob representing the payload
      const binaryBlob = new Blob([jsonString], { type: 'application/octet-stream' });
      formDataToSend.append('file', binaryBlob, 'waitlist_entry.json');

      // Make server-to-server request (Free from browser-side CORS blocks)
      const response = await fetch(webhookUrl, {
        method: 'POST',
        body: formDataToSend,
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error(`Webhook target server rejected request with status ${response.status}:`, errorText);
        // Accepting locally but noting webhook error
        res.status(202).json({
          success: true,
          webhookDelivered: false,
          status: response.status,
          error: errorText,
        });
        return;
      }

      console.log('Successfully posted binary payload to the webhook with 2xx response.');
      res.status(200).json({ success: true, webhookDelivered: true });
    } catch (err: any) {
      console.error('Error in /api/submit-waitlist:', err);
      res.status(500).json({ 
        error: 'Failed to dispatch binary waitlist webhook', 
        details: err?.message || 'Unknown server error' 
      });
    }
  });

  // Serve static files / Vite middleware
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`KYZ Sound Pro server listening on port ${PORT}`);
  });
}

startServer();

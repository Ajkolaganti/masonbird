import express from 'express';
import cors from 'cors';
import { Resend } from 'resend';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

app.use(cors({
  origin: ['http://localhost:3000', 'http://127.0.0.1:3000'],
  methods: ['POST', 'GET', 'OPTIONS'],
  credentials: true
}));

app.use(express.json());

const resend = new Resend(process.env.RESEND_API_KEY);

app.get('/api/test', (req, res) => {
  res.json({ status: 'ok' });
});

app.post('/api/send-email', async (req, res) => {
  console.log('Received request:', req.body);

  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ 
        success: false,
        error: 'Missing required fields' 
      });
    }

    const { data, error } = await resend.emails.send({
      from: 'MasonBird Contact <onboarding@resend.dev>',
      to: ['your-email@example.com'],
      reply_to: email,
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    if (error) {
      console.error('Resend API error:', error);
      return res.status(400).json({ 
        success: false,
        error: error.message 
      });
    }

    console.log('Email sent successfully:', data);
    res.status(200).json({ 
      success: true, 
      message: 'Email sent successfully',
      data 
    });

  } catch (error) {
    console.error('Server error:', error);
    res.status(500).json({ 
      success: false,
      error: 'Failed to send email',
      details: error.message 
    });
  }
});

app.use((err, req, res, next) => {
  console.error('Global error:', err);
  res.status(500).json({ 
    success: false,
    error: 'Internal server error',
    details: err.message
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

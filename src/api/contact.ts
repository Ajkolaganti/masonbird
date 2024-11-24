import { Resend } from 'resend';
import config from '../config';

// Initialize Resend with API key
const RESEND_API_KEY = import.meta.env.VITE_RESEND_API_KEY;
const resend = new Resend(RESEND_API_KEY);

export const sendContactEmail = async (data: { name: string; email: string; message: string }) => {
  try {
    console.log('Attempting to send email with data:', data);

    const response = await fetch(`${config.apiUrl}/send-email`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.error?.message || 'Failed to send email');
    }

    console.log('Email sent successfully:', result);
    return result;
  } catch (error: any) {
    console.error('Error sending email:', error);
    return { 
      success: false, 
      error: {
        message: error.message || 'Failed to send email',
        name: error.name || 'UnknownError'
      }
    };
  }
};

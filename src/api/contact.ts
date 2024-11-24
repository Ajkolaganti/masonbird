import { Resend } from 'resend';

const resend = new Resend(import.meta.env.VITE_RESEND_API_KEY);

export const sendContactEmail = async (data: { name: string; email: string; message: string }) => {
  try {
    const { name, email, message } = data;
    
    if (!import.meta.env.VITE_RESEND_API_KEY) {
      console.error('Resend API key is missing');
      return { success: false, error: 'Configuration error' };
    }

    console.log('Sending email with data:', { name, email, message: message.substring(0, 50) + '...' });
    
    const response = await resend.emails.send({
      from: 'MasonBird Agency <onboarding@resend.dev>',
      to: ['kolagantiaj1@gmail.com'],
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
      reply_to: email
    });

    console.log('Email sent successfully:', response);
    return { success: true, data: response };
  } catch (error: any) {
    console.error('Error sending email:', {
      error: error.message,
      stack: error.stack,
      details: error.response?.data
    });
    return { 
      success: false, 
      error: error.message || 'Failed to send email',
      details: error.response?.data
    };
  }
};

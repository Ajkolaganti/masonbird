import { Resend } from 'resend';

const resend = new Resend(import.meta.env.VITE_RESEND_API_KEY);

export const sendContactEmail = async (data: { name: string; email: string; message: string }) => {
  try {
    const { name, email, message } = data;
    
    const response = await resend.emails.send({
      from: 'MasonBird Agency <onboarding@resend.dev>',
      to: ['contact@masonbird.com'],
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

    return { success: true, data: response };
  } catch (error) {
    console.error('Error sending email:', error);
    return { success: false, error: 'Failed to send email' };
  }
};

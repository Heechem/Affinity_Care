'use server';

import ContactFormEmail from '@/components/email-template';
import { getErrorMessage, validateString } from '@/lib/emailError';
import React from 'react';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(FormData: FormData) {
  const senderEmail = FormData.get('senderEmail');
  const message = FormData.get('message');

  if (!validateString(senderEmail, 500)) {
    return {
      error: 'Invalid sender email',
    };
  }

  if (!validateString(message, 50)) {
    return {
      error: 'Invalid message email',
    };
  }
  let data;
  try {
    data = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: 'hichempeter@gmail.com',
      subject: 'Message from affinity Care',
      reply_to: senderEmail as string,
      text: 'message from affinity',
      // react: React.createElement(ContactFormEmail, {
      //   message: message as string,
      //   senderEmail: senderEmail as string,
      // }),
    });
  } catch (error: unknown) {
    return { error: getErrorMessage(error) };
  }
  return {
    data,
  };
}

import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;

export async function POST(req, res) {
  const { body } = await req.json();
  const { email, subject, message } = body;
  try {
    const data = await resend.emails.send({
      from: fromEmail,
      to: ['matiasemanuelbuttari@hotmail.com', email],
      subject: subject,
      react:
    <>
        <h1>
            {subject}
        </h1>
        <p>
          Gracias por contactarme
        </p>
        <p>
          Nuevo mensaje enviado:
        </p>
        <p>
            {message}
        </p>
    </>
    });

    if (error) {
      return NextResponse.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
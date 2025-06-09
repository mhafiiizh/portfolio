import emailjs from '@emailjs/browser';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
exports.handler = async function (request, response) {
  if (request.method !== 'POST') {
    return new Response('Method Not Allowed', { status: 405 });
  }

  try {
    const { template_id, user_id, template_params } = await request.json(); // Menggunakan request.json()

    const emailJsServiceId = process.env.EMAILJS_SERVICE_ID;
    const emailJsPublicKey = process.env.EMAILJS_PUBLIC_KEY;

    if (!emailJsServiceId || !template_id || !user_id || !template_params) {
      return new Response('Missing or invalid parameters', { status: 400 });
    }

    const result = await emailjs.send(
      emailJsServiceId,
      template_id,
      template_params,
      emailJsPublicKey
    );

    return new Response(
      JSON.stringify({
        message: 'Email sent successfully!',
        status: result.status,
        text: result.text,
      }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  } catch (error) {
    console.error('Email sending error:', error);
    return new Response(
      JSON.stringify({ message: 'Failed to send email', error: error.message }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
};

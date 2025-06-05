import { useState } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = ({ toEmail = 'muhammadhafizhihsan@gmail.com' }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.message.trim()
    ) {
      setSubmitStatus('validation');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      const templateParams = {
        name: formData.name,
        email: formData.email,
        message: formData.message,
        to_email: toEmail,
        reply_to: formData.email,
      };
      await emailjs.send(serviceId!, templateId!, templateParams, publicKey);

      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className='space-y-4'
    >
      <div>
        <label
          htmlFor='name'
          className='block text-sm font-medium text-gray-700 dark:text-gray-200'
        >
          Name *
        </label>
        <input
          type='text'
          id='name'
          name='name'
          value={formData.name}
          onChange={handleInputChange}
          required
          className='mt-1 block w-full px-4 py-2 border rounded-md bg-gray-100 dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent'
          placeholder='Your name'
        />
      </div>

      <div>
        <label
          htmlFor='email'
          className='block text-sm font-medium text-gray-700 dark:text-gray-200'
        >
          Email *
        </label>
        <input
          type='email'
          id='email'
          name='email'
          value={formData.email}
          onChange={handleInputChange}
          required
          className='mt-1 block w-full px-4 py-2 border rounded-md bg-gray-100 dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent'
          placeholder='you@example.com'
        />
      </div>

      <div>
        <label
          htmlFor='message'
          className='block text-sm font-medium text-gray-700 dark:text-gray-200'
        >
          Message *
        </label>
        <textarea
          id='message'
          name='message'
          rows={4}
          value={formData.message}
          onChange={handleInputChange}
          required
          className='mt-1 block w-full px-4 py-2 border rounded-md bg-gray-100 dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent'
          placeholder='Your message...'
        />
      </div>

      {submitStatus === 'validation' && (
        <div className='p-3 bg-yellow-100 border border-yellow-400 text-yellow-700 rounded'>
          Please fill in all required fields.
        </div>
      )}
      {submitStatus === 'success' && (
        <div className='p-3 bg-green-100 border border-green-400 text-green-700 rounded'>
          ✅ Message sent successfully! I'll get back to you soon.
        </div>
      )}
      {submitStatus === 'error' && (
        <div className='p-3 bg-red-100 border border-red-400 text-red-700 rounded'>
          ❌ Failed to send message. Please try again or contact me directly via
          email.
        </div>
      )}

      <div>
        <button
          type='submit'
          disabled={isSubmitting}
          className='px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition disabled:bg-blue-400 disabled:cursor-not-allowed'
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
      </div>
    </form>
  );
};

export default ContactForm;

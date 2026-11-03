import { useState } from 'react';
import { ContactFormData } from '@/types';

export default function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Get your access key from https://web3forms.com
  const WEB3FORMS_ACCESS_KEY = '395b676a-60a5-49e2-bd7c-d2033e888ea2';

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          ...formData,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitted(true);
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });

        // Reset success message after 5 seconds
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        setError('Failed to send message. Please try again.');
      }
    } catch (err) {
      console.error('Error submitting form:', err);
      setError('An error occurred. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
      {submitted && (
        <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
          Thank you! Your message has been sent successfully. We'll be in touch soon.
        </div>
      )}

      {error && (
        <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
          {error}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="input-field"
            placeholder="Your name"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="input-field"
            placeholder="your@email.com"
          />
        </div>
      </div>

      <div className="mb-6">
        <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
          Phone Number
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="input-field"
          placeholder="+1 (555) 000-0000"
        />
      </div>

      <div className="mb-6">
        <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
          Subject *
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
          className="input-field"
          placeholder="How can we help?"
        />
      </div>

      <div className="mb-6">
        <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={6}
          className="textarea-field"
          placeholder="Your message..."
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="btn btn-primary w-full md:w-auto"
      >
        {loading ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
}

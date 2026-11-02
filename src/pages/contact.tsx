import Head from 'next/head';
import ContactForm from '@/components/ContactForm';

export default function Contact() {
    return (
        <>
            <Head>
                <title>Contact Us - Balasree Tanjore Painting Academy</title>
                <meta name="description" content="Get in touch with Balasree Tanjore Painting Academy" />
            </Head>

            {/* Page Header */}
            <section className="bg-dark-brown text-white py-12">
                <div className="container">
                    <h1 className="text-5xl font-bold mb-4">Contact Us</h1>
                    <p className="text-xl text-gray-300">
                        We'd love to hear from you. Reach out to us today!
                    </p>
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-16">
                <div className="container">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
                        {/* Contact Information */}
                        <div>
                            <h2 className="text-4xl font-bold text-dark-brown mb-8">Get In Touch</h2>

                            <div className="mb-8">
                                <h3 className="text-2xl font-bold text-gold mb-4">Address</h3>
                                <p className="text-lg text-gray-700">
                                    Plot no 803, <br />
                                    Defence Colony Rd, <br />
                                    SGKS United Residency, <br />
                                    Hill Top Colony, <br />
                                    Sainikpuri, <br />
                                    Secunderabad, <br />
                                    Telangana 500094
                                </p>
                            </div>

                            <div className="mb-8">
                                <h3 className="text-2xl font-bold text-gold mb-4">Contact Info</h3>
                                <p className="text-lg text-gray-700 mb-2">
                                    <strong>Email:</strong> info@balasreearts.com
                                </p>
                                <p className="text-lg text-gray-700 mb-2">
                                    <strong>Phone:</strong> +91 8008118882
                                </p>
                            </div>

                            <div className="mb-8">
                                <h3 className="text-2xl font-bold text-gold mb-4">Business Hours</h3>
                                <p className="text-lg text-gray-700 mb-2">
                                    Monday - Friday: 10:00 AM - 6:00 PM
                                </p>
                                <p className="text-lg text-gray-700 mb-2">
                                    Saturday: 11:00 AM - 5:00 PM
                                </p>
                                <p className="text-lg text-gray-700">
                                    Sunday: Closed
                                </p>
                            </div>

                            <div>
                                <h3 className="text-2xl font-bold text-gold mb-4">Follow Us</h3>
                                <div className="flex gap-6">
                                    <a href="#" className="text-dark-brown hover:text-gold transition-colors text-2xl">
                                        f
                                    </a>
                                    <a href="#" className="text-dark-brown hover:text-gold transition-colors text-2xl">
                                        📷
                                    </a>
                                    <a href="#" className="text-dark-brown hover:text-gold transition-colors text-2xl">
                                        𝕏
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Embedded Map */}
                        <div className="bg-gray-300 rounded-lg h-96">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.412261625573!2d78.53683738661513!3d17.487822940657477!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9b1e1971f3b9%3A0xc892532a7cb9be41!2sBalasree%20Arts%20Academy!5e0!3m2!1sen!2sin!4v1793624066018!5m2!1sen!2sin" 
                            width={600} height={450} 
                            style={{ border: '0' }} allowFullScreen 
                            loading="lazy" 
                            referrerPolicy="strict-origin-when-cross-origin"></iframe>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-light-gray py-12 px-8 rounded-lg">
                        <h2 className="text-4xl font-bold text-dark-brown mb-8 text-center">Send us a Message</h2>
                        <ContactForm />
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-16 bg-white">
                <div className="container">
                    <h2 className="text-4xl font-bold text-dark-brown mb-12 text-center">Frequently Asked Questions</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {[
                            {
                                question: 'How can I purchase a painting?',
                                answer: 'You can browse our gallery and contact us directly to inquire about availability and pricing. We\'ll be happy to assist you with your purchase.',
                            },
                            {
                                question: 'Do you offer custom paintings?',
                                answer: 'Yes, we do accept custom painting requests. Please contact us with your requirements and we\'ll work with you to create a unique piece.',
                            },
                            {
                                question: 'What are your shipping options?',
                                answer: 'We offer domestic and international shipping. Packaging is done with great care to ensure your artwork arrives in perfect condition.',
                            },
                            {
                                question: 'Do you provide certificates of authenticity?',
                                answer: 'Yes, all our paintings come with a certificate of authenticity signed by the artist.',
                            },
                            {
                                question: 'Can I commission a painting?',
                                answer: 'Absolutely! We welcome commission requests. Please reach out with your ideas and specifications.',
                            },
                            {
                                question: 'What is your return policy?',
                                answer: 'We stand behind the quality of our work. Please contact us for details about our return and satisfaction guarantee.',
                            },
                        ].map((faq, index) => (
                            <div key={index} className="border-b-2 border-gray-200 pb-6">
                                <h3 className="text-xl font-bold text-dark-brown mb-3">{faq.question}</h3>
                                <p className="text-gray-700">{faq.answer}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}

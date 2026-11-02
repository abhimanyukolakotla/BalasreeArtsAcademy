import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
    return (
        <>
            <Head>
                <title>Balasree Arts Academy - Paintings Portfolio</title>
                <meta name="description" content="Explore beautiful classical paintings by Balasree Arts Academy" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>

            {/* Hero Section */}
            <section className="bg-gradient-to-br from-dark-brown to-gray-900 text-white py-20">
                <div className="container">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                        {/* Logo */}
                        <div className="flex justify-center md:justify-start">
                            <Image
                                src="/BalasreeArtsAcademyLogo.png"
                                alt="Balasree Arts Academy Logo"
                                width={250}
                                height={250}
                                className="rounded-lg shadow-lg"
                                priority
                            />
                        </div>
                        {/* Text Content */}
                        <div>
                            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                                Welcome to <span className="text-gold">Balasree Arts Academy</span>
                            </h1>
                            <p className="text-xl md:text-2xl text-gray-300 mb-8">
                                Discover the beauty and elegance of classical paintings by our talented artists
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link href="/gallery" className="btn btn-primary">
                                    View Gallery
                                </Link>
                                <Link href="/about" className="btn btn-outline">
                                    Learn More
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-16 bg-white">
                <div className="container">
                    <h2 className="text-4xl font-bold text-center text-dark-brown mb-12">Why Choose Us</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-center p-6">
                            <div className="text-5xl text-gold mb-4">🎨</div>
                            <h3 className="text-2xl font-bold text-dark-brown mb-4">Classical Art</h3>
                            <p className="text-gray-600">
                                We specialize in preserving and promoting classical Indian art forms through exceptional paintings.
                            </p>
                        </div>
                        <div className="text-center p-6">
                            <div className="text-5xl text-gold mb-4">👨‍🎨</div>
                            <h3 className="text-2xl font-bold text-dark-brown mb-4">Expert Artists</h3>
                            <p className="text-gray-600">
                                Our team consists of highly skilled and experienced artists dedicated to their craft.
                            </p>
                        </div>
                        <div className="text-center p-6">
                            <div className="text-5xl text-gold mb-4">🏆</div>
                            <h3 className="text-2xl font-bold text-dark-brown mb-4">Award Winning</h3>
                            <p className="text-gray-600">
                                Our works have been recognized and appreciated at national and international levels.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-gold text-dark-brown py-16">
                <div className="container text-center">
                    <h2 className="text-4xl font-bold mb-6">Ready to Explore Our Collection?</h2>
                    <p className="text-lg mb-8 max-w-2xl mx-auto">
                        Browse through our carefully curated gallery of paintings and find your favorite piece of art.
                    </p>
                    <Link href="/gallery" className="btn btn-secondary">
                        View Full Gallery
                    </Link>
                </div>
            </section>
        </>
    );
}

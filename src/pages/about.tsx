import Head from 'next/head';

export default function About() {
  return (
    <>
      <Head>
        <title>About - Balasree Tanjore Painting Academy</title>
        <meta name="description" content="Learn about Balasree Tanjore Painting Academy and our mission" />
      </Head>

      {/* Page Header */}
      <section className="bg-dark-brown text-white py-12">
        <div className="container">
          <h1 className="text-5xl font-bold mb-4">About Us</h1>
          <p className="text-xl text-gray-300">
            Discover the story behind Balasree Tanjore Painting Academy
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-4xl font-bold text-dark-brown mb-6">Our Mission</h2>
              <p className="text-lg text-gray-700 mb-4">
                Balasree Tanjore Painting Academy is dedicated to preserving and promoting classical Indian art forms through the creation of exquisite paintings. Our mission is to celebrate the rich cultural heritage of India while providing a platform for talented artists to showcase their work.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                We believe in the power of art to transform lives, inspire minds, and connect cultures. Every painting created by our academy carries the essence of tradition, skill, and passion.
              </p>
              <p className="text-lg text-gray-700">
                Through our work, we aim to keep classical art forms alive and relevant in the modern world, ensuring that future generations continue to appreciate and value these timeless treasures.
              </p>
            </div>
            <div className="bg-gray-300 rounded-lg h-96 flex items-center justify-center">
              <img
                src="https://via.placeholder.com/500x400?text=Academy+Studio"
                alt="Academy Studio"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>

          {/* Team Section */}
          <div className="my-16">
            <h2 className="text-4xl font-bold text-dark-brown mb-12 text-center">Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: 'Master Artist 1',
                  role: 'Founder & Lead Artist',
                  bio: 'With over 30 years of experience in classical painting, Master Artist 1 is the visionary behind Balasree Tanjore Painting Academy.',
                },
                {
                  name: 'Master Artist 2',
                  role: 'Senior Artist',
                  bio: 'Specializing in religious and mythological subjects, Master Artist 2 brings traditional techniques to life.',
                },
                {
                  name: 'Master Artist 3',
                  role: 'Contemporary Artist',
                  bio: 'Blending traditional and modern styles, Master Artist 3 creates innovative works that captivate audiences.',
                },
              ].map((member, index) => (
                <div key={index} className="text-center">
                  <div className="bg-gray-300 rounded-lg w-64 h-64 mx-auto mb-6 flex items-center justify-center overflow-hidden">
                    <img
                      src={`https://via.placeholder.com/256x256?text=${member.name.replace(/ /g, '+')}`}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-dark-brown mb-2">{member.name}</h3>
                  <p className="text-gold font-semibold mb-4">{member.role}</p>
                  <p className="text-gray-700">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Values Section */}
          <div className="bg-light-gray py-12 px-8 rounded-lg">
            <h2 className="text-4xl font-bold text-dark-brown mb-12 text-center">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-gold mb-4">Authenticity</h3>
                <p className="text-gray-700">
                  We maintain the authenticity of classical art forms while embracing innovation and contemporary sensibilities.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gold mb-4">Excellence</h3>
                <p className="text-gray-700">
                  We are committed to creating works of the highest quality, where every brushstroke reflects our dedication to perfection.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gold mb-4">Cultural Preservation</h3>
                <p className="text-gray-700">
                  Preserving and promoting Indian cultural heritage is at the heart of everything we do.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gold mb-4">Community</h3>
                <p className="text-gray-700">
                  We believe in building a community of art lovers, collectors, and enthusiasts who share our passion.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

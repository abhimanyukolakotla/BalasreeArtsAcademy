import Head from 'next/head';
import { useState } from 'react';
import GalleryCard from '@/components/GalleryCard';
import { Painting } from '@/types';

// Sample painting data - replace with your actual data
const samplePaintings: Painting[] = [
  {
    id: '1',
    title: 'Radha Krishna',
    artist: 'Master Artist',
    description: 'A divine portrayal of the eternal love story of Radha and Krishna',
    imageUrl: 'https://via.placeholder.com/400x500?text=Radha+Krishna',
    category: 'Religious',
    year: 2023,
  },
  {
    id: '2',
    title: 'Durga Puja',
    artist: 'Master Artist',
    description: 'An intense depiction of Goddess Durga slaying the buffalo demon',
    imageUrl: 'https://via.placeholder.com/400x500?text=Durga+Puja',
    category: 'Religious',
    year: 2023,
  },
  {
    id: '3',
    title: 'Village Life',
    artist: 'Master Artist',
    description: 'A serene portrayal of rural life and traditions',
    imageUrl: 'https://via.placeholder.com/400x500?text=Village+Life',
    category: 'Landscape',
    year: 2022,
  },
  {
    id: '4',
    title: 'Classical Dance',
    artist: 'Master Artist',
    description: 'A graceful representation of classical Indian dance forms',
    imageUrl: 'https://via.placeholder.com/400x500?text=Classical+Dance',
    category: 'Portrait',
    year: 2023,
  },
  {
    id: '5',
    title: 'Nature\'s Glory',
    artist: 'Master Artist',
    description: 'A vibrant celebration of nature\'s beauty and colors',
    imageUrl: 'https://via.placeholder.com/400x500?text=Nature+Glory',
    category: 'Landscape',
    year: 2022,
  },
  {
    id: '6',
    title: 'Sacred Rituals',
    artist: 'Master Artist',
    description: 'An elegant display of traditional religious ceremonies',
    imageUrl: 'https://via.placeholder.com/400x500?text=Sacred+Rituals',
    category: 'Religious',
    year: 2023,
  },
];

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', ...new Set(samplePaintings.map((p) => p.category))];
  const filteredPaintings =
    selectedCategory === 'All'
      ? samplePaintings
      : samplePaintings.filter((p) => p.category === selectedCategory);

  return (
    <>
      <Head>
        <title>Gallery - Balasree Arts Academy</title>
        <meta name="description" content="Browse our collection of classical paintings" />
      </Head>

      {/* Page Header */}
      <section className="bg-dark-brown text-white py-12">
        <div className="container">
          <h1 className="text-5xl font-bold mb-4">Our Gallery</h1>
          <p className="text-xl text-gray-300">
            Explore our collection of classical paintings
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16">
        <div className="container">
          {/* Category Filter */}
          <div className="mb-12 flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gold text-dark-brown'
                    : 'bg-gray-200 text-dark-brown hover:bg-gray-300'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="gallery-grid">
            {filteredPaintings.map((painting) => (
              <GalleryCard key={painting.id} painting={painting} />
            ))}
          </div>

          {filteredPaintings.length === 0 && (
            <div className="text-center py-12">
              <p className="text-2xl text-gray-600">No paintings found in this category</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

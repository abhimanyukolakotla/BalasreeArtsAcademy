import { Painting } from '@/types';

interface GalleryCardProps {
  painting: Painting;
}

export default function GalleryCard({ painting }: GalleryCardProps) {
  return (
    <div className="gallery-card">
      <div className="relative overflow-hidden bg-gray-200 h-80">
        <img
          src={painting.imageUrl}
          alt={painting.title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
        <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-40 transition-all duration-300 flex items-end">
          <div className="w-full p-4 bg-gradient-to-t from-black to-transparent text-white opacity-0 hover:opacity-100 transition-opacity duration-300">
            <p className="text-sm font-semibold">{painting.category}</p>
          </div>
        </div>
      </div>
      <div className="gallery-card-content">
        <h3 className="text-lg font-bold text-dark-brown mb-1">{painting.title}</h3>
        <p className="text-gray-600 text-sm mb-2">by {painting.artist}</p>
        <p className="text-gray-700 text-sm mb-3 line-clamp-2">{painting.description}</p>
        {painting.year && <p className="text-gold font-semibold text-sm">{painting.year}</p>}
      </div>
    </div>
  );
}

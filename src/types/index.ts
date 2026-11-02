export interface Painting {
  id: string;
  title: string;
  artist: string;
  description: string;
  imageUrl: string;
  category: string;
  price?: string;
  dimensions?: string;
  year?: number;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  imageUrl?: string;
}

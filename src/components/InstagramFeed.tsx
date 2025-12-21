import { Instagram, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const instagramPosts = [
  {
    id: 1,
    imageUrl: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=400&fit=crop',
    caption: 'Latest iPhone 15 Pro now available! 📱✨',
    likes: 156,
  },
  {
    id: 2,
    imageUrl: 'https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=400&h=400&fit=crop',
    caption: 'Samsung Galaxy S24 Ultra - Flagship excellence 🚀',
    likes: 203,
  },
  {
    id: 3,
    imageUrl: 'https://images.unsplash.com/photo-1605236453806-6ff36851218e?w=400&h=400&fit=crop',
    caption: 'Expert repair services for all brands 🔧',
    likes: 89,
  },
  {
    id: 4,
    imageUrl: 'https://images.unsplash.com/photo-1556656793-08538906a9f8?w=400&h=400&fit=crop',
    caption: 'Premium accessories collection 🎧',
    likes: 124,
  },
  {
    id: 5,
    imageUrl: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=400&h=400&fit=crop',
    caption: 'OnePlus 12 - Speed redefined ⚡',
    likes: 178,
  },
  {
    id: 6,
    imageUrl: 'https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?w=400&h=400&fit=crop',
    caption: 'Happy customers, happy us! 😊',
    likes: 245,
  },
];

const InstagramFeed = () => {
  const instagramUrl = 'https://www.instagram.com/aimobilegallery/';

  return (
    <section className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Instagram className="w-8 h-8 text-pink-500" />
            <h2 className="text-3xl md:text-4xl font-bold">Follow Us on Instagram</h2>
          </div>
          <a 
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg text-primary hover:underline inline-flex items-center gap-1"
          >
            @aimobilegallery
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        {/* Instagram Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {instagramPosts.map((post) => (
            <a
              key={post.id}
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
            >
              <img
                src={post.imageUrl}
                alt={post.caption}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-center text-white p-2">
                  <Instagram className="w-6 h-6 mx-auto mb-1" />
                  <span className="text-sm">❤️ {post.likes}</span>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Follow Button */}
        <div className="text-center mt-10">
          <Button
            size="lg"
            className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 hover:from-purple-600 hover:via-pink-600 hover:to-orange-500 text-white"
            onClick={() => window.open(instagramUrl, '_blank')}
          >
            <Instagram className="w-5 h-5 mr-2" />
            Follow @aimobilegallery
          </Button>
        </div>
      </div>
    </section>
  );
};

export default InstagramFeed;

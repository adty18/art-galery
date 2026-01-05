import React from 'react';
import './index.css';
import ArtworkCard from './components/ArtworkCard';
import ArtworkModal from './components/ArtworkModal';
import { GalleryHeader } from './components/GalleryHeader';

interface Artwork {
  image: string;
  title: string;
  description: string;
  category?: string;
}

function App() {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [selectedCategory, setSelectedCategory] = React.useState('All');
  // Array data untuk kartu-kartu (tambah `category` agar header bisa memfilter)
  const artworks: Artwork[] = [
    {
      image: 'https://www.pictureframesexpress.co.uk/blog/wp-content/uploads/2020/05/7-Tips-to-Finding-Art-Inspiration-Header-1024x649.jpg',
      title: 'Lizard',
      description: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
      category: 'Modern',
    },
    {
      image: 'https://www.theartist.me/wp-content/uploads/2023/05/definition-of-art-1024x576.jpg',
      title: 'Eagle',
      description: 'Eagles are large birds of prey with powerful talons and keen eyesight.',
      category: 'Abstract',
    },
    {
      image: 'https://d35tcbo7v606fs.cloudfront.net/wp-content/uploads/2022/03/21204303/Blog-Images-2-1.png',
      title: 'Tiger',
      description: 'Tigers are the largest cat species, known for their striped fur and strength.',
      category: 'Contemporary',
    },
    {
      image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1200&q=80&auto=format&fit=crop',
      title: 'Mountain View',
      description: 'A serene landscape painting capturing misty mountains at dawn.',
      category: 'Landscape',
    },
    {
      image: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=1200&q=80&auto=format&fit=crop',
      title: 'Portrait Study',
      description: 'An intimate portrait study with textured brushwork.',
      category: 'Portrait',
    },
    {
      image: 'https://images.unsplash.com/photo-1549880338-65ddcdfd017b?w=1200&q=80&auto=format&fit=crop',
      title: 'Minimal Lines',
      description: 'Minimalist composition using a few precise strokes.',
      category: 'Minimalist',
    },
    {
      image: 'https://www.pictureframesexpress.co.uk/blog/wp-content/uploads/2020/05/7-Tips-to-Finding-Art-Inspiration-Header-1024x649.jpg',
      title: 'Lizard',
      description: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
      category: 'Modern',
    },
    {
      image: 'https://www.theartist.me/wp-content/uploads/2023/05/definition-of-art-1024x576.jpg',
      title: 'Eagle',
      description: 'Eagles are large birds of prey with powerful talons and keen eyesight.',
      category: 'Abstract',
    },
    {
      image: 'https://d35tcbo7v606fs.cloudfront.net/wp-content/uploads/2022/03/21204303/Blog-Images-2-1.png',
      title: 'Tiger',
      description: 'Tigers are the largest cat species, known for their striped fur and strength.',
      category: 'Contemporary',
    },
    {
      image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1200&q=80&auto=format&fit=crop',
      title: 'Mountain View',
      description: 'A serene landscape painting capturing misty mountains at dawn.',
      category: 'Landscape',
    },
    {
      image: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=1200&q=80&auto=format&fit=crop',
      title: 'Portrait Study',
      description: 'An intimate portrait study with textured brushwork.',
      category: 'Portrait',
    },
    {
      image: 'https://images.unsplash.com/photo-1549880338-65ddcdfd017b?w=1200&q=80&auto=format&fit=crop',
      title: 'Minimal Lines',
      description: 'Minimalist composition using a few precise strokes.',
      category: 'Minimalist',
    },
  ];

  // Filtering by category and search query
  const filteredArtworks = artworks.filter((a) => {
    const matchesCategory = selectedCategory === 'All' || a.category === selectedCategory;
    const q = searchQuery.trim().toLowerCase();
    const matchesSearch =
      q === '' ||
      a.title.toLowerCase().includes(q) ||
      a.description.toLowerCase().includes(q) ||
      (a.category || '').toLowerCase().includes(q);
    return matchesCategory && matchesSearch;
  });

  const [selectedArtwork, setSelectedArtwork] = React.useState<Artwork | null>(null);

  const handleClose = () => setSelectedArtwork(null);

  return (
    <>
      <GalleryHeader
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />
      <div className="gallery container mx-auto my-8">
        {filteredArtworks.length === 0 ? (
          <div className="p-8 text-center">No artworks found.</div>
        ) : (
          filteredArtworks.map((artwork, index) => (
            <ArtworkCard
              key={index}
              image={artwork.image}
              title={artwork.title}
              description={artwork.description}
              onClick={() => setSelectedArtwork(artwork)}
            />
          ))
        )}
      </div>

      <ArtworkModal open={selectedArtwork !== null} onClose={handleClose} artwork={selectedArtwork} />
    </>
  );
}

export default App;
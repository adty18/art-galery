import { Search } from 'lucide-react';

interface GalleryHeaderProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

const categories = ['All', 'Modern', 'Abstract', 'Contemporary', 'Landscape', 'Portrait', 'Minimalist'];

export function GalleryHeader({ searchQuery, onSearchChange, selectedCategory, onCategoryChange }: GalleryHeaderProps) {
  return (
    <header className="border-b border-border bg-background/95 backdrop-blur-sm sticky top-0 z-40">
      <div className="max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="py-8">
          <h1 className="mb-2 text-4xl font-bold">Art Gallery</h1>
          <p className="text-muted-foreground">Discover contemporary and classic artworks from around the world</p>
        </div>

        <div className="pb-6 flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search artworks, artists..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-input-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring"
            />
          </div>
        </div>

        <div className="pb-6 flex gap-2 overflow-x-auto scrollbar-hide p-3 -mx-4 justify-items-center-safe">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => onCategoryChange(category)}
              aria-pressed={selectedCategory === category}
              className={`px-4 py-2 rounded-lg whitespace-nowrap transition-colors focus:outline-none focus:ring-2 focus:ring-offset-1 ${
                selectedCategory === category
                  ? 'bg-black text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
}

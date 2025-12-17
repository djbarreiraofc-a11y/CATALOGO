import { Instagram } from 'lucide-react';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#E8DDD8]/95 backdrop-blur-sm shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-[#9B7E6B]">Bianca Moura</h1>
        <a
          href="https://www.instagram.com/bianca.cilioss"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-[#1E7B5F] hover:text-[#166650] transition-all duration-300 hover:scale-110"
        >
          <Instagram size={24} />
          <span className="hidden sm:inline font-medium">@bianca.cilioss</span>
        </a>
      </div>
    </header>
  );
}

import { Instagram, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#E8DDD8] py-12 px-4 mt-16">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <h4 className="text-2xl font-bold text-[#9B7E6B] mb-4">Bianca Moura</h4>
            <p className="text-[#6B5B4F]">Design de Cílios Premium</p>
          </div>

          <div>
            <h5 className="text-lg font-bold text-[#9B7E6B] mb-4">Contato</h5>
            <a
              href="https://wa.me/5531991028853"
              className="flex items-center justify-center md:justify-start gap-2 text-[#1E7B5F] hover:text-[#166650] transition-colors duration-300 mb-2"
            >
              <Phone size={20} />
              <span>(31) 99102-8853</span>
            </a>
          </div>

          <div>
            <h5 className="text-lg font-bold text-[#9B7E6B] mb-4">Redes Sociais</h5>
            <a
              href="https://www.instagram.com/bianca.cilioss"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center md:justify-start gap-2 text-[#1E7B5F] hover:text-[#166650] transition-colors duration-300"
            >
              <Instagram size={20} />
              <span>@bianca.cilioss</span>
            </a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-[#D4C5BC] text-center text-[#8B7355]">
          <p>&copy; 2025 Bianca Moura. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}

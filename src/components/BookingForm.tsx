import { useState } from 'react';
import { Send } from 'lucide-react';

const procedures = [
  { name: 'Volume Brasileiro', price: 'R$ 165,00' },
  { name: 'Volume Fox', price: 'R$ 165,00' },
  { name: 'Volume Fox Marrom', price: 'R$ 165,00' },
  { name: 'Volume Europeu', price: 'R$ 165,00' },
  { name: 'Mega Volume', price: 'R$ 220,00' },
  { name: 'Volume Express', price: 'R$ 165,00 aplicação' },
];

export default function BookingForm() {
  const [selectedProcedure, setSelectedProcedure] = useState('');

  const handleWhatsAppClick = () => {
    if (!selectedProcedure) {
      alert('Por favor, selecione um procedimento.');
      return;
    }

    const message = `Olá Bianca! Quero agendar esse procedimento: ${selectedProcedure}.`;
    const whatsappNumber = '5531991028853';
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-2xl">
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8 md:p-12">
          <h3 className="text-3xl font-bold text-center text-[#9B7E6B] mb-3 relative inline-block left-1/2 -translate-x-1/2">
            Agende seu Procedimento
            <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent"></div>
          </h3>
          <p className="text-center text-[#8B7355] mb-8">Escolha o procedimento e entre em contato pelo WhatsApp</p>

          <div className="space-y-4">
            <label className="block text-lg font-semibold text-[#9B7E6B] mb-2">
              Selecione o Procedimento:
            </label>
            <select
              value={selectedProcedure}
              onChange={(e) => setSelectedProcedure(e.target.value)}
              className="w-full px-4 py-4 rounded-xl border-2 border-[#E8DDD8] bg-white text-[#6B5B4F] text-lg focus:border-[#D4AF37] focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/20 transition-all duration-300"
            >
              <option value="">Escolha um procedimento...</option>
              {procedures.map((proc, index) => (
                <option key={index} value={`${proc.name} - ${proc.price}`}>
                  {proc.name} - {proc.price}
                </option>
              ))}
            </select>

            <button
              onClick={handleWhatsAppClick}
              className="w-full mt-6 bg-gradient-to-r from-[#1E7B5F] to-[#166650] text-white font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3 text-lg group"
            >
              <Send className="group-hover:translate-x-1 transition-transform duration-300" size={24} />
              Enviar pelo WhatsApp
            </button>
          </div>

          <p className="text-center text-[#8B7355] mt-6 text-sm">
            Você será redirecionado para o WhatsApp
          </p>
        </div>
      </div>
    </section>
  );
}

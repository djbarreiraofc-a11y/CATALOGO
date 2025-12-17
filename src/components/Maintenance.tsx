export default function Maintenance() {
  return (
    <section className="py-16 px-4 bg-white/30 backdrop-blur-sm">
      <div className="container mx-auto max-w-6xl">
        <h3 className="text-4xl font-bold text-center text-[#9B7E6B] mb-12 relative inline-block left-1/2 -translate-x-1/2">
          Manutenções
          <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent"></div>
        </h3>

        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#D4AF37]/30 to-[#C9A66B]/30 rounded-3xl blur opacity-50 group-hover:opacity-75 transition duration-500"></div>
              <img
                src="/images/whatsapp_image_2025-12-16_at_20.45.04_(2).jpeg"
                alt="Manutenção de Cílios"
                className="relative rounded-3xl shadow-lg w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.02]"
              />
            </div>

            <div>
              <div className="bg-gradient-to-br from-[#F5E6E8] to-[#EDE0D4] rounded-2xl p-6 mb-6 transition-all duration-500 hover:shadow-lg hover:-translate-y-1 animate-sway">
                <h4 className="text-2xl font-bold text-[#9B7E6B] mb-3">
                  Manutenções dos Volumes
                </h4>
                <p className="text-3xl font-bold text-[#1E7B5F]">R$ 130,00</p>
                <p className="text-[#6B5B4F] mt-2">
                  Mantenha seus cílios sempre perfeitos com nossas manutenções regulares.
                </p>
              </div>

              <div className="bg-gradient-to-br from-[#F5E6E8] to-[#EDE0D4] rounded-2xl p-6 transition-all duration-500 hover:shadow-lg hover:-translate-y-1 animate-sway" style={{ animationDelay: '0.2s' }}>
                <h4 className="text-2xl font-bold text-[#9B7E6B] mb-3">
                  Manutenção Mega Volume
                </h4>
                <p className="text-3xl font-bold text-[#1E7B5F]">R$ 180,00</p>
                <p className="text-[#6B5B4F] mt-2">
                  Cuidado especial para manter o volume e a beleza do seu olhar.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

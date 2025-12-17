export default function About() {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="bg-white/70 backdrop-blur-sm rounded-3xl shadow-xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1">
              <h3 className="text-3xl font-bold text-[#9B7E6B] mb-6 relative inline-block">
                Sobre Mim
                <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-[#D4AF37]/50 to-transparent"></div>
              </h3>
              <p className="text-lg text-[#6B5B4F] leading-relaxed mb-4">
                Olá! Sou Bianca Moura, especialista em design de cílios com anos de experiência em realçar a beleza natural de cada cliente.
              </p>
              <p className="text-lg text-[#6B5B4F] leading-relaxed mb-4">
                Meu trabalho é pautado na excelência, cuidado e atenção aos detalhes. Utilizo técnicas avançadas e produtos de alta qualidade para garantir resultados impecáveis e duradouros.
              </p>
              <p className="text-lg text-[#6B5B4F] leading-relaxed">
                Cada procedimento é personalizado para realçar sua beleza única, proporcionando olhares marcantes e encantadores.
              </p>
            </div>
            <div className="order-1 md:order-2">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-[#D4AF37]/30 to-[#C9A66B]/30 rounded-3xl blur opacity-50 group-hover:opacity-75 transition duration-500"></div>
                <img
                  src="/images/whatsapp_image_2025-12-16_at_20.45.02.jpeg"
                  alt="Bianca Moura"
                  className="relative rounded-3xl shadow-lg w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

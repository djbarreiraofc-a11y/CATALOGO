const services = [
  {
    name: 'Volume Brasileiro',
    price: 'R$ 165,00',
    image: '/images/whatsapp_image_2025-12-16_at_20.44.16.jpeg',
  },
  {
    name: 'Volume Fox',
    price: 'R$ 165,00',
    image: '/images/whatsapp_image_2025-12-16_at_20.45.04_(1).jpeg',
  },
  {
    name: 'Volume Fox Marrom',
    price: 'R$ 165,00',
    image: '/images/whatsapp_image_2025-12-16_at_20.45.04.jpeg',
  },
  {
    name: 'Volume Europeu',
    price: 'R$ 165,00',
    image: '/images/whatsapp_image_2025-12-16_at_20.44.16.jpeg',
  },
  {
    name: 'Mega Volume',
    price: 'R$ 220,00',
    image: '/images/whatsapp_image_2025-12-16_at_20.45.04_(1).jpeg',
  },
  {
    name: 'Volume Express',
    price: 'R$ 165,00',
    image: '/images/whatsapp_image_2025-12-16_at_20.45.04.jpeg',
  },
];

export default function Services() {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-7xl">
        <h3 className="text-4xl font-bold text-center text-[#9B7E6B] mb-4 relative inline-block left-1/2 -translate-x-1/2">
          Nossos Procedimentos
          <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent"></div>
        </h3>
        <p className="text-center text-[#8B7355] mb-12 text-lg">Escolha o procedimento perfeito para você</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 animate-sway"
              style={{
                animationDelay: `${index * 0.1}s`,
              }}
            >
              <div className="relative overflow-hidden h-64">
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-2"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold text-[#9B7E6B] mb-2 group-hover:text-[#8B7355] transition-colors duration-300">
                  {service.name}
                </h4>
                <p className="text-2xl font-bold text-[#1E7B5F] group-hover:scale-110 transition-transform duration-300 inline-block">
                  {service.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { Link } from "react-router";
import { Home, Utensils, Bed, Briefcase, Wrench, Sofa, ArrowRight } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: Home,
      title: "Living Room Design",
      desc: "Create inviting spaces perfect for relaxation and entertainment with premium materials and thoughtful layouts",
      image: "https://images.unsplash.com/photo-1705326701287-346fc37a2c86?w=600&q=80",
      features: ["Custom furniture selection", "Lighting design", "Color consultation"]
    },
    {
      icon: Utensils,
      title: "Modular Kitchen",
      desc: "Functional and beautiful kitchen solutions tailored to your needs with state-of-the-art appliances",
      image: "https://images.unsplash.com/photo-1683629357935-f3f4777ddf41?w=600&q=80",
      features: ["Space optimization", "Premium materials", "Smart storage solutions"]
    },
    {
      icon: Bed,
      title: "Bedroom Styling",
      desc: "Peaceful retreats designed for comfort and serenity with luxurious finishes and calming palettes",
      image: "https://images.unsplash.com/photo-1642541070065-3912f347e7c6?w=600&q=80",
      features: ["Custom wardrobes", "Mood lighting", "Textile selection"]
    },
    {
      icon: Briefcase,
      title: "Office Spaces",
      desc: "Professional environments that boost productivity with ergonomic design and inspiring aesthetics",
      image: "https://images.unsplash.com/photo-1595846723416-99a641e1231a?w=600&q=80",
      features: ["Ergonomic layouts", "Tech integration", "Soundproofing"]
    },
    {
      icon: Wrench,
      title: "Renovation",
      desc: "Complete transformation of your existing spaces with minimal disruption and maximum impact",
      image: "https://images.unsplash.com/photo-1667584523543-d1d9cc828a15?w=600&q=80",
      features: ["Structural changes", "Modern updates", "Project management"]
    },
    {
      icon: Sofa,
      title: "Custom Furniture",
      desc: "Bespoke pieces crafted to match your vision with artisan quality and unique designs",
      image: "https://images.unsplash.com/photo-1768946131536-39b5f3ec329d?w=600&q=80",
      features: ["Handcrafted pieces", "Material selection", "Unique designs"]
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-28 px-6 text-center bg-gradient-to-br from-[#D8C3A5] to-[#F7F2ED]">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-6xl mb-6 text-[#3E2C23] font-bold">Our Interior Design Services</h1>
          <p className="text-2xl text-[#3E2C23] opacity-80 leading-relaxed">
            Comprehensive solutions for every space in your home or office
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((service) => (
              <div key={service.title} className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
                <div className="h-64 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-8">
                  <service.icon className="w-12 h-12 text-[#A47551] mb-5" />
                  <h3 className="text-3xl mb-4 text-[#3E2C23]">{service.title}</h3>
                  <p className="text-[#3E2C23] opacity-70 mb-6 leading-relaxed">{service.desc}</p>

                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2 text-[#3E2C23] opacity-70">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#A47551]"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Link
                    to="/contact"
                    className="text-[#A47551] hover:text-[#8B5E3C] font-medium inline-flex items-center gap-2 group-hover:gap-3 transition-all"
                  >
                    Get Started
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-[#D8C3A5]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl mb-6 text-[#3E2C23] font-bold">
            Not sure which service you need?
          </h2>
          <p className="text-xl text-[#3E2C23] opacity-80 mb-10 leading-relaxed">
            Book a free consultation and we'll help you find the perfect solution for your space
          </p>
          <Link
            to="/contact"
            className="bg-[#A47551] text-white px-12 py-5 rounded-2xl hover:bg-[#8B5E3C] transition-all shadow-xl hover:shadow-2xl inline-flex items-center gap-3 text-lg font-medium"
          >
            Schedule Free Consultation
            <ArrowRight className="w-6 h-6" />
          </Link>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl mb-4 text-[#3E2C23] font-bold">Our Process</h2>
            <p className="text-xl text-[#3E2C23] opacity-70">
              From concept to completion
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Consultation", desc: "We discuss your vision and requirements" },
              { step: "02", title: "Design", desc: "Our team creates custom design concepts" },
              { step: "03", title: "Execution", desc: "Professional implementation with care" },
              { step: "04", title: "Reveal", desc: "Enjoy your beautiful new space" }
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="text-6xl text-[#A47551] mb-4 font-bold opacity-30">{item.step}</div>
                <h3 className="text-2xl mb-3 text-[#3E2C23]">{item.title}</h3>
                <p className="text-[#3E2C23] opacity-70">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

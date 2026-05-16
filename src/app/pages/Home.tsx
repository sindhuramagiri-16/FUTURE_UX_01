import { Link } from "react-router";
import { ArrowRight, Home as HomeIcon, Briefcase, Wrench, Sofa, Award, Users, Star, Clock } from "lucide-react";

export default function Home() {
  const portfolioImages = [
    "https://images.unsplash.com/photo-1724582586529-62622e50c0b3?w=1080&q=80",
    "https://images.unsplash.com/photo-1642541070065-3912f347e7c6?w=1080&q=80",
    "https://images.unsplash.com/photo-1722605090433-41d1183a792d?w=1080&q=80",
    "https://images.unsplash.com/photo-1595846723416-99a641e1231a?w=1080&q=80",
    "https://images.unsplash.com/photo-1708113388262-17fdf0e21205?w=1080&q=80",
    "https://images.unsplash.com/photo-1699869653495-fe26f4c70b3e?w=1080&q=80"
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      image: "https://images.unsplash.com/photo-1664638413509-6aa486866f9a?w=400&q=80",
      text: "HOME & HUE transformed our apartment into a dream space. The attention to detail and warmth they brought to every corner exceeded our expectations.",
      rating: 5
    },
    {
      name: "Rajesh Kumar",
      image: "https://images.unsplash.com/photo-1664638413739-d571590cb51b?w=400&q=80",
      text: "Working with this team was an absolute pleasure. They understood our vision and created a home office that's both beautiful and functional.",
      rating: 5
    },
    {
      name: "Ananya Reddy",
      image: "https://images.unsplash.com/photo-1646617747553-7d7ba714d80d?w=400&q=80",
      text: "The renovation of our living room was seamless. Professional, creative, and truly understanding of what makes a house feel like home.",
      rating: 5
    }
  ];

  return (
    <div>
      {/* Hero Section with Background Image */}
      <section className="relative h-[700px] flex items-center justify-center text-center px-6 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1704040686413-2c607dbd2f06?w=1920&q=80')` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-black/30"></div>
        </div>

        <div className="relative z-10 max-w-5xl text-white">
          <h1 className="text-7xl mb-6 font-bold">
            Designing Spaces That Feel Like Home
          </h1>
          <p className="text-2xl mb-10 opacity-90">
            Luxury interiors crafted with warmth, comfort, and timeless elegance.
          </p>
          <div className="flex gap-6 justify-center">
            <Link
              to="/services"
              className="bg-[#A47551] text-white px-10 py-4 rounded-2xl hover:bg-[#8B5E3C] transition-all shadow-lg hover:shadow-xl inline-flex items-center gap-3 font-medium"
            >
              Explore Designs
              <ArrowRight className="w-6 h-6" />
            </Link>
            <Link
              to="/contact"
              className="bg-white text-[#3E2C23] px-10 py-4 rounded-2xl hover:bg-[#F7F2ED] transition-all shadow-lg hover:shadow-xl border-2 border-white font-medium"
            >
              Free Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section with Images */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl mb-4 text-[#3E2C23] font-bold">Our Services</h2>
            <p className="text-xl text-[#3E2C23] opacity-70">
              Comprehensive design solutions for every space
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Residential Interior Design",
                desc: "Transform your home into a sanctuary",
                icon: HomeIcon,
                image: "https://images.unsplash.com/photo-1705326701287-346fc37a2c86?w=600&q=80"
              },
              {
                title: "Office & Workspace Design",
                desc: "Create productive and inspiring environments",
                icon: Briefcase,
                image: "https://images.unsplash.com/photo-1737233030536-247c1379d82c?w=600&q=80"
              },
              {
                title: "Home Renovation",
                desc: "Breathe new life into existing spaces",
                icon: Wrench,
                image: "https://images.unsplash.com/photo-1667584523543-d1d9cc828a15?w=600&q=80"
              },
              {
                title: "Custom Furniture Design",
                desc: "Bespoke pieces crafted for your vision",
                icon: Sofa,
                image: "https://images.unsplash.com/photo-1768946131536-39b5f3ec329d?w=600&q=80"
              },
              {
                title: "Modular Kitchen",
                desc: "Functional and beautiful kitchen solutions",
                icon: Wrench,
                image: "https://images.unsplash.com/photo-1683629357935-f3f4777ddf41?w=600&q=80"
              },
              {
                title: "Bedroom Styling",
                desc: "Peaceful retreats designed for comfort",
                icon: HomeIcon,
                image: "https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?w=600&q=80"
              }
            ].map((service) => (
              <div key={service.title} className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden">
                <div className="h-56 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-8">
                  <service.icon className="w-10 h-10 text-[#A47551] mb-4" />
                  <h3 className="text-2xl mb-3 text-[#3E2C23]">{service.title}</h3>
                  <p className="text-[#3E2C23] opacity-70 mb-6">{service.desc}</p>
                  <Link to="/services" className="text-[#A47551] hover:underline inline-flex items-center gap-2 font-medium">
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 px-6 bg-[#D8C3A5]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl mb-4 text-[#3E2C23] font-bold">Why Choose Us</h2>
            <p className="text-xl text-[#3E2C23] opacity-80">
              Excellence in every detail
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Award, stat: "10+ Years", label: "Experience" },
              { icon: Users, stat: "500+", label: "Projects Completed" },
              { icon: Sofa, stat: "Premium", label: "Materials" },
              { icon: Star, stat: "4.9", label: "Client Rating" }
            ].map((item) => (
              <div key={item.label} className="bg-white p-10 rounded-2xl text-center shadow-lg hover:shadow-xl transition-shadow">
                <item.icon className="w-14 h-14 text-[#A47551] mx-auto mb-4" />
                <div className="text-5xl text-[#A47551] mb-3 font-bold">{item.stat}</div>
                <div className="text-lg text-[#3E2C23]">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Gallery */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl mb-4 text-[#3E2C23] font-bold">Our Portfolio</h2>
            <p className="text-xl text-[#3E2C23] opacity-70">
              Recent projects we're proud of
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolioImages.map((image, index) => (
              <div
                key={index}
                className="group relative h-80 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all cursor-pointer"
              >
                <img
                  src={image}
                  alt={`Portfolio ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <p className="text-white text-lg font-medium">View Project</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6 bg-[#F7F2ED]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl mb-4 text-[#3E2C23] font-bold">Client Testimonials</h2>
            <p className="text-xl text-[#3E2C23] opacity-70">
              What our clients say about us
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-shadow">
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#A47551] text-[#A47551]" />
                  ))}
                </div>
                <p className="text-[#3E2C23] opacity-80 mb-8 italic leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-[#3E2C23] font-medium">{testimonial.name}</p>
                    <p className="text-[#3E2C23] opacity-60 text-sm">Verified Client</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-28 px-6 bg-[#A47551] text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-6xl mb-6 text-white font-bold">
            Ready To Transform Your Space?
          </h2>
          <p className="text-xl text-white opacity-90 mb-10">
            Let's create the home of your dreams together
          </p>
          <Link
            to="/contact"
            className="bg-white text-[#A47551] px-12 py-5 rounded-2xl hover:bg-[#F7F2ED] transition-all shadow-xl hover:shadow-2xl inline-flex items-center gap-3 text-lg font-medium"
          >
            Schedule Consultation
            <ArrowRight className="w-7 h-7" />
          </Link>
        </div>
      </section>
    </div>
  );
}

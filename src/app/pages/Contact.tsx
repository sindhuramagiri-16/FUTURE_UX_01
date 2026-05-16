import { useState } from "react";
import { Star, Users, Clock, Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    budget: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your inquiry! We'll contact you within 24 hours.");
    setFormData({ name: "", email: "", phone: "", projectType: "", budget: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="py-28 px-6 text-center bg-gradient-to-br from-[#D8C3A5] to-[#F7F2ED]">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-6xl mb-6 text-[#3E2C23] font-bold">Let's Create Your Dream Space</h1>
          <p className="text-2xl text-[#3E2C23] opacity-80">
            Fill out the form below and we'll get back to you within 24 hours
          </p>
        </div>
      </section>

      {/* Trust Elements */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-10">
            <div className="text-center">
              <Star className="w-16 h-16 text-[#A47551] mx-auto mb-4" />
              <div className="text-5xl text-[#3E2C23] mb-2 font-bold">4.9</div>
              <div className="text-lg text-[#3E2C23] opacity-70">Average Rating</div>
              <div className="text-sm text-[#3E2C23] opacity-50 mt-1">From our clients</div>
            </div>
            <div className="text-center">
              <Users className="w-16 h-16 text-[#A47551] mx-auto mb-4" />
              <div className="text-5xl text-[#3E2C23] mb-2 font-bold">500+</div>
              <div className="text-lg text-[#3E2C23] opacity-70">Happy Clients</div>
              <div className="text-sm text-[#3E2C23] opacity-50 mt-1">And counting</div>
            </div>
            <div className="text-center">
              <Clock className="w-16 h-16 text-[#A47551] mx-auto mb-4" />
              <div className="text-5xl text-[#3E2C23] mb-2 font-bold">Free</div>
              <div className="text-lg text-[#3E2C23] opacity-70">Consultation</div>
              <div className="text-sm text-[#3E2C23] opacity-50 mt-1">No obligation</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form with Image */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image Side */}
            <div className="h-full min-h-[600px] rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1664638413509-6aa486866f9a?w=800&q=80"
                alt="Interior Designer Consultation"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Form Side */}
            <div className="bg-white p-12 rounded-3xl shadow-2xl">
              <h2 className="text-4xl mb-3 text-[#3E2C23] font-bold">Get in Touch</h2>
              <p className="text-lg text-[#3E2C23] opacity-70 mb-8">
                We'd love to hear about your project
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-[#3E2C23] mb-2 font-medium">Name *</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-5 py-4 border-2 border-[#D8C3A5] rounded-xl focus:outline-none focus:border-[#A47551] transition-colors bg-[#F7F2ED]"
                    placeholder="Your full name"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[#3E2C23] mb-2 font-medium">Email *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-5 py-4 border-2 border-[#D8C3A5] rounded-xl focus:outline-none focus:border-[#A47551] transition-colors bg-[#F7F2ED]"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-[#3E2C23] mb-2 font-medium">Phone *</label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-5 py-4 border-2 border-[#D8C3A5] rounded-xl focus:outline-none focus:border-[#A47551] transition-colors bg-[#F7F2ED]"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[#3E2C23] mb-2 font-medium">Project Type *</label>
                    <select
                      name="projectType"
                      required
                      value={formData.projectType}
                      onChange={handleChange}
                      className="w-full px-5 py-4 border-2 border-[#D8C3A5] rounded-xl focus:outline-none focus:border-[#A47551] transition-colors bg-[#F7F2ED]"
                    >
                      <option value="">Select a project type</option>
                      <option value="residential">Residential Interior</option>
                      <option value="office">Office Design</option>
                      <option value="renovation">Renovation</option>
                      <option value="custom">Custom Furniture</option>
                      <option value="kitchen">Modular Kitchen</option>
                      <option value="bedroom">Bedroom Styling</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[#3E2C23] mb-2 font-medium">Budget Range *</label>
                    <select
                      name="budget"
                      required
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-5 py-4 border-2 border-[#D8C3A5] rounded-xl focus:outline-none focus:border-[#A47551] transition-colors bg-[#F7F2ED]"
                    >
                      <option value="">Select your budget</option>
                      <option value="5L-10L">₹5,00,000 - ₹10,00,000</option>
                      <option value="10L-25L">₹10,00,000 - ₹25,00,000</option>
                      <option value="25L-50L">₹25,00,000 - ₹50,00,000</option>
                      <option value="50L+">₹50,00,000+</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[#3E2C23] mb-2 font-medium">Message *</label>
                  <textarea
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-5 py-4 border-2 border-[#D8C3A5] rounded-xl focus:outline-none focus:border-[#A47551] transition-colors bg-[#F7F2ED] resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#A47551] text-white px-8 py-5 rounded-xl hover:bg-[#8B5E3C] transition-all shadow-lg hover:shadow-xl text-lg font-medium"
                >
                  Book Free Consultation
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-24 px-6 bg-[#F7F2ED]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl mb-4 text-[#3E2C23] font-bold">Visit Our Studio</h2>
            <p className="text-xl text-[#3E2C23] opacity-70">
              We'd love to meet you in person
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            <div className="bg-white p-10 rounded-2xl text-center shadow-lg">
              <Mail className="w-12 h-12 text-[#A47551] mx-auto mb-4" />
              <h3 className="text-2xl mb-3 text-[#3E2C23]">Email</h3>
              <p className="text-[#3E2C23] opacity-70">hello@homeandhue.com</p>
            </div>

            <div className="bg-white p-10 rounded-2xl text-center shadow-lg">
              <Phone className="w-12 h-12 text-[#A47551] mx-auto mb-4" />
              <h3 className="text-2xl mb-3 text-[#3E2C23]">Phone</h3>
              <p className="text-[#3E2C23] opacity-70">+91 98765 43210</p>
            </div>

            <div className="bg-white p-10 rounded-2xl text-center shadow-lg">
              <MapPin className="w-12 h-12 text-[#A47551] mx-auto mb-4" />
              <h3 className="text-2xl mb-3 text-[#3E2C23]">Location</h3>
              <p className="text-[#3E2C23] opacity-70">Road No 36, Jubilee Hills<br />Hyderabad, Telangana 500033</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

"use client";

import Navbar from "@/components/Navbar";
import {
  ClipboardDocumentIcon,
  ShieldCheckIcon,
  LightBulbIcon,
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";

// Swiper styles
import "swiper/css";
import "swiper/css/autoplay";

// ✔ Correct import for Swiper v11+
import { Autoplay } from "swiper/modules";

export default function Home() {
  const services = [
    {
      title: "Commercial Cleaning",
      description:
        "Maintain spotless offices and facilities with our professional cleaning services.",
      icon: ClipboardDocumentIcon,
    },
    {
      title: "Sanitization",
      description:
        "Protect your environment with our top-tier sanitization solutions.",
      icon: ShieldCheckIcon,
    },
    {
      title: "Consultancy",
      description:
        "Expert guidance to maintain hygiene standards and compliance.",
      icon: LightBulbIcon,
    },
  ];

  return (
    <main className="relative min-h-screen bg-primary">
      <Navbar />

      {/* Hero Section */}
      <section className="relative w-full h-screen flex items-center justify-center text-center overflow-hidden">
        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src="/assets/videos/hero-video.mp4" type="video/mp4" />
        </video>

        {/* Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-primary/70"></div>

        {/* Hero Content */}
        <div className="relative z-10 px-6 max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold text-orange">
            Professional Hygiene & Cleaning Solutions You Can Trust
          </h1>
          <p className="mt-6 text-lg text-gray-200 max-w-2xl mx-auto">
            Creating safe, clean, and healthy environments for businesses,
            institutions, and residences since 2016.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-accent text-white px-6 py-3 rounded-lg hover:bg-accent/90 transition">
              Request a Quote
            </button>
            <button className="border border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:text-primary transition">
              View Services
            </button>
          </div>
        </div>
      </section>

            {/* About Section */}
      <section className="py-24 bg-white text-primary">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

          {/* Text */}
          <div className="space-y-6">
            <div>
              <span className="inline-block h-1 w-16 bg-orange mb-4"></span>
              <h2 className="text-3xl md:text-4xl font-bold">
                Why Choose Sarana Consultancy?
              </h2>
            </div>

            <p className="text-accent leading-relaxed">
              With years of experience in professional hygiene services,
              we guarantee reliability, quality, and safety for all our clients.
              Our team uses only the best equipment and eco–friendly products
              to ensure your environment stays clean and healthy.
            </p>

            {/* Value Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="flex items-start gap-3">
                <ShieldCheckIcon className="h-6 w-6 text-orange flex-shrink-0" />
                <p className="text-gray-700">Certified & trained hygiene staff</p>
              </div>
              <div className="flex items-start gap-3">
                <LightBulbIcon className="h-6 w-6 text-orange flex-shrink-0" />
                <p className="text-gray-700">Expert guidance & consultancy</p>
              </div>
              <div className="flex items-start gap-3">
                <ClipboardDocumentIcon className="h-6 w-6 text-orange flex-shrink-0" />
                <p className="text-gray-700">Reliable and efficient service delivery</p>
              </div>
              <div className="flex items-start gap-3">
                <ShieldCheckIcon className="h-6 w-6 text-orange flex-shrink-0" />
                <p className="text-gray-700">Eco-friendly & approved products</p>
              </div>
            </div>

            <button className="mt-4 inline-block bg-accent px-6 py-3 rounded-lg text-white hover:bg-accent/90 transition">
              Learn More
            </button>
          </div>

          {/* Overlapping Images Collage */}
          <div className="relative w-full h-[400px] md:h-[500px]">
            <img
              src="/assets/images/about-image.jpg"
              alt="Service 1"
              className="absolute top-0 left-0 w-2/3 h-2/3 rounded-2xl shadow-2xl object-cover z-10"
            />
            <img
              src="/assets/images/about-image.jpg"
              alt="Service 2"
              className="absolute top-12 right-0 w-1/2 h-1/2 rounded-2xl shadow-2xl object-cover border-4 border-white z-20"
            />
            <img
              src="/assets/images/about-image.jpg"
              alt="Service 3"
              className="absolute bottom-0 left-1/9 w-1/2 h-1/2 rounded-2xl shadow-2xl object-cover border-4 border-white z-10"
            />
            <img
              src="/assets/images/about-image.jpg"
              alt="Service 4"
              className="absolute bottom-4 right-1/9 w-1/3 h-1/3 rounded-2xl shadow-2xl object-cover border-4 border-white z-30"
            />
          </div>

        </div>
      </section>



          {/* Services Section */}
      <section className="py-24 bg-gray-50 text-primary">
        <div className="max-w-7xl mx-auto px-6 text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            Our Services
          </h2>
          {/* Accent Line */}
          <span className="inline-block h-1 w-16 bg-orange mt-2"></span>
        </div>

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-xl shadow-md p-8 text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
              >
                <div className="flex justify-center mb-4">
                  <Icon className="h-12 w-12 text-accent" />
                </div>
                <h3 className="font-semibold text-xl mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            );
          })}
        </div>
      </section>


      {/* Clients Carousel Section */}
      <section className="py-24 bg-white text-primary text-center">
        <div className="max-w-7xl mx-auto px-6 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            Our Clients
          </h2>
          {/* Accent Line */}
          <span className="inline-block h-1 w-16 bg-orange mt-2"></span>
        </div>

        <Swiper
          spaceBetween={50}
          slidesPerView={3}
          loop
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
          modules={[Autoplay]} // ✔ Correct integration
          className="max-w-7xl mx-auto"
        >
          <SwiperSlide>
            <img
              src="/assets/clients/client1.png"
              alt="Client 1"
              className="h-16 object-contain mx-auto"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/assets/clients/client1.png"
              alt="Client 2"
              className="h-16 object-contain mx-auto"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/assets/clients/client1.png"
              alt="Client 3"
              className="h-16 object-contain mx-auto"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/assets/clients/client1.png"
              alt="Client 4"
              className="h-16 object-contain mx-auto"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/assets/clients/client1.png"
              alt="Client 5"
              className="h-16 object-contain mx-auto"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/assets/clients/client1.png"
              alt="Client 6"
              className="h-16 object-contain mx-auto"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/assets/clients/client1.png"
              alt="Client 7"
              className="h-16 object-contain mx-auto"
            />
          </SwiperSlide>
        </Swiper>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-gray-300 py-16 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">

          {/* Brand / Logo */}
          <div className="flex flex-col items-start">
            <img
              src="/assets/logo.png" 
              alt="Sarana Consultancy Logo"
              className="h-30 w-auto mb-4"
            />
            <p className="text-gray-400 leading-relaxed">
              Professional hygiene, cleaning, and sanitization services for businesses,
              institutions, and residential environments.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li className="hover:text-orange transition cursor-pointer">Home</li>
              <li className="hover:text-orange transition cursor-pointer">About Us</li>
              <li className="hover:text-orange transition cursor-pointer">Services</li>
              <li className="hover:text-orange transition cursor-pointer">Contact</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
            <ul className="space-y-4">

              <li className="flex items-start gap-3">
                <MapPinIcon className="h-6 w-6 text-orange" />
                <span>Peponi road<br/>Nairobi, Kenya</span>
              </li>

              <li className="flex items-start gap-3">
                <PhoneIcon className="h-6 w-6 text-orange" />
                <span>+254 751 435511<br/>+254 724 435511</span>
              </li>

              <li className="flex items-start gap-3">
                <EnvelopeIcon className="h-6 w-6 text-orange" />
                <span>hygiene@saranaconsultants.co.ke</span>
              </li>

            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Follow Us</h4>
            <div className="flex gap-4">

              <a className="p-3 bg-white/10 rounded-lg hover:bg-accent transition">
                <Facebook className="h-6 w-6" />
              </a>

              <a className="p-3 bg-white/10 rounded-lg hover:bg-accent transition">
                <Instagram className="h-6 w-6" />
              </a>

              <a className="p-3 bg-white/10 rounded-lg hover:bg-accent transition">
                <Linkedin className="h-6 w-6" />
              </a>

            </div>
          </div>

        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-center text-gray-400">
          &copy; {new Date().getFullYear()} Sarana Consultancy. All rights reserved.
        </div>
      </footer>


    </main>
  );
}

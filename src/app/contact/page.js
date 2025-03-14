"use client";
import Navbar from "../components/nav";
import Footer from "../components/footer";
import { motion } from "framer-motion";
import { useState } from "react";
import { HiCalendar } from "react-icons/hi2";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventDate: "",
    eventType: "wedding",
    venue: "",
    guestCount: "",
    message: "",
    hearAbout: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen py-12 lg:py-24 px-4">
        <div className="container mx-auto max-w-6xl">
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-2xl lg:text-[2.5rem] font-medium text-light leading-[1.2] tracking-[-0.02em] mb-6">
              Let&apos;s Create Something Beautiful
            </h1>
            <p className="text-base lg:text-xl text-light/80 max-w-2xl mx-auto leading-[1.5]">
              I&apos;m excited to hear about your special day. Fill out the form
              below, and I&apos;ll get back to you within 24-48 hours.
            </p>
          </motion.div>

          {/* Contact Form Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-light/10 backdrop-blur-[6px] rounded-[1rem] lg:rounded-[1.5rem] p-6 lg:p-10 border border-light/20"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label className="block text-light/90 mb-2 text-sm">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-dark/30 hover:bg-dark/40 focus:bg-dark/40 backdrop-blur-md rounded-lg px-4 py-3 text-light placeholder:text-light/50 focus:outline-none border border-light/10 focus:ring-2 focus:ring-light/30 transition-all duration-200"
                    placeholder="Enter your full name"
                  />
                </div>

                {/* Email & Phone Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-light/90 mb-2 text-sm">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-dark/30 hover:bg-dark/40 focus:bg-dark/40 backdrop-blur-md rounded-lg px-4 py-3 text-light placeholder:text-light/50 focus:outline-none border border-light/10 focus:ring-2 focus:ring-light/30 transition-all duration-200"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-light/90 mb-2 text-sm">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-dark/30 hover:bg-dark/40 focus:bg-dark/40 backdrop-blur-md rounded-lg px-4 py-3 text-light placeholder:text-light/50 focus:outline-none border border-light/10 focus:ring-2 focus:ring-light/30 transition-all duration-200"
                      placeholder="(123) 456-7890"
                    />
                  </div>
                </div>

                {/* Event Details Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-light/90 mb-2 text-sm">
                      Event Date
                    </label>
                    <div className="relative">
                      <input
                        type="date"
                        name="eventDate"
                        value={formData.eventDate}
                        onChange={handleChange}
                        className="w-full bg-dark/30 hover:bg-dark/40 focus:bg-dark/40 backdrop-blur-md rounded-lg px-4 py-3 text-light placeholder:text-light/50 focus:outline-none border border-light/10 focus:ring-2 focus:ring-light/30 transition-all duration-200"
                      />
                      <HiCalendar
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-light/60"
                        size={20}
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-light/90 mb-2 text-sm">
                      Event Type *
                    </label>
                    <select
                      name="eventType"
                      required
                      value={formData.eventType}
                      onChange={handleChange}
                      className="w-full bg-dark/30 hover:bg-dark/40 focus:bg-dark/40 backdrop-blur-md rounded-lg px-4 py-3 text-light focus:outline-none border border-light/10 focus:ring-2 focus:ring-light/30 transition-all duration-200"
                    >
                      <option value="wedding">Wedding</option>
                      <option value="engagement">Engagement</option>
                      <option value="portrait">Portrait</option>
                      <option value="event">Other Event</option>
                    </select>
                  </div>
                </div>

                {/* Venue & Guest Count */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-light/90 mb-2 text-sm">
                      Venue/Location
                    </label>
                    <input
                      type="text"
                      name="venue"
                      value={formData.venue}
                      onChange={handleChange}
                      className="w-full bg-dark/30 hover:bg-dark/40 focus:bg-dark/40 backdrop-blur-md rounded-lg px-4 py-3 text-light placeholder:text-light/50 focus:outline-none border border-light/10 focus:ring-2 focus:ring-light/30 transition-all duration-200"
                      placeholder="Enter venue or city"
                    />
                  </div>
                  <div>
                    <label className="block text-light/90 mb-2 text-sm">
                      Expected Guest Count
                    </label>
                    <input
                      type="number"
                      name="guestCount"
                      value={formData.guestCount}
                      onChange={handleChange}
                      className="w-full bg-dark/30 hover:bg-dark/40 focus:bg-dark/40 backdrop-blur-md rounded-lg px-4 py-3 text-light placeholder:text-light/50 focus:outline-none border border-light/10 focus:ring-2 focus:ring-light/30 transition-all duration-200"
                      placeholder="Approximate number"
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-light/90 mb-2 text-sm">
                    Tell Me About Your Vision *
                  </label>
                  <textarea
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full bg-dark/30 hover:bg-dark/40 focus:bg-dark/40 backdrop-blur-md rounded-lg px-4 py-3 text-light placeholder:text-light/50 focus:outline-none border border-light/10 focus:ring-2 focus:ring-light/30 transition-all duration-200"
                    placeholder="Share your story, vision, and any specific details about your special day..."
                  ></textarea>
                </div>

                {/* How did you hear about us */}
                <div>
                  <label className="block text-light/90 mb-2 text-sm">
                    How Did You Hear About Me?
                  </label>
                  <select
                    name="hearAbout"
                    value={formData.hearAbout}
                    onChange={handleChange}
                    className="w-full bg-dark/30 hover:bg-dark/40 focus:bg-dark/40 backdrop-blur-md rounded-lg px-4 py-3 text-light focus:outline-none border border-light/10 focus:ring-2 focus:ring-light/30 transition-all duration-200"
                  >
                    <option value="">Select an option</option>
                    <option value="instagram">Instagram</option>
                    <option value="google">Google Search</option>
                    <option value="referral">Friend/Family Referral</option>
                    <option value="wedding_wire">Wedding Wire</option>
                    <option value="the_knot">The Knot</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full text-sm lg:text-base font-medium uppercase px-8 py-4 bg-light rounded-full text-dark whitespace-nowrap hover:bg-light/90 transition-all"
                >
                  Send Message
                </button>
              </form>
            </motion.div>

            {/* Info Cards */}
            <div className="space-y-6">
              {/* Quick Response Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-light/10 backdrop-blur-[6px] rounded-[1rem] lg:rounded-[1.5rem] p-6 lg:p-10 border border-light/20"
              >
                <h3 className="text-lg lg:text-[1.75rem] font-medium text-light tracking-[-0.02em] leading-[1.2] mb-4">
                  Quick Response Time
                </h3>
                <p className="text-light/80 text-sm lg:text-base leading-[1.5]">
                  I understand the importance of timely communication. You can
                  expect to hear back from me within 24-48 hours. For urgent
                  matters, please feel free to reach out via phone.
                </p>
              </motion.div>

              {/* Contact Info Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-light/10 backdrop-blur-[6px] rounded-[1rem] lg:rounded-[1.5rem] p-6 lg:p-10 border border-light/20"
              >
                <h3 className="text-lg lg:text-[1.75rem] font-medium text-light tracking-[-0.02em] leading-[1.2] mb-4">
                  Let&apos;s Connect
                </h3>
                <div className="space-y-4">
                  <p className="text-light/80 text-sm lg:text-base leading-[1.5]">
                    Email: yusongshiphoto@gmail.com
                  </p>

                  <p className="text-light/80 text-sm lg:text-base leading-[1.5]">
                    Based in New York City & Virginia
                    <br />
                    Available for travel worldwide
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

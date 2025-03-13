"use client";
import Navbar from "../components/nav";
import Footer from "../components/footer";
import { motion } from "framer-motion";

const services = [
  {
    title: "Weddings",
    description:
      "Weddings are unique events that deserve personalized attention. I offer customized packages tailored to your specific needs, ensuring every moment is beautifully captured.",
    price: "Starting at $3,900",
    includes: [
      "Custom day-of timeline",
      "Edited, high-resolution digital images",
      "Complimentary engagement session",
      "Online gallery for sharing with friends and family",
      "Full gallery delivered within 4-6 weeks",
    ],
  },
  {
    title: "Engagement Sessions",
    description:
      "Let's create memorable photos of you and your partner (and yes, you can bring your pets, too)!",
    price: "$650",
    includes: [
      "Up to 2 hours of photography",
      "Unlimited outfit changes",
      "Edited, high-resolution digital images",
      "Online gallery for sharing",
      "Full gallery delivered within 3-4 weeks",
    ],
  },
  {
    title: "Small Shindigs",
    description:
      "Perfect for city hall ceremonies, elopements, and intimate events.",
    price: "Starting at $1,300",
    includes: [
      "Up to 4 hours of photography",
      "Edited, high-resolution digital images",
      "Full gallery delivered within 3-4 weeks",
      "Online gallery for sharing",
    ],
  },
  {
    title: "Event Photography",
    description:
      "Professional coverage for your special events, ensuring every moment is captured.",
    price: "Starting at $350/hour",
    includes: [
      "Hourly coverage tailored to your event",
      "Edited, high-resolution digital images",
      "Online gallery for viewing and sharing",
    ],
  },
  {
    title: "Portrait Sessions",
    description:
      "Personalized portrait sessions to capture your unique personality.",
    price: "$400",
    includes: [
      "Up to 1.5 hours of photography",
      "Unlimited outfit changes",
      "Edited, high-resolution digital images",
      "Online gallery for viewing and sharing",
    ],
  },
];

export default function Investment() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen py-24 px-4">
        <div className="container mx-auto max-w-6xl">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-20"
          >
            <h1 className="text-2xl lg:text-[2.5rem] font-medium text-light leading-[1.2] tracking-[-0.02em] mb-6">
              Investment
            </h1>
            <p className="text-base lg:text-xl text-light/80 max-w-2xl mx-auto leading-[1.5]">
              Choose from our carefully crafted packages, each designed to
              provide exceptional value and unforgettable memories.
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-16">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-light/10 backdrop-blur-[6px] rounded-[1.5rem] p-8 lg:p-10 border border-light/20"
              >
                <div className="flex flex-col h-full">
                  <h2 className="text-xl lg:text-[1.75rem] font-medium text-light tracking-[-0.02em] leading-[1.2] mb-3">
                    {service.title}
                  </h2>
                  <p className="text-light/90 text-base lg:text-lg mb-6 leading-[1.5]">
                    {service.description}
                  </p>
                  <div className="mt-auto">
                    <p className="text-xl lg:text-2xl font-medium text-light mb-6">
                      {service.price}
                    </p>
                    <div className="space-y-2">
                      {service.includes.map((item, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <span className="text-light/90 text-lg">•</span>
                          <p className="text-light/80 text-base leading-[1.5]">
                            {item}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Notes */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="bg-light/10 backdrop-blur-[6px] rounded-[1.5rem] p-8 lg:p-10 border border-light/20"
          >
            <h2 className="text-xl lg:text-[1.75rem] font-medium text-light tracking-[-0.02em] leading-[1.2] mb-6">
              Additional Notes
            </h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-light/90 text-lg">•</span>
                <p className="text-light/80 text-base leading-[1.5]">
                  <strong className="text-light">Customized Proposals:</strong>{" "}
                  Each service can be tailored to meet your specific needs.
                  After an initial consultation, I will provide a detailed
                  proposal outlining the coverage, deliverables, and any
                  additional services you may desire.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-light/90 text-lg">•</span>
                <p className="text-light/80 text-base leading-[1.5]">
                  <strong className="text-light">Flexible Coverage:</strong>{" "}
                  Additional hours, second photographers, or other bespoke
                  services can be added to your package to ensure every moment
                  is beautifully captured.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
}

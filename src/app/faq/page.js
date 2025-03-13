"use client";
import Navbar from "../components/nav";
import Footer from "../components/footer";
import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMagnifyingGlass, HiChevronDown, HiPlus } from "react-icons/hi2";

const categories = [
  { id: "all", label: "All Questions" },
  { id: "wedding", label: "Wedding" },
  { id: "portrait", label: "Portrait" },
  { id: "engagement", label: "Engagement" },
  { id: "general", label: "General Information" },
  { id: "booking", label: "Booking & Pricing" },
];

const faqItems = [
  {
    question: "What is your photography style?",
    answer:
      "I specialize in a blend of documentary and editorial photography. This approach allows me to capture candid moments authentically while also providing guided portraits that reflect your unique personalities.",
    category: "general",
  },
  {
    question: "How long have you been photographing weddings?",
    answer:
      "I have been photographing weddings since 2015 and I was a professional sports photographer before that for Division I sports for 4 years.",
    category: "wedding",
  },
  {
    question: "What do your wedding photography packages include?",
    answer:
      "All packages include high-resolution, professionally edited digital files delivered on a custom flash drive. Additional services such as engagement sessions, additional photographers, heirloom wedding albums, and prints are also available.",
    category: "wedding",
  },
  {
    question: "Do you offer retouching and color adjustment services?",
    answer:
      "Yes, every image in your collection is color-balanced, exposure-adjusted, cropped, and straightened as needed. Portraits receive minor blemish removal if necessary.",
    category: "general",
  },
  {
    question: "Do you have experience shooting in various lighting situations?",
    answer:
      "Yes, I am comfortable working in all types of lighting conditions, utilizing both available light and professional lighting equipment as needed.",
    category: "general",
  },
  {
    question: "Do you shoot digital or film?",
    answer:
      "I primarily work with digital photography but often supplement with film, using a variety of vintage cameras to capture unique moments.",
    category: "general",
  },
  {
    question: "Do you work with a second photographer?",
    answer:
      "Most of the time, I work solo. However, for larger weddings or events requiring coverage of multiple locations, I can arrange for a second experienced photographer.",
    category: "wedding",
  },
  {
    question: "Are you insured?",
    answer:
      "Yes, I carry comprehensive liability insurance, and I can provide a certificate of insurance to your venue upon request.",
    category: "general",
  },
  {
    question: "Do you bring backup equipment?",
    answer:
      "Absolutely. I always carry backup cameras, lenses, and lighting equipment to ensure seamless coverage in case of any equipment malfunction.",
    category: "general",
  },
  {
    question: "How many photos will we receive?",
    answer:
      "The number of images varies based on the specifics of your wedding, but for a 10-hour coverage, you can expect approximately 300 images.",
    category: "wedding",
  },
  {
    question: "Will we receive the raw, unedited files?",
    answer:
      "No, I do not provide raw files. All delivered images are professionally edited to ensure the highest quality.",
    category: "general",
  },
  {
    question: "How long after the wedding will we receive our photos?",
    answer:
      "A sneak peek is typically provided within a few days or even within 24hrs, with the full gallery delivered approximately six weeks after the wedding.",
    category: "wedding",
  },
  {
    question: "Do you offer albums or prints?",
    answer:
      "Yes, I offer a range of heirloom-quality albums, prints, and other tangible products to showcase your wedding photos beautifully.",
    category: "wedding",
  },
  {
    question: "Do you travel for weddings?",
    answer:
      "Yes, I am available for destination weddings and love photographing in new locations. Travel fees may apply depending on the distance and logistics.",
    category: "wedding",
  },
  {
    question: "How far in advance should we book?",
    answer:
      "It's advisable to book as early as possible. A signed contract and retainer are required to reserve your date.",
    category: "booking",
  },
  {
    question: "What is your payment schedule?",
    answer:
      "A booking fee or retainer is required to secure your date, with the remaining balance typically divided into two payments: one due ninety days before the wedding and the final installment four weeks prior.",
    category: "booking",
  },
  {
    question: "Can we meet before booking?",
    answer:
      "Yes, I encourage meeting in person or via video call to discuss your wedding plans and ensure we're a good fit for each other.",
    category: "booking",
  },
  {
    question: "Do you offer engagement sessions?",
    answer:
      "Yes, engagement sessions are available and can be included in your wedding photography package or booked separately.",
    category: "engagement",
  },
  {
    question: "Do you provide a written contract?",
    answer:
      "Yes, a detailed contract outlining all services, deliverables, and terms is provided to ensure clarity and mutual agreement.",
    category: "general",
  },
  {
    question: "How do we book you for our wedding?",
    answer:
      "To book, please contact me to confirm availability. A signed contract and retainer are required to secure your wedding date.",
    category: "booking",
  },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const filteredFaqs = useMemo(() => {
    return faqItems.filter((item) => {
      const matchesSearch =
        item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.answer.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory =
        selectedCategory === "all" || item.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen text-light py-16">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <h1 className="text-3xl lg:text-5xl font-bold mb-12">
            Frequently Asked Questions
          </h1>

          <div className="flex flex-col md:flex-row gap-4 mb-12">
            {/* Search Bar */}
            <div className="relative flex-1">
              <HiMagnifyingGlass className="absolute left-4 top-1/2 transform -translate-y-1/2 text-light/90 z-10" />
              <input
                type="text"
                placeholder="Have a question? Type your keywords here..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-dark/30 hover:bg-dark/40 focus:bg-dark/40 backdrop-blur-md rounded-lg pl-12 pr-4 py-4 text-light placeholder:text-light/50 focus:outline-none border border-light/10 focus:ring-2 focus:ring-light/30 transition-all duration-200"
              />
            </div>

            {/* Category Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="w-full md:w-56 bg-dark/30 hover:bg-dark/40 backdrop-blur-md rounded-lg px-4 py-4 text-light flex items-center justify-between transition-all duration-200 border border-light/10"
              >
                {categories.find((cat) => cat.id === selectedCategory)?.label}
                <HiChevronDown
                  size={20}
                  className={`transform transition-transform duration-300 ${
                    isDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              <AnimatePresence>
                {isDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute z-50 w-full mt-2 bg-dark/95 backdrop-blur-md rounded-lg overflow-hidden shadow-lg border border-light/10"
                  >
                    {categories.map((category) => (
                      <button
                        key={category.id}
                        onClick={() => {
                          setSelectedCategory(category.id);
                          setIsDropdownOpen(false);
                        }}
                        className="w-full px-4 py-3 text-left hover:bg-light/10 transition-colors"
                      >
                        {category.label}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          <div className="space-y-4">
            <AnimatePresence>
              {filteredFaqs.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{
                    opacity:
                      activeIndex === null || activeIndex === index ? 1 : 0.5,
                    y: 0,
                  }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="border-b border-light/10 last:border-b-0 transition-opacity duration-200"
                >
                  <button
                    className="w-full text-left py-4 flex justify-between items-center gap-4"
                    onClick={() => toggleAccordion(index)}
                  >
                    <h3
                      className={`text-lg lg:text-xl ${
                        activeIndex === index
                          ? "font-medium text-light"
                          : "font-normal text-light/90"
                      } transition-all duration-200`}
                    >
                      {item.question}
                    </h3>
                    <HiPlus
                      size={20}
                      className={`flex-shrink-0 transition-transform duration-300 ${
                        activeIndex === index ? "rotate-45" : ""
                      }`}
                    />
                  </button>
                  <AnimatePresence>
                    {activeIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, type: "spring" }}
                        className="overflow-hidden"
                      >
                        <p className="text-light/80 pb-4">{item.answer}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

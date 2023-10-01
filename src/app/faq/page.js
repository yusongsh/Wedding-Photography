"use client";
import Navbar from "../components/nav";
import Footer from "../components/footer";
import { useState, useEffect } from "react";

const faqQuestion = [
  {
    question: "1. Do you have experience with various wedding traditions?",
    answer:
      "Absolutely! Over the years, I've had the joy of capturing weddings from diverse cultures and traditions. From vibrant Indian ceremonies to intimate Japanese tea ceremonies, each wedding has enriched my understanding and appreciation for love celebrated across cultures.",
  },
  {
    question: "2. Do you offer engagement or pre-wedding shoots?",
    answer:
      "Yes, and I adore them! Engagement sessions are a fantastic way to get to know each other before the big day. They capture the sweet anticipation and provide you with memories of this unique chapter in your love story.",
  },
  {
    question: "3. How many photos will we receive?",
    answer:
      "Quality always takes precedence over quantity for me. Typically, for a full-day wedding, you'll receive between 400-600 images. Each one is carefully edited to ensure they reflect the emotions and moments of your special day.",
  },
  {
    question: "4. What equipment do you use?",
    answer:
      "I trust only the best for my couples. I use top-tier professional cameras and lenses. Over the years, I've carefully curated my equipment to include gear that ensures crisp, vibrant, and timeless photos.",
  },
  {
    question: "5. Do you provide black and white photos?",
    answer:
      "I do! There's a timeless elegance to black and white photos. Some moments, especially the emotional ones, often feel even more profound without the distraction of color.",
  },
  {
    question: "6. How soon after the wedding will we receive our photos?",
    answer:
      "Crafting your images post-wedding is an art in itself. While I'm as eager as you are to share the photos, I take about 4-6 weeks to ensure every image embodies the magic of your day.",
  },
  {
    question: "7. Can we get a photo album or photo book?",
    answer:
      "Certainly! I partner with some of the finest craftsmen to create bespoke photo albums that are as unique as your love story. It's a tangible memory that you'll cherish for a lifetime.",
  },
  {
    question: "8. Do you have backup equipment?",
    answer:
      "Always. I believe in being prepared for every scenario. Carrying backup equipment is a standard practice for me to ensure nothing stands in the way of capturing your day.",
  },
  {
    question: "9. Do you also do videography?",
    answer:
      "While photography is my primary passion, I have collaborated with some incredible videographers over the years. I'd be happy to recommend or arrange a combined package for you.",
  },
  {
    question: "10. How do you handle low-light situations?",
    answer:
      "Over time, I've honed my skills in capturing moments even in challenging lighting. Armed with professional-grade low-light lenses and the knowledge of how to wield them, I promise your moments will be captured in their best light.",
  },
  {
    question: "11. Do you travel for destination weddings?",
    answer:
      "Absolutely, I have a deep love for travel. Capturing love stories against unique backdrops and in different cultures is something I cherish. While there are travel and accommodation charges, the memories we'll create together will be priceless.",
  },
  {
    question: "12. How do we secure our date with you?",
    answer:
      "To ensure I give my all to every couple, I book a limited number of weddings each year. A signed contract and a deposit will secure your date. I operate on a first-come, first-served basis, so I recommend booking early!",
  },
  {
    question: "13. What is your cancellation policy?",
    answer:
      "I understand life can be unpredictable. While deposits are non-refundable, I always strive to accommodate date changes based on my availability.",
  },
  {
    question: "14. Do you offer packages for elopements or smaller weddings?",
    answer:
      "Every love story is unique. Elopements and intimate weddings have a charm of their own, and I offer custom packages tailored for such beautiful, personal celebrations.",
  },
  {
    question: "15. How do you work with other vendors on the day?",
    answer:
      "Collaboration is key. Over the years, I've built relationships with many vendors. We work hand-in-hand, ensuring your day is seamless and every moment is captured harmoniously.",
  },
  {
    question: "16. Do you have insurance?",
    answer:
      "Yes, ensuring safety and professionalism is paramount to me. I'm fully insured, which not only protects my gear but also provides peace of mind to the venues and couples I work with.",
  },
  {
    question: "17. Can we provide a list of specific shots we want?",
    answer:
      "Of course! Your input is invaluable. While I approach the day with a photojournalistic style, capturing moments as they naturally unfold, I always welcome any specific shots or ideas you have in mind.",
  },
];

export default function Page() {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <>
      <Navbar />
      <div className="text-light flex flex-col px-8 py-4 lg:px-16 lg:py-8 2xl:px-24 2xl:py-12">
        <h1 className="pr-12 pb-12 text-2xl lg:text-3xl italic font-semibold">
          FAQs
        </h1>
        {/* <div className="grid grid-cols-2">
          {faqQuestion.map((item, index) => (
            <div key={index} className="mb-6">
              <button
                onClick={() =>
                  setActiveIndex(index === activeIndex ? null : index)
                }
                className="text-sm italic font-semibold"
              >
                {item.question}
              </button>
              {index === activeIndex && (
                <div className="mt-1 text-sm font-light">{item.answer}</div>
              )}
            </div>
          ))}
        </div> */}
        <div className="columns-1 lg:gap-y-0 lg:columns-2 2xl:columns-3 gap-16">
          {faqQuestion.map((item, index) => (
            <div key={index} className="mb-16 lg:mb-8 ">
              <div className="break-inside-avoid">
                <h4 className="text-sm italic font-semibold text-left">
                  {item.question}
                </h4>
                <p className="mt-1 text-sm font-light">{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

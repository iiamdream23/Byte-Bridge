// FAQSection.tsx
"use client";
import React, { useState } from "react";

const FAQSection = () => {
  const faqItems = [
    {
      question: "How do I join the community?",
      answer:
        'To join our community, kindly fill out the "Join Our Community" card. We are glad to have you',
    },
    {
      question: "What benefits does the community offer?",
      answer:
        "Our community provides a platform for developers to connect, share knowledge, and collaborate on projects. Members can also access exclusive resources and opportunities.",
    },
    {
      question: "What benefits does the community offer?",
      answer:
        "Our community provides a platform for developers to connect, share knowledge, and collaborate on projects. Members can also access exclusive resources and opportunities.",
    },
    // Add more FAQ items as needed
  ];

  const [activeIndex, setActiveIndex] = useState(-1);

  const toggleAccordion = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? -1 : index));
  };

  return (
    <div className="faq-container m-10 max-w-2xl mx-auto mt-9 mb-14">
      <h1 className="font-bold text-5xl text-center mb-6">FAQs</h1>
      {faqItems.map((item, index) => (
        <div
          key={index}
          className={`faq-item ${activeIndex === index ? "active" : ""}`}
          onClick={() => toggleAccordion(index)}
        >
          <h3 className="question text-lg font-semibold">{item.question}</h3>
          <p className="answer mt-2 text-gray-700">{item.answer}</p>
        </div>
      ))}
    </div>
  );
};

export default FAQSection;

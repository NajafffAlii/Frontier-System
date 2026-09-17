"use client";

import { ChevronDown, HelpCircle } from "lucide-react";
import { useState } from "react";

interface FaqItem {
  question: string;
  answer: string;
}

export function FaqAccordion({ faqs }: { faqs: FaqItem[] }) {
  // Track open state for each item by index (set of indices or single index)
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="space-y-3">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;

        return (
          <div
            key={faq.question}
            className={`overflow-hidden rounded-xl border transition-all duration-200 ${
              isOpen
                ? "border-[#D97706] bg-white shadow-sm"
                : "border-[#E2E8F0] bg-white hover:border-[#CBD5E1]"
            }`}
          >
            <button
              type="button"
              onClick={() => toggleFaq(index)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-4 p-5 text-left transition-colors"
            >
              <span className="flex items-center gap-3 text-sm font-bold text-[#0F172A] sm:text-base">
                <HelpCircle
                  className={`h-4 w-4 shrink-0 transition-colors ${
                    isOpen ? "text-[#D97706]" : "text-[#94A3B8]"
                  }`}
                />
                {faq.question}
              </span>

              <ChevronDown
                className={`h-4 w-4 shrink-0 text-[#64748B] transition-transform duration-200 ${
                  isOpen ? "rotate-180 text-[#D97706]" : ""
                }`}
              />
            </button>

            {isOpen && (
              <div className="border-t border-[#F1F5F9] px-5 pb-5 pt-3 animate-in fade-in duration-200">
                <p className="text-xs leading-relaxed text-[#64748B] sm:text-sm">
                  {faq.answer}
                </p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

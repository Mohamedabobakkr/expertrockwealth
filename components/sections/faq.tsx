'use client';

import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'How long does it take to set up a company in UAE?',
      answer:
        'The timeline varies by jurisdiction and company type. Freezone companies typically take 7-14 days, while mainland companies take 14-21 days. DIFC and ADGM setups may take 21-30 days depending on complexity.',
    },
    {
      question:
        "What's the difference between mainland and freezone companies?",
      answer:
        'Mainland companies can trade anywhere in UAE and globally but require local sponsors. Freezone companies offer 100% foreign ownership but have trading restrictions within UAE mainland market.',
    },
    {
      question: 'Do I need to be physically present in UAE for company setup?',
      answer:
        'Physical presence requirements vary by jurisdiction. Some freezones allow remote setup, while mainland and financial centers typically require founder presence for certain procedures like bank account opening.',
    },
    {
      question: 'What are the banking requirements for UAE companies?',
      answer:
        "Corporate banking requirements include company license, MOA, shareholders' passports, business plan, and proof of address. Minimum deposit requirements range from AED 3,000 to AED 500,000 depending on the bank.",
    },
    {
      question: 'Can I get UAE residency through my company?',
      answer:
        'Yes, UAE companies can sponsor residence visas for owners and employees. Requirements include valid company license, approved office lease, and meeting minimum salary criteria (typically AED 4,000-15,000).',
    },
  ];

  return (
    <section className="bg-background py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center md:mb-14 lg:mb-16">
            <h2 className="gradient-text mb-4 font-serif text-4xl font-bold">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-muted-foreground">
              Get answers to common questions about UAE business setup
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                className="overflow-hidden rounded-lg border border-border"
              >
                <button
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                  className="flex w-full items-center justify-between bg-surface px-6 py-4 text-left transition-colors hover:bg-muted/5"
                >
                  <span className="pr-4 font-semibold">{faq.question}</span>
                  <ChevronDown
                    className={`h-5 w-5 flex-shrink-0 text-muted-foreground transition-transform ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                <motion.div
                  initial={false}
                  animate={{
                    height: openIndex === index ? 'auto' : 0,
                    opacity: openIndex === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="overflow-hidden"
                >
                  <div className="bg-background px-6 pb-4 pt-2 text-muted-foreground">
                    {faq.answer}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

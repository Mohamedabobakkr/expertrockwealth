'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import {
  ChevronDown,
  Building2,
  Award,
  DollarSign,
  Users,
  FileText,
  HelpCircle,
} from 'lucide-react';

export function FAQSections() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqCategories = [
    {
      icon: Building2,
      category: 'Business Setup',
      faqs: [
        {
          question: 'How long does it take to set up a business in Dubai?',
          answer:
            'Business setup timeline varies by structure: Freezone companies typically take 5-10 business days, Mainland companies take 10-15 business days, and Offshore companies take 7-14 business days. Our expedited service can reduce these timelines by up to 50%.',
        },
        {
          question:
            "What's the difference between Mainland and Freezone companies?",
          answer:
            'Mainland companies can trade anywhere in the UAE and internationally, require office space, and have some restrictions on activities. Freezone companies enjoy 100% foreign ownership, 0% corporate tax, full profit repatriation, but are restricted from trading in the UAE mainland market without a local distributor.',
        },
        {
          question: 'Do I need a local sponsor for my business?',
          answer:
            'No longer required! As of June 2021, UAE law allows 100% foreign ownership for most business activities in the Mainland. Freezone and Offshore companies have always allowed 100% foreign ownership.',
        },
        {
          question: 'What are the costs involved in business setup?',
          answer:
            'Costs vary significantly based on license type, location, and activities. Our Essential packages start from AED 15,000 for Freezone, AED 25,000 for Mainland. This includes our service fees, but excludes government fees, office rent, and visa costs which vary by emirate and business type.',
        },
        {
          question: 'Can I operate my business from home?',
          answer:
            "Freezone companies can use virtual offices. Some Mainland jurisdictions now allow home-based businesses with specific licenses. We'll help you identify the most cost-effective solution that meets regulatory requirements.",
        },
      ],
    },
    {
      icon: Award,
      category: 'Golden Visa',
      faqs: [
        {
          question: 'What is the UAE Golden Visa?',
          answer:
            'The Golden Visa is a long-term residency program offering 5 or 10-year renewable visas to investors, entrepreneurs, professionals, and talented individuals. It provides residency without a sponsor, allows you to sponsor family members, and has no minimum stay requirements.',
        },
        {
          question: 'Who is eligible for the Golden Visa?',
          answer:
            'Eligibility includes: Property investors (AED 2M+), business investors (AED 2M+ capital), entrepreneurs with innovative projects, specialized talents in medicine/science/engineering/arts, outstanding students (GPA 3.75+), and retirees with specific financial requirements.',
        },
        {
          question: 'How long does Golden Visa processing take?',
          answer:
            'Standard processing takes 20-30 days from application to approval. Our VIP fast-track service can reduce this to 10-14 days. Processing time depends on application completeness, document verification, and government processing schedules.',
        },
        {
          question: 'Can I include my family in my Golden Visa?',
          answer:
            'Yes! Golden Visa holders can sponsor their spouse, children of any age, and domestic helpers. Family members receive the same visa validity period as the primary applicant, providing long-term stability for your entire family.',
        },
        {
          question:
            "What happens if I don't meet the minimum investment anymore?",
          answer:
            'You must maintain the qualifying investment throughout your visa validity. If selling property or closing a business, plan your Golden Visa renewal strategy with us in advance. We can help structure your investments to maintain eligibility.',
        },
      ],
    },
    {
      icon: DollarSign,
      category: 'Costs & Payments',
      faqs: [
        {
          question: 'What payment methods do you accept?',
          answer:
            'We accept bank transfers, credit cards (Visa, Mastercard, Amex), and UAE-based payment methods. For larger packages, we offer installment plans with 50% upfront and the balance upon license issuance.',
        },
        {
          question: 'Are there any hidden fees?',
          answer:
            "Absolutely not. We provide complete transparency with detailed quotations breaking down our service fees, government fees, and any third-party costs. You'll know exactly what you're paying for before we begin.",
        },
        {
          question: 'Do you offer refunds if my application is rejected?',
          answer:
            'We maintain a 100% approval rate through thorough pre-qualification. In the unlikely event of rejection due to our error, we offer a full refund of our service fees (government fees are non-refundable). We also provide free reapplication assistance.',
        },
        {
          question: 'Can I get a customized package?',
          answer:
            "Yes! Our standard packages cover most scenarios, but we regularly create custom solutions for unique requirements. Contact us with your specific needs, and we'll design a tailored package with transparent pricing.",
        },
      ],
    },
    {
      icon: Users,
      category: 'Visas & Residency',
      faqs: [
        {
          question: 'How many employee visas can my company sponsor?',
          answer:
            'This depends on your license type and office space. Freezone companies typically get visa quotas based on their package (usually 1-6 initially, more available for purchase). Mainland companies can sponsor unlimited employees based on their license and office space meeting labor card requirements.',
        },
        {
          question: 'Can I sponsor my family on my business visa?',
          answer:
            'Yes, if you meet minimum salary requirements (typically AED 4,000-10,000/month depending on emirate) and have appropriate accommodation. You can sponsor your spouse, children, and parents (subject to additional requirements).',
        },
        {
          question:
            "What's the difference between a work visa and residency visa?",
          answer:
            "In the UAE, these terms are often used interchangeably. A 'work visa' technically means employment authorization, while 'residency visa' refers to your legal residency status. Most work visas include residency rights. Business owners get residency through their company.",
        },
        {
          question: 'Do I need to live in the UAE to maintain my residency?',
          answer:
            'Standard residency visas require visiting UAE at least once every 180 days. However, Golden Visa holders have no minimum stay requirements - you can maintain your residency status regardless of how much time you spend in the UAE.',
        },
      ],
    },
    {
      icon: FileText,
      category: 'Documentation & Compliance',
      faqs: [
        {
          question: 'What documents do I need to start a business?',
          answer:
            'Core requirements include: passport copies (6 months validity), recent photos, Emirates ID (if UAE resident), educational certificates (for professional licenses), proof of address, and business plan. Specific requirements vary by license type - we provide a detailed checklist for your situation.',
        },
        {
          question: 'Do I need to file taxes in the UAE?',
          answer:
            'UAE has 0% personal income tax. Corporate tax (9%) applies to business profits above AED 375,000 starting 2023, with exemptions for Freezone companies meeting criteria. VAT registration (5%) is required for businesses with turnover above AED 375,000. We can connect you with tax advisors for compliance.',
        },
        {
          question: 'What ongoing compliance is required?',
          answer:
            'Annual license renewal, Emirates ID renewal, visa renewals, corporate tax registration (if applicable), VAT returns (if registered), and maintaining registered address. Our PRO services packages handle all compliance reminders and renewals for you.',
        },
        {
          question: 'Can I use my foreign qualifications in the UAE?',
          answer:
            'Professional qualifications typically need attestation from your home country and UAE embassy. Some professions require licensing from UAE authorities (doctors, lawyers, engineers). We guide you through the entire attestation and licensing process.',
        },
      ],
    },
    {
      icon: HelpCircle,
      category: 'Expert Rock Wealth Services',
      faqs: [
        {
          question: 'Why should I use a consultant instead of doing it myself?',
          answer:
            'UAE business regulations are complex and constantly evolving. We save you time (average 40+ hours), prevent costly mistakes, leverage government relationships for faster processing, ensure compliance, and provide ongoing support. Our expertise typically results in better structure optimization and cost savings.',
        },
        {
          question: 'What support do you provide after setup?',
          answer:
            "Our Premium and VIP packages include ongoing PRO services (1-3 years), renewal reminders, compliance support, banking assistance, and access to our network of accountants, lawyers, and business advisors. We're your long-term partner in UAE success.",
        },
        {
          question: 'Do you provide office space?',
          answer:
            'We assist with office solutions including virtual offices (Freezone), serviced offices, and connecting you with real estate agents for physical office space. Our packages include registered address services meeting regulatory requirements.',
        },
        {
          question: 'Can you help with business banking?',
          answer:
            'Yes! Banking relationships are included in our Premium and VIP packages. We provide introductions to major UAE banks, assist with application preparation, and guide you through the banking process. Our relationships help expedite account opening.',
        },
        {
          question: 'What if I have questions after my business is set up?',
          answer:
            "All clients receive dedicated account manager access via WhatsApp, email, and phone. Response times: Essential (24-48 hours), Premium (12-24 hours), VIP (same day). We're here to support your business growth journey.",
        },
      ],
    },
  ];

  return (
    <section className="relative overflow-hidden bg-background py-16 md:py-24 lg:py-32">
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-12">
        <div className="mx-auto max-w-5xl">
          {faqCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: categoryIndex * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-16 last:mb-0"
            >
              {/* Category Header */}
              <div className="mb-8 flex items-center gap-4">
                <div className="elegant-icon-wrapper">
                  <category.icon className="h-6 w-6 text-primary" />
                </div>
                <h2 className="heading-md text-foreground">
                  {category.category}
                </h2>
              </div>

              {/* FAQ Items */}
              <div className="space-y-4">
                {category.faqs.map((faq, faqIndex) => {
                  const globalIndex = categoryIndex * 100 + faqIndex;
                  const isOpen = openIndex === globalIndex;

                  return (
                    <motion.div
                      key={faqIndex}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: faqIndex * 0.05, duration: 0.4 }}
                      viewport={{ once: true }}
                      className="pinterest-card overflow-hidden"
                    >
                      <button
                        onClick={() =>
                          setOpenIndex(isOpen ? null : globalIndex)
                        }
                        className="flex w-full items-start justify-between gap-4 p-6 text-left transition-colors duration-300 hover:bg-heritage-gold/5"
                      >
                        <span className="body-md flex-1 font-semibold text-foreground">
                          {faq.question}
                        </span>
                        <ChevronDown
                          className={`h-5 w-5 flex-shrink-0 text-heritage-gold transition-transform duration-300 ${
                            isOpen ? 'rotate-180' : ''
                          }`}
                        />
                      </button>

                      <div
                        className={`overflow-hidden transition-all duration-300 ${
                          isOpen
                            ? 'max-h-[500px] opacity-100'
                            : 'max-h-0 opacity-0'
                        }`}
                      >
                        <div className="px-6 pb-6 pt-0">
                          <p className="body-sm leading-relaxed text-muted-foreground">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Still Have Questions */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
          className="mx-auto mt-20 max-w-3xl"
        >
          <div className="pinterest-card border-2 border-heritage-gold/30 p-6 text-center md:p-10 lg:p-12">
            <h3 className="heading-sm mb-4 text-foreground">
              Still Have Questions?
            </h3>
            <p className="body-md mb-6 text-muted-foreground">
              Can't find the answer you're looking for? Our expert team is here
              to help. Schedule a complimentary consultation to discuss your
              specific situation.
            </p>
            <a
              href="/contact"
              className="elegant-button body-md inline-flex items-center justify-center px-10 py-4 font-medium text-primary-foreground"
            >
              Schedule Free Consultation
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

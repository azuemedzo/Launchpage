'use client'

import { useState } from 'react'

const faqs = [
  {
    question: 'Is it accessible',
    answer: 'Yes. It follows accessibility best practices.',
  },
  {
    question: 'is it styled',
    answer: 'Yes. It comes with default styles that you can customize.',
  },
  {
    question: 'Is it animated',
    answer: 'Yes. It’s animated by default, but you can disable it if you prefer.',
  },
]

export default function HomePage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="min-h-screen bg-white text-gray-800">
      <section className="max-w-2xl mx-auto py-16 px-4">
        <div className="flex items-center space-x-2 mb-4">
          <span className="bg-green-100 text-green-800 text-sm px-2 py-1 rounded-full">FAQ</span>
        </div>
        <h2 className="text-2xl font-bold mb-2">Frequently asked Questions</h2>
        <p className="text-gray-500 mb-8">
          Discover the benefits of our Next.js landing page template, designed to help you launch quickly and effectively.
        </p>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b pb-2">
              <button
                onClick={() => toggle(index)}
                className="w-full flex justify-between items-center text-left font-medium text-lg focus:outline-none"
              >
                {faq.question}
                <span>{openIndex === index ? '-' : '+'}</span>
              </button>
              {openIndex === index && (
                <div className="mt-2 text-gray-600 transition-opacity duration-300">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="bg-blue-50 py-10 text-center">
        <h3 className="text-xl font-semibold mb-4">Get it Right now?</h3>
        <button className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700 transition">
          Sign up Now
        </button>
      </section>
    </div>
  )
}

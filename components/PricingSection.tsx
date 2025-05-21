"use client";

import { useState } from "react";

const plans = [
  {
    name: "FREE",
    price: "$29",
    features: [
      { text: "Customizable figma files", included: true },
      { text: "Customizable figma files", included: true },
      { text: "Customizable figma files", included: true },
      { text: "Customizable figma files", included: true },
      { text: "copywriting cheatcodes", included: false },
      { text: "copywriting cheatcodes", included: false },
    ],
  },
  {
    name: "PRO",
    price: "$29",
    features: [
      { text: "Customizable figma files", included: true },
      { text: "Customizable figma files", included: true },
      { text: "Customizable figma files", included: true },
      { text: "Customizable figma files", included: true },
      { text: "copywriting cheatcodes", included: true },
      { text: "copywriting cheatcodes", included: false },
    ],
  },
  {
    name: "PREMIUM",
    price: "$29",
    features: [
      { text: "Customizable figma files", included: true },
      { text: "Customizable figma files", included: true },
      { text: "Customizable figma files", included: true },
      { text: "Customizable figma files", included: true },
      { text: "copywriting cheatcodes", included: false },
      { text: "copywriting cheatcodes", included: false },
    ],
  },
];

export default function PricingPlans() {
  const [yearly, setYearly] = useState(true);

  return (
    <section className="py-16 px-4 bg-[#e9f5f3]">
      <div className="max-w-6xl mx-auto text-center">
        <span className="inline-block px-4 py-1 mb-4 text-sm font-medium text-green-700 bg-green-100 rounded-full">
           Pricing
        </span>
        <h2 className="text-3xl sm:text-4xl font-semibold mb-4">Pricing and Plans</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-8">
          Unlock the potential of our LaunchPage landing page template with versatile pricing plans tailored to your needs.
        </p>

        {/* Toggle */}
        <div className="flex items-center justify-center gap-4 mb-12">
          <span className="text-gray-700">Monthly</span>
          <button
            className={`relative inline-flex items-center h-6 rounded-full w-11 transition ${
              yearly ? "bg-green-600" : "bg-gray-300"
            }`}
            onClick={() => setYearly(!yearly)}
          >
            <span
              className={`inline-block w-4 h-4 transform bg-white rounded-full transition ${
                yearly ? "translate-x-6" : "translate-x-1"
              }`}
            />
          </button>
          <span className="text-gray-700">Yearly</span>
          {yearly && (
            <span className="ml-2 px-2 py-0.5 text-xs font-medium bg-blue-100 text-blue-700 rounded">
              SAVE 25%
            </span>
          )}
        </div>

        {/* Plans */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 flex flex-col items-center"
            >
              <span className="uppercase text-xs font-medium bg-gray-100 text-gray-600 px-3 py-1 rounded-full mb-4">
                {plan.name}
              </span>
              <h3 className="text-3xl font-bold">{plan.price}</h3>
              <p className="text-sm text-gray-500 mb-6">One time purchase</p>
              <ul className="w-full text-left space-y-3 mb-6">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm">
                    {feature.included ? (
                      <span className="text-green-600">✔</span>
                    ) : (
                      <span className="text-gray-400">✘</span>
                    )}
                    <span className={feature.included ? "" : "text-gray-400 line-through"}>
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>
              <button className="mt-auto px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition">
                Get started for free
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

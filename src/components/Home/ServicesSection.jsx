import React from "react";
import BookAuditButton from "../BookAuditButton";

const pricingData = [
  {
    title: "Consultation – AI Advisor",
    desc: "A strategy session to help you figure out <b>where and how to use AI to automate in your business.</b>",
    price: "$9",
    features: [
      "60-minute deep-dive strategy session",
      "Custom AI roadmap & priority tool recommendations",
      "Hallucination guardrails & reliability checks",
      "Team training on how to manage your AI Agents",
      "Bonus: KPI checklist to prove ROI",
    ],
    button: "Get started",
    highlighted: false,
  },
  {
    title: "Done & Built For You",
    desc: "We <b>build and launch AI Employees for you</b> — no technical work needed on your end.",
    price: "$49",
    features: [
      "End-to-end design & deployment of your AI Agents",
      "Full integration with Slack, WhatsApp, CRM, calendar, etc.",
      "Real-time lead qualification, outreach, or customer support bot",
      "Complete testing, fallback strategies, and documentation",
      "30-day tuning & performance guarantee",
    ],
    button: "Get started →",
    highlighted: true,
  },
  {
    title: "AI Partner (All your AI needs)",
    desc: "A monthly subscription where we become your <b>on-demand dedicated AI team</b>, ready to help anytime.",
    price: "$99",
    features: [
      "Dedicated fractional AI specialists at your service",
      "Unlimited agent builds, updates, and custom features",
      "24/7 monitoring, maintenance & reliability audits",
      "Quarterly ROI reviews with cost-savings report",
      "Priority support & instant scaling for peak periods",

      ,
    ],
    button: "Schedule a call",
    highlighted: false,
  },
];

const ServicesSection = () => {
  return (
    <section className="relative text-white py-20 px-4">
      <div className="max-w-5xl mx-auto ">
        <h2 className="text-4xl text-center font-bold mb-10 text-white">
          Services
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {pricingData.map((plan, index) => (
            <div
              className={`  bg-[#F8F9FB]/10 backdrop-blur-lg border border-[#00FF93]/50 rounded-3xl p-4 md:p-8 shadow-2xl transition-transform duration-500 ${
                plan.highlighted
                  ? "highlighted-service-box relative"
                  : "content-box"
              }`}
            >
              <div className="inside-shadow"></div>
              <div className="border-glow"></div>
              <h3 className="text-2xl font-semibold mb-6">{plan.title}</h3>
              {/* <p className="text-4xl font-bold text-[#00FF93] mb-4">
                {plan.price}
              </p> */}
              <ul className="text-gray-300 text-left list-outside space-y-4 mb-6">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-[#00FF93]">✔</span>
                    <p>{feature}</p>
                  </li>
                ))}
              </ul>
              <div className="w-full flex justify-center mt-4">
                <BookAuditButton
                  label="Book a Call"
                  className="px-5 md:px-6 py-2 md:py-3 text-base space-x-2"
                />
              </div>
              {/* {plan.highlighted && (
                <span className="absolute top-4 right-4 text-xs bg-[#00FF93] text-black px-2 py-1 rounded-full font-medium">
                  Popular
                </span>
              )} */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

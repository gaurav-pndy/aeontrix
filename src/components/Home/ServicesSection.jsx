import React from "react";
import BookAuditButton from "../BookAuditButton";

const pricingData = [
  {
    id: "consultation",
    title: "Consultation – <span class='text-[#00FF93]'>AI Advisor</span>",
    desc: "A strategy session to help you figure out where and how to use AI to automate in your business.",
    price: "$9",
    features: [
      "Deep-dive Strategy Sessions",
      "Custom AI Roadmap & Tech Stack Recommendations",
      "Hallucination Guardrails & Reliability Checks",
      "Team Training on How to Manage your AI Agents",
      "Assistance in Ensuring Security, Scalability, & Ease of Use",
      "Bonus: KPI Checklist to Measure ROI",
    ],
    button: "Get started",
    highlighted: false,
  },
  {
    id: "built-for-you",
    title:
      "Done & Built For You - <span class='text-[#00FF93]'>AI Employee System Setup</span>",
    desc: "We build and launch AI Employees for you — no technical work needed on your end.",
    price: "$49",
    features: [
      "End-to-End Design & Deployment of your AI Agents",
      "Full Integration with any Software you Use (needs API)",
      "Complete Testing, Fallback Strategies, and Documentation",
      "Real-time Lead Qualification, Outreach, or Customer Support Bot",
      "Bonus: Free Tuning & Maintenance for the First Month.",
    ],
    button: "Get started →",
    highlighted: true,
  },
  {
    id: "ai-partner",
    title:
      "AI Partner - <span class='text-[#00FF93]'>Your Dedicated AI Team</span>",
    desc: "A monthly subscription where you get an on-demand dedicated AI team, ready to help anytime.",
    price: "$99",
    features: [
      "Dedicated AI specialists at your service",
      "Unlimited agent builds, updates, and custom features",
      "24/7 monitoring, maintenance & reliability audits",
      "Quarterly ROI reviews with cost-savings report",
      "Priority support & instant scaling for peak periods",

      ,
    ],
    button: "Schedule a call",
    highlighted: false,
  },
];

const ServicesSection = () => {
  return (
    <section className="relative z-10 text-white pb-20 px-4">
      <div className="max-w-6xl mx-auto ">
        <h2 className="gradient-title  text-center font-bold  text-white">
          AI Transformation Services
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {pricingData.map((plan, index) => (
            <div
              key={index}
              id={plan.id}
              className={`border-glow-wrapper  bg-[#F8F9FB]/10 backdrop-blur-lg border border-[#00FF93]/50 rounded-3xl p-4 md:p-6 shadow-2xl transition-transform duration-500 ${
                plan.highlighted
                  ? "highlighted-service-box relative"
                  : "content-box "
              }`}
            >
              <div className="border-glow"></div>
              <h3
                className="text-3xl font-semibold mb-4"
                dangerouslySetInnerHTML={{ __html: plan.title }}
              ></h3>
              <p className=" text-[#F8F9FB]/70 mb-4 ">{plan.desc}</p>
              <p className="text-gray-300 font-semibold mb-1">Includes:</p>
              <ul className="text-[#f8f9fb]/90 text-left list-outside space-y-4 mb-6">
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

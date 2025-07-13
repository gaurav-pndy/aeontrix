import React from "react";
import BookAuditButton from "../BookAuditButton";
import { solutionsData } from "../../data/solutionsData";
import { Link } from "react-router";

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
          AI Transformation Services
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {solutionsData.map((plan, index) => (
            <div
              key={index}
              id={plan.id}
              className={`border-glow-wrapper  bg-[#F8F9FB]/10 backdrop-blur-lg border flex flex-col justify-between border-[#00FF93]/50 rounded-3xl p-4 md:p-6 shadow-2xl transition-transform duration-500 
                  content-box `}
            >
              <div className="border-glow"></div>
              <div>
                <h3
                  className="text-3xl font-semibold mb-4"
                  dangerouslySetInnerHTML={{ __html: plan.title }}
                ></h3>
                <p className=" text-[#F8F9FB]/70 text-xl mb-4 ">
                  {plan.heading}
                </p>
              </div>

              <div className="w-full flex justify-center mt-8">
                <Link to={`/solutions/${plan.id}`}>
                  <button
                    className={`glow-button group bg-[#00FF93] hover:bg-[#00FF93]/90 text-black border border-[#00FF93]/30 hover:border-[#00FF93] px-6 py-2 rounded-full font-bold transition-all duration-300 hover:scale-105 relative overflow-hidden flex items-center justify-center`}
                  >
                    Learn More
                    <svg
                      className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform duration-300 relative z-10"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </button>
                </Link>
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

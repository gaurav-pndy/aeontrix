import React, { useState } from "react";

const HumanAIComparison = () => {
  const [selectedOption, setSelectedOption] = useState("AI Sales Suite");

  const options = [
    "AI Sales Suite",
    "AI Marketing Suite",
    "AI Influencer Studio",
    "Your AI Clone",
    "AI Customer Support",
    "AI Business Partner (Full-Stack Engagement)",
  ];

  const aiComparisonData = {
    "AI Sales Suite": [
      ["Lead Response Time", "4-24 hours", "0.5 seconds", "100x faster"],
      [
        "Simultaneous Conversations",
        "1-2 per rep",
        "Unlimited",
        "Infinite scale",
      ],
      ["Follow-up Consistency", "Variable (~67%)", "100%", "No leads dropped"],
      ["Languages Supported", "1-3 per rep", "95+", "Truly global"],
      ["working hours", "9-to-5, weekdays", "24/7/365", "+128 hrs/week"],
      ["Cost per qualified lead", "$30 - $120", "$3 - $7", "5-20x cheaper"],
    ],
    "AI Marketing Suite": [
      ["Blog posts produced", "~1 / day", "10+ / minute", "500x output"],
      ["Ad-creative turnaround", "2–3 days", "<60 sec", "Same-day launch"],
      ["Channels covered", "2–3", "10+", "3-5x reach"],
      ["Cost per asset", "$100+", "<$1", "100x cheaper"],
      [
        "SEO optimisation",
        "Manual keyword research",
        "Auto-optimised",
        "Always on-trend",
      ],
      [
        "Analytics & repurposing",
        "Weekly review",
        "Real-time, 1-click repurpose",
        "Instant insights",
      ],
    ],

    "AI Influencer Studio": [
      ["Shoot cost", "$500–$5000/session", "$0 (no crew)", "10-100x cheaper"],
      ["Turnaround time", "1–2 weeks", "Minutes", ">100x faster"],
      [
        "Iterations / reshoots",
        "Limited by budget",
        "Unlimited",
        "Creative freedom",
      ],
      [
        "Formats produced",
        "Photos",
        "Photos, reels, voiceovers",
        "Multi-format",
      ],
      [
        "Brand consistency",
        "Depends on talent",
        "100 % on-brand",
        "Always aligned",
      ],
      [
        "Scalability",
        "1 model per shoot",
        "Many AI personas",
        "Infinite reach",
      ],
    ],
    "Your AI Clone": [
      ["Availability", "Limited hours", "24/7", "+128 hrs/week"],
      ["Concurrent users served", "1 at a time", "Unlimited", "Infinite scale"],
      ["Response accuracy", "Varies", ">95% trained answers", "Consistent"],
      [
        "Voice/video presence",
        "Only when present",
        "Instant voice & video clone",
        "Omni-channel",
      ],
      [
        "Training cost",
        "Ongoing salary",
        "One-time model training",
        "Major savings",
      ],
      [
        "Multilingual support",
        "Often single language",
        "95+ languages",
        "Global audience",
      ],
    ],
    "AI Customer Support": [
      ["Average hold time", "2–15 min", "0.5 sec", "2400x faster"],
      ["Concurrent calls", "1 per agent", "Unlimited", "No queues"],
      ["Resolution time", "3–10 min", "<60 sec", "3-10x faster"],
      ["Languages handled", "1–2", "95+", "Global reach"],
      ["After-hours coverage", "Extra staff cost", "Always on", "100 % uptime"],
      ["Training / ramp-up", "Weeks", "Hours", "Rapid deployment"],
    ],
    "AI Business Partner (Full-Stack Engagement)": [
      ["Implementation time", "3–6 months", "2–4 weeks", "4-6x faster"],
      [
        "Monthly cost",
        "Multiple salaries + tools",
        "Flat monthly rate",
        "30-60% savings",
      ],
      ["Automation coverage", "Limited", "Unlimited workflows", "End-to-end"],
      [
        "Strategic oversight",
        "Fractional consultant",
        "Dedicated AI strategist",
        "Hands-on guidance",
      ],
      [
        "Scalability",
        "Hire more people",
        "Scale via compute",
        "Instant capacity",
      ],
      [
        "Documentation & SOPs",
        "Created manually",
        "Auto-generated",
        "Always up-to-date",
      ],
    ],
  };

  const headerData = {
    "AI Sales Suite": [["Human Sales Team", "Aeontrix Sales Suite"]],
    "AI Marketing Suite": [
      ["Human Content Team", "Aeontrix AI Marketing Suite"],
    ],

    "AI Influencer Studio": [
      ["Human Models & Crew", "Aeontrix Influencer Studio"],
    ],
    "Your AI Clone": [["Single Human Expert", "Aeontrix AI Clone"]],
    "AI Customer Support": [["Human Agents", "Aeontrix AI Support"]],
    "AI Business Partner (Full-Stack Engagement)": [
      ["Traditional Outsourcing / New Hires", "Aeontrix AI Business Partner"],
    ],
  };

  const selectedData = aiComparisonData[selectedOption];

  const selectedHeader = headerData[selectedOption];

  return (
    <section id="services" className="py-20 z-10 relative text-seasalt">
      <div className="lg:max-w-[90vw] mx-auto px-4">
        <h2 className="gradient-title font-bold text-center ">
          Your AI Upgrade, Quantified{" "}
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="content-box border-glow-wrapper highlighted-box-small  bg-[#F8F9FB]/10 backdrop-blur-lg border border-[#F8F9FB]/20 rounded-3xl p-4 md:p-8 shadow-2xl relative ">
            <div className="border-glow"></div>
            <h3 className="text-xl font-semibold text-white mb-6">
              Select Department
            </h3>
            <div className="space-y-4">
              {options.map((option, index) => (
                <div
                  key={index}
                  onClick={() => setSelectedOption(option)}
                  className={`p-3 rounded-lg cursor-pointer border transition-all duration-300 ${
                    selectedOption === option
                      ? "bg-[#00FF93] text-black border-[#00FF93]"
                      : "bg-[#121212] text-white border-[#2a2a2a] hover:border-[#00FF93]/40"
                  }`}
                >
                  <label className="flex items-center gap-3">
                    <input
                      type="radio"
                      name="ai-role"
                      value={option}
                      checked={selectedOption === option}
                      onChange={() => setSelectedOption(option)}
                      className="appearance-none form-radio text-[#00FF93] focus:ring-[#00FF93]"
                    />
                    <span>{option}</span>
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column */}
          <div className="content-box border-glow-wrapper highlighted-box-small md:col-span-2 bg-[#F8F9FB]/10 backdrop-blur-lg border border-[#F8F9FB]/20 rounded-3xl p-0 md:p-8 shadow-2xl relative ">
            <div className="border-glow"></div>
            <h3 className="text-xl p-4 pb-0 md:p-0 font-semibold mb-4 text-white">
              {selectedOption} Comparison
            </h3>
            <div className="overflow-x-auto">
              {selectedData ? (
                <table className="w-full text-center text-sm md:text-base text-white">
                  <thead className="text-[#00FF93]  border-b border-[#00FF93]/30">
                    {selectedHeader.map(([human, ai], i) => (
                      <tr key={i}>
                        <th className="py-4 text-left px-2 md:px-4">Feature</th>
                        <th className="py-4  px-2 md:px-4">{human}</th>
                        <th className="py-4 px-2 md:px-4">{ai} </th>
                        <th className="py-4 px-2 md:px-4">Improvement </th>
                      </tr>
                    ))}
                  </thead>
                  <tbody className="divide-y divide-[#2a2a2a]">
                    {selectedData.map(([metric, human, ai, improvement], i) => (
                      <tr key={i} className="hover:bg-[#00FF93]/5">
                        <td className="py-4 px-2 md:px-4 text-left font-semibold text-white">
                          {metric}
                        </td>
                        <td className="py-4 px-2 md:px-4">{human}</td>
                        <td className="py-4 font-semibold px-2 md:px-4">
                          {ai}
                        </td>
                        <td className="py-4 px-2 md:px-4">{improvement}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : (
                <div className="text-gray-400 text-center py-16">
                  Comparison data for{" "}
                  <span className="text-white font-semibold">
                    {selectedOption}
                  </span>{" "}
                  is not yet available.
                  <br />
                  Please check back soon.
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HumanAIComparison;

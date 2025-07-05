import React, { useState } from "react";

const HumanAIComparison = () => {
  const [selectedOption, setSelectedOption] = useState("Sales Department");

  const options = [
    "Sales Department",
    "Marketing Department",
    "HR Department",
    "Customer Service",
    "Finance Department",
  ];

  const aiComparisonData = {
    "Sales Department": [
      ["Lead Response Time", "4-24 hours", "0.5 seconds"],
      ["Simultaneous Conversations", "1-2 per rep", "Unlimited"],
      ["Data Analysis During Call", "Basic/Limited", "Comprehensive"],
      ["Languages Supported", "1-3 per rep", "95+ languages"],
      ["Follow-up Consistency", "Variable (67%)", "100%"],
    ],
    "Marketing Department": [
      ["Lead Response Time", "4-24 hours", "0.5 seconds"],
      ["Simultaneous Conversations", "1-2 per rep", "Unlimited"],
      ["Data Analysis During Call", "Basic/Limited", "Comprehensive"],
      ["Languages Supported", "1-3 per rep", "95+ languages"],
      ["Follow-up Consistency", "Variable (67%)", "100%"],
    ],
    "HR Department": [
      ["Lead Response Time", "4-24 hours", "0.5 seconds"],
      ["Simultaneous Conversations", "1-2 per rep", "Unlimited"],
      ["Data Analysis During Call", "Basic/Limited", "Comprehensive"],
      ["Languages Supported", "1-3 per rep", "95+ languages"],
      ["Follow-up Consistency", "Variable (67%)", "100%"],
    ],
    "Customer Service": [
      ["Lead Response Time", "4-24 hours", "0.5 seconds"],
      ["Simultaneous Conversations", "1-2 per rep", "Unlimited"],
      ["Data Analysis During Call", "Basic/Limited", "Comprehensive"],
      ["Languages Supported", "1-3 per rep", "95+ languages"],
      ["Follow-up Consistency", "Variable (67%)", "100%"],
    ],
    "Finance Department": [
      ["Lead Response Time", "4-24 hours", "0.5 seconds"],
      ["Simultaneous Conversations", "1-2 per rep", "Unlimited"],
      ["Data Analysis During Call", "Basic/Limited", "Comprehensive"],
      ["Languages Supported", "1-3 per rep", "95+ languages"],
      ["Follow-up Consistency", "Variable (67%)", "100%"],
    ],
  };

  const selectedData = aiComparisonData[selectedOption];

  return (
    <section id="services" className="py-20 relative text-seasalt">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">
          Human - AI Comparison
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="content-box border-glow-wrapper highlighted-box-small  bg-[#F8F9FB]/10 backdrop-blur-lg border border-[#F8F9FB]/20 rounded-3xl p-4 md:p-8 shadow-2xl relative ">
            <div className="inside-shadow"></div>
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
                      className="form-radio text-[#00FF93] focus:ring-[#00FF93]"
                    />
                    <span>{option}</span>
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column */}
          <div className="content-box border-glow-wrapper highlighted-box-small md:col-span-2 bg-[#F8F9FB]/10 backdrop-blur-lg border border-[#F8F9FB]/20 rounded-3xl p-4 md:p-8 shadow-2xl relative ">
            <div className="inside-shadow"></div>
            <div className="border-glow"></div>
            <h3 className="text-xl font-semibold mb-4 text-white">
              {selectedOption} Comparison
            </h3>
            <div className="overflow-x-auto">
              {selectedData ? (
                <table className="w-full text-center  text-white">
                  <thead className="text-[#00FF93]  border-b border-[#00FF93]/30">
                    <tr>
                      <th className="py-4 text-left px-4">Feature</th>
                      <th className="py-4  px-4">
                        Human {selectedOption.split(" ")[0]} Team
                      </th>
                      <th className="py-4 px-4">
                        AI {selectedOption.split(" ")[0]} Team
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#2a2a2a]">
                    {selectedData.map(([metric, human, ai], i) => (
                      <tr key={i} className="hover:bg-[#00FF93]/5">
                        <td className="py-4 px-4 text-left font-semibold text-white">
                          {metric}
                        </td>
                        <td className="py-4 px-4">{human}</td>
                        <td className="py-4 px-4">{ai}</td>
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

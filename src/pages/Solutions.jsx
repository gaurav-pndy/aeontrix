import React, { useState } from "react";

import { useParams } from "react-router-dom";
import { solutionsData } from "../data/solutionsData";
import BookAuditButton from "../components/BookAuditButton";
import { FaCalendarAlt } from "react-icons/fa";
import { MdOutlineAttachMoney } from "react-icons/md";
import Timeline from "../components/Home/Timeline";

const Solutions = () => {
  const { solutionId } = useParams();
  const solution = solutionsData.find((s) => s.id === solutionId);

  const [hoveredFeature, setHoveredFeature] = useState(null);

  return (
    <div className="min-h-screen relative pt-6 z-10 text-seasalt">
      {/* Hero Section */}
      <section className=" pb-20 mb-6">
        <div className="flex justify-center mb-6">
          <div className="green-glass-badge backdrop-blur-md rounded-full px-6 py-2 shadow-lg">
            <span className="text-[#00FF93] font-medium">
              {solution.title}{" "}
            </span>
          </div>
        </div>
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h1
            dangerouslySetInnerHTML={{ __html: solution.heading }}
            className="!text-5xl md:!text-[4rem] text-seasalt font-bold !mb-6"
          ></h1>
          <p className="text-xl text-[#F8F9FB]/80 max-w-3xl mx-auto leading-relaxed mb-8">
            {solution.desc}
          </p>
          <div className="flex w-full justify-center">
            <BookAuditButton
              label={solution.heroBtn}
              className="!text-lg !py-2.5"
            />
          </div>
        </div>
      </section>

      <section className="pb-20 text-seasalt">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold gradient-title !mb-4">
              {solution.useCases ? "Use Cases" : "Who It's For"}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solution.useCases &&
              solution.useCases.map((use, index) => (
                <div
                  key={index}
                  className="bg-purple-50   transition-all duration-300 hover:shadow-lg cursor-pointer content-box border-glow-wrapper highlighted-box-small   rounded-2xl p-4 md:p-5 shadow-2xl relative "
                >
                  <div className="border-glow"></div>
                  <div className="flex gap-4 items-center mb-4">
                    <div className="w-12 shrink-0 h-12 p-1  flex items-center justify-center bg-[#F8F9FB]/10 rounded-lg">
                      <use.icon className="w-6 shrink-0 h-6 text-[#00FF93]" />
                    </div>
                    <h3 className="text-xl font-semibold ">{use.title}</h3>
                  </div>
                  <p className="text-[#F8F9FB]/80">{use.desc}</p>
                </div>
              ))}
            {solution.whoItsFor &&
              solution.whoItsFor.map((item, index) => (
                <div
                  key={index}
                  className="bg-purple-50  transition-all duration-300 hover:shadow-lg cursor-pointer content-box border-glow-wrapper highlighted-box-small   rounded-2xl p-4 md:p-5 shadow-2xl relative "
                >
                  <div className="border-glow"></div>
                  <div className="flex gap-4 items-center mb-4">
                    <div className="w-12 h-12 p-1 shrink-0 flex items-center justify-center bg-[#F8F9FB]/10 rounded-lg">
                      <item.icon className="w-6 h-6 shrink-0 text-[#00FF93]" />
                    </div>
                    <h3 className="text-xl  ">{item.title}</h3>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      <section className="pb-20 ">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold gradient-title !mb-4">
              Core Features
            </h2>
            <p className="text-xl text-[#F8F9FB]/70 max-w-3xl mx-auto">
              {solution.overviewDesc}
            </p>
          </div>

          <div className={`grid md:grid-cols-2 ${solution.featuresGrid} gap-8`}>
            {solution.coreFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-purple-50   transition-all duration-300 hover:shadow-lg cursor-pointer content-box border-glow-wrapper highlighted-box-small   rounded-2xl p-4 md:p-5 shadow-2xl relative "
              >
                <div className="border-glow"></div>
                <div className="flex gap-4 items-start mb-4">
                  <div className="w-10 h-10 p-1 shrink-0 flex items-center justify-center bg-[#F8F9FB]/10 rounded-lg">
                    <feature.icon className="w-6 h-6 shrink-0 text-[#00FF93]" />
                  </div>
                  <h3 className="text-xl  ">{feature.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who It's For */}
      {/* <section className="py-20 ">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold gradient-title mb-4">
              Who It's For
            </h2>
          </div>

          <div
            className={`grid md:grid-cols-2 lg:grid-cols-${solution.whoItsFor.length} gap-8`}
          >
            {solution.whoItsFor.map((target, index) => (
              <div key={index} className="text-center">
                <div className=" h-full  rounded-2xl p-4 md:p-5  ">
                  <div className="flex flex-col items-center ">
                    <div className=" mb-6 flex items-center justify-center ">
                      <target.icon className="text-5xl text-[#00FF93]" />
                    </div>
                    <h3 className="text-xl  mb-2">{target.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* How It Works */}
      {/* <section className="py-20 ">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold gradient-title mb-4">
              How It Works
            </h2>
          </div>

          <div
            className={`grid md:grid-cols-2 lg:grid-cols-${solution.howItWorks.length} gap-8`}
          >
            {" "}
            {solution.howItWorks.map((step, index) => (
              <div
                key={index}
                className="text-center content-box border-glow-wrapper highlighted-box-small   rounded-2xl p-4 md:p-5 shadow-2xl relative "
              >
                <div className="border-glow"></div>
                <div className="w-16 h-16 bg-[#F8F9FB]/10 rounded-full flex items-center justify-center mx-auto mb-6 ">
                  <span className="text-2xl font-bold text-[#00FF93]">
                    {step.step}
                  </span>
                </div>
                <h3 className="text-xl  text-[#F8F9FB] ">{step.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      <Timeline />

      {/* CTA Section */}
      <section className="py-20 ">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold gradient-title !mb-6">
            Ready to Upgrade Your Business with AI?{" "}
          </h2>
          <p className="text-xl text-[#F8F9FB]/80 mb-8">
            Join hundreds of businesses already using AI to accelerate their
            growth.
          </p>
          <div className="flex w-full justify-center">
            <BookAuditButton label="Book a Call" className="!text-lg !py-2.5" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Solutions;

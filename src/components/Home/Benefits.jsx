import React from "react";
import {
  MdAttachMoney,
  MdOutlineIntegrationInstructions,
  MdOutlineMoreTime,
  MdOutlineSecurity,
} from "react-icons/md";
import { FaBrain, FaChartLine } from "react-icons/fa";
import { TbClock24 } from "react-icons/tb";
import { RiUserHeartLine } from "react-icons/ri";

const Benefits = () => {
  const benefits = [
    {
      icon: (
        <MdOutlineMoreTime className="text-3xl text-[#00FF93]  mb-1 mx-auto" />
      ),
      title: "Time Savings",
      desc: "Our automations eliminate repetitive tasks, freeing up your team to focus on strategy and growth—not manual workflows.",
    },
    {
      icon: <MdAttachMoney className="text-3xl text-[#00FF93]  mb-1 mx-auto" />,
      title: "Cost Reduction",
      desc: "By reducing reliance on manual labor and inefficient processes, our AI Employees help you lower operational costs from day one.",
    },
    {
      icon: <FaChartLine className="text-3xl text-[#00FF93]  mb-1 mx-auto" />,
      title: "Increased ROI",
      desc: "Every automation we deploy is built for impact—expect tangible returns within weeks, not months.",
    },
    {
      icon: <TbClock24 className="text-3xl text-[#00FF93]  mb-1 mx-auto" />,
      title: "24/7/365 Availability",
      desc: "Aeontrix agents never sleep. Whether it’s lead response or customer support, your business stays active around the clock.",
    },
    {
      icon: (
        <RiUserHeartLine className="text-3xl text-[#00FF93]  mb-1 mx-auto" />
      ),
      title: "Enhanced Customer Experience",
      desc: "We build agents that respond instantly, personalize communication, and follow up—improving satisfaction and retention.",
    },
    {
      icon: <FaBrain className="text-3xl text-[#00FF93]  mb-1 mx-auto" />,
      title: "Smarter Decisions",
      desc: "Our AI agents extract insights, summarize data, and surface what matters—so your team can act faster and smarter.",
    },
    {
      icon: (
        <MdOutlineIntegrationInstructions className="text-3xl text-[#00FF93]  mb-1 mx-auto" />
      ),
      title: "Seamless Integration",
      desc: "Aeontrix works with the tools you already use—CRMs, helpdesks, calendars, and more—so there's no need to rebuild your stack.",
    },
    {
      icon: (
        <MdOutlineSecurity className="text-3xl text-[#00FF93]  mb-1 mx-auto" />
      ),
      title: "Enterprise-Grade Security",
      desc: "Every automation is built with encrypted flows, zero-trust design, and compliance baked in from the start.",
    },
  ];
  return (
    <section className="relative z-10 max-w-7xl mx-auto px-6 pt-6 pb-24">
      {/* Content Box with Cards */}
      <div className="max-w-5xl mx-auto pt-20">
        <div>
          <div className="w-full">
            <h2 className="text-4xl text-center font-bold mb-12 text-white">
              Benefits{" "}
            </h2>

            {/* Row 1 */}
            <div className="flex flex-row flex-nowrap gap-8 justify-between text-center overflow-visible w-full ">
              {benefits.slice(0, 3).map((benefit, idx) => (
                <div
                  key={idx}
                  className="content-box border-glow-wrapper highlighted-box-small sm:w-[300px] md:min-h-60 bg-[#F8F9FB]/10 backdrop-blur-lg border border-[#F8F9FB]/20 rounded-3xl p-4 md:p-8 shadow-2xl relative "
                >
                  <div className="inside-shadow"></div>
                  <div className="border-glow"></div>
                  {benefit.icon}
                  <h3 className="text-xl text-seasalt font-semibold mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-[#F8F9FB]/70">{benefit.desc} </p>
                </div>
              ))}
            </div>

            {/* Row 2 (with empty slot for robot) */}
            <div className="flex flex-row flex-nowrap gap-8 justify-between text-center overflow-visible w-full mt-16">
              {/* Card 1 */}
              <div className="content-box border-glow-wrapper highlighted-box-small sm:w-[300px] md:min-h-60 bg-[#F8F9FB]/10 backdrop-blur-lg border border-[#F8F9FB]/20 rounded-3xl p-4 md:p-8 shadow-2xl relative ">
                <div className="inside-shadow"></div>
                <div className="border-glow"></div>
                {benefits[3].icon}

                <h3 className="text-xl text-seasalt font-semibold mb-2">
                  {benefits[3].title}
                </h3>
                <p className="text-[#F8F9FB]/70">{benefits[3].desc} </p>
              </div>

              {/* Empty spacer for Spline card */}
              <div className=" sm:w-[300px] md:min-h-60">
                <img
                  loading="lazy"
                  src="/ai-robot-doing-office-work.gif"
                  className="w-fit"
                ></img>
              </div>

              {/* Card 3 */}
              <div className="content-box border-glow-wrapper highlighted-box-small sm:w-[300px] md:min-h-60 bg-[#F8F9FB]/10 backdrop-blur-lg border border-[#F8F9FB]/20 rounded-3xl p-4 md:p-8 shadow-2xl relative">
                <div className="inside-shadow"></div>
                <div className="border-glow"></div>
                {benefits[4].icon}

                <h3 className="text-xl text-seasalt font-semibold mb-2">
                  {benefits[4].title}
                </h3>
                <p className="text-[#F8F9FB]/70"> {benefits[4].desc}</p>
              </div>
            </div>

            {/* Row 3 */}
            <div className="flex flex-row flex-nowrap gap-8 justify-between text-center overflow-visible w-full mt-16">
              {benefits.slice(5).map((benefit, idx) => (
                <div
                  key={idx}
                  className="content-box border-glow-wrapper highlighted-box-small sm:w-[300px] md:min-h-60 bg-[#F8F9FB]/10 backdrop-blur-lg border border-[#F8F9FB]/20 rounded-3xl p-4 md:p-8 shadow-2xl relative "
                >
                  <div className="inside-shadow"></div>
                  <div className="border-glow"></div>
                  {benefit.icon}

                  <h3 className="text-xl text-seasalt font-semibold mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-[#F8F9FB]/70">{benefit.desc} </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;

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
      icon: <MdOutlineMoreTime className="text-2xl text-[#00FF93]   mx-auto" />,
      title: "Time Savings",
      desc: "Our automations eliminate repetitive tasks, freeing up your team to focus on strategy and growth—not manual workflows.",
    },
    {
      icon: <MdAttachMoney className="text-2xl text-[#00FF93]   mx-auto" />,
      title: "Cost Reduction",
      desc: "By reducing reliance on manual labor and inefficient processes, our AI Employees help you lower operational costs from day one.",
    },
    {
      icon: <FaChartLine className="text-2xl text-[#00FF93]   mx-auto" />,
      title: "Increased ROI",
      desc: "Every automation we deploy is built for impact—expect tangible returns within weeks, not months.",
    },
    {
      icon: <TbClock24 className="text-2xl text-[#00FF93]   mx-auto" />,
      title: "24/7/365 Availability",
      desc: "Aeontrix agents never sleep. Whether it’s lead response or customer support, your business stays active around the clock.",
    },
    {
      icon: <RiUserHeartLine className="text-2xl text-[#00FF93]   mx-auto" />,
      title: "Enhanced Customer Experience",
      desc: "We build agents that respond instantly, personalize communication, and follow up—improving satisfaction and retention.",
    },
    {
      icon: <FaBrain className="text-2xl text-[#00FF93]  mb-1 mx-auto" />,
      title: "Smarter Decisions",
      desc: "Our AI agents extract insights, summarize data, and surface what matters—so your team can act faster and smarter.",
    },
    {
      icon: (
        <MdOutlineIntegrationInstructions className="text-2xl text-[#00FF93]   mx-auto" />
      ),
      title: "Seamless Integration",
      desc: "Aeontrix works with the tools you already use—CRMs, helpdesks, calendars, and more—so there's no need to rebuild your stack.",
    },
    {
      icon: <MdOutlineSecurity className="text-2xl text-[#00FF93]   mx-auto" />,
      title: "Enterprise-Grade Security",
      desc: "Every automation is built with encrypted flows, zero-trust design, and compliance baked in from the start.",
    },
  ];
  return (
    <section className="relative z-10 max-w-7xl mx-auto px-6 pt-6 pb-24">
      {/* Content Box with Cards */}
      <div className="max-w-5xl mx-auto pt-20 ">
        <div>
          <h2 className="gradient-title text-center font-bold ">
            The Aeontrix Advantage
          </h2>
          <div
            className="grid gap-10 justify-items-center
  lg:grid-cols-3 text-left"
          >
            {benefits.slice(0, 3).map((benefit, idx) => (
              <div
                key={idx}
                className="content-box border-glow-wrapper highlighted-box-small  lg:w-[300px] lg:min-h-60 rounded-2xl p-4 md:p-5 shadow-2xl relative "
              >
                <div className="border-glow"></div>

                {/* Icon inside square */}
                <div className="w-10 h-10 p-1 mb-4 flex items-center justify-center bg-[#F8F9FB]/10 rounded-lg">
                  {benefit.icon}
                </div>

                {/* Heading */}
                <h3 className="text-xl text-seasalt mb-3 font-semibold">
                  {benefit.title}
                </h3>

                {/* Paragraph */}
                <p className="text-[#F8F9FB]/70 text-left leading-relaxed">
                  {benefit.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Row with robot centered on small screens */}
          <div
            className="grid gap-10 justify-items-center
 lg:grid-cols-3 text-left mt-10 lg:mt-14  items-stretch "
          >
            {/* Card 1 */}
            <div className="content-box border-glow-wrapper highlighted-box-small  lg:w-[300px] lg:min-h-60 rounded-2xl p-4 md:p-5 shadow-2xl relative ">
              <div className="border-glow"></div>

              {/* Icon inside square */}
              <div className="w-10 h-10 p-1 mb-4 flex items-center justify-center bg-[#F8F9FB]/10 rounded-lg">
                {benefits[3].icon}
              </div>

              {/* Heading */}
              <h3 className="text-xl text-seasalt mb-3 font-semibold">
                {benefits[3].title}
              </h3>

              {/* Paragraph */}
              <p className="text-[#F8F9FB]/70 text-left leading-relaxed">
                {benefits[3].desc}
              </p>
            </div>

            {/* Robot image */}
            <div className=" sm:w-[300px] md:min-h-60">
              <img
                loading="lazy"
                src="/ai-robot-doing-office-work.gif"
                className="w-fit"
              ></img>
            </div>

            {/* Card 3 */}
            <div className="content-box border-glow-wrapper highlighted-box-small  lg:w-[300px] lg:min-h-60 rounded-2xl p-4 md:p-5 shadow-2xl relative ">
              <div className="border-glow"></div>

              {/* Icon inside square */}
              <div className="w-10 h-10 p-1 mb-4 flex items-center justify-center bg-[#F8F9FB]/10 rounded-lg">
                {benefits[4].icon}
              </div>

              {/* Heading */}
              <h3 className="text-xl text-seasalt mb-3 font-semibold">
                {benefits[4].title}
              </h3>

              {/* Paragraph */}
              <p className="text-[#F8F9FB]/70 text-left leading-relaxed">
                {benefits[4].desc}
              </p>
            </div>
          </div>

          {/* Final row */}
          <div
            className="grid gap-10 justify-items-center
 lg:grid-cols-3 text-left mt-10 lg:mt-14"
          >
            {benefits.slice(5).map((benefit, idx) => (
              <div
                key={idx}
                className="content-box border-glow-wrapper highlighted-box-small  lg:w-[300px] lg:min-h-60 rounded-2xl p-4 md:p-5 shadow-2xl relative "
              >
                <div className="border-glow"></div>

                {/* Icon inside square */}
                <div className="w-10 h-10 p-1 mb-4 flex items-center justify-center bg-[#F8F9FB]/10 rounded-lg">
                  {benefit.icon}
                </div>

                {/* Heading */}
                <h3 className="text-xl text-seasalt mb-3 font-semibold">
                  {benefit.title}
                </h3>

                {/* Paragraph */}
                <p className="text-[#F8F9FB]/70 text-left leading-relaxed">
                  {benefit.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;

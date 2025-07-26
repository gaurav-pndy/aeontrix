import React, { useState } from "react";
import { useParams } from "react-router-dom";
import BookAuditButton from "../components/BookAuditButton";
import { FaCalendarAlt } from "react-icons/fa";
import { MdOutlineAttachMoney } from "react-icons/md";
import Timeline from "../components/Home/Timeline";
import SEO from "../components/SEO";
import { industriesData } from "../data/industriesData";

const Industries = () => {
  const { industryId } = useParams();
  const industry = industriesData.find((s) => s.id === industryId);

  const fullRows = Math.floor(industry.benefits.length / 3) * 3;
  const firstItems = industry.benefits.slice(0, fullRows);
  const remainingItems = industry.benefits.slice(fullRows);

  return (
    <div className="min-h-screen relative pt-6 z-10 text-seasalt">
      <SEO
        title={`${industry.title} | Aeontrix`}
        description={
          industry.desc
            ? `${industry.desc.substring(0, 150)}...`
            : "Explore AI automation solutions with Aeontrix."
        }
        keywords={`${industry.title.toLowerCase()}, AI automation, business automation, Aeontrix, ${industryId}`}
        url={`https://aeontrix.com/industries/${industryId}`}
        canonical={`https://aeontrix.com/industries/${industryId}`}
        ogTitle={`${industry.title} | Aeontrix`}
        ogDescription={
          industry.desc
            ? `${industry.desc.substring(0, 150)}...`
            : "Discover AI-powered solutions for your business with Aeontrix."
        }
        image="https://aeontrix.com/aeontrix-emblem.png"
        twitterSite="@aeontrix"
        schemaMarkup={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: `${industry.title} | Aeontrix`,
          url: `https://aeontrix.com/industries/${industryId}`,
          description:
            industry.desc ||
            "Explore AI automation solutions for business growth with Aeontrix.",
          publisher: {
            "@type": "Organization",
            name: "Aeontrix",
            logo: {
              "@type": "ImageObject",
              url: "https://aeontrix.com/aeontrix-emblem.png",
            },
          },
        }}
      />
      {/* Hero Section */}
      <section className=" pb-20 mb-6">
        <div className="flex justify-center mb-6">
          <div className="green-glass-badge backdrop-blur-md rounded-full px-6 py-2 shadow-lg">
            <span className="text-[#00FF93] font-medium">
              {industry.title}{" "}
            </span>
          </div>
        </div>
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h1
            dangerouslySetInnerHTML={{ __html: industry.heading }}
            className="!text-5xl md:!text-[4rem] text-seasalt font-bold !mb-6"
          ></h1>
          {/* <p className="text-xl text-[#F8F9FB]/80 max-w-3xl mx-auto leading-relaxed mb-8">
            {solution.desc}
          </p> */}
          <div className="flex w-full justify-center">
            <BookAuditButton className="!text-lg !py-2.5" />
          </div>
        </div>
      </section>

      {industry.smbs && (
        <section className="pb-20 text-seasalt">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold gradient-title !mb-4">
                SMBs We Serve
              </h2>
            </div>

            <div className={`grid md:grid-cols-2 lg:grid-cols-4 gap-8`}>
              {industry.smbs.map((smb, index) => (
                <div
                  key={index}
                  className="bg-purple-50   transition-all duration-300 hover:shadow-lg cursor-pointer content-box border-glow-wrapper highlighted-box-small   rounded-2xl p-4 md:p-5 shadow-2xl relative "
                >
                  <div className="border-glow"></div>
                  <div className="flex gap-4 items-center ">
                    <div className="w-12 h-12 p-1 shrink-0 flex items-center justify-center bg-[#F8F9FB]/10 rounded-lg">
                      <smb.icon className="w-6 h-6 shrink-0 text-[#00FF93]" />
                    </div>
                    <h3 className="text-xl  ">{smb.name}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="pb-20 text-seasalt">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold gradient-title !mb-4">
              AI Use Cases
            </h2>
          </div>

          <div className={`grid md:grid-cols-2 ${industry.useCasesGrid} gap-8`}>
            {industry.useCases.map((use, index) => (
              <div
                key={index}
                className="bg-purple-50   transition-all duration-300 hover:shadow-lg cursor-pointer content-box border-glow-wrapper highlighted-box-small   rounded-2xl p-4 md:p-5 shadow-2xl relative "
              >
                <div className="border-glow"></div>
                <div className="flex gap-4 h-full items-center">
                  <div className="w-12 h-12 p-1 shrink-0 flex items-center justify-center bg-[#F8F9FB]/10 rounded-lg">
                    <use.icon className="w-6 h-6 shrink-0 text-[#00FF93]" />
                  </div>
                  <h3
                    className="text-xl  "
                    dangerouslySetInnerHTML={{ __html: use.desc }}
                  ></h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <p className="text-2xl mb-16 text-center text-[#F8F9FB]/70 max-w-5xl mx-auto">
        More Advanced AI Automations will be discovered during an AI Audit after
        the Discovery Call
      </p>

      <section className="pb-20 ">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold gradient-title !mb-4">
              Benefits{" "}
            </h2>
          </div>

          <div className="flex flex-wrap justify-center gap-8">
            {industry.benefits.map((benefit, index) => (
              <div
                key={index}
                className={`not-[]:bg-purple-50 w-full md:w-[calc(50%-1.5rem)] ${industry.benefitsFlex}  flex transition-all duration-300 hover:shadow-lg cursor-pointer content-box border-glow-wrapper highlighted-box-small rounded-2xl p-4 md:p-5 shadow-2xl relative`}
              >
                <div className="border-glow"></div>
                <div className="flex gap-4 items-center">
                  <div className="w-10 h-10 p-1 shrink-0 flex items-center justify-center bg-[#F8F9FB]/10 rounded-lg">
                    <benefit.icon className="w-6 h-6 shrink-0 text-[#00FF93]" />
                  </div>
                  <h3
                    className="text-xl"
                    dangerouslySetInnerHTML={{ __html: benefit.desc }}
                  ></h3>
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
              Featured Solutions{" "}
            </h2>
          </div>

          <div className="flex flex-wrap justify-center gap-8">
            {industry.solutions.map((solution, index) => (
              <div
                key={index}
                className={`bg-purple-50 w-full md:w-[calc(50%-1.5rem)] ${industry.solutionsFlex} flex transition-all duration-300 hover:shadow-lg cursor-pointer content-box border-glow-wrapper highlighted-box-small rounded-2xl p-4 md:p-5 shadow-2xl relative`}
              >
                <div className="border-glow"></div>
                <div className="flex gap-4 items-center">
                  <div className="w-10 h-10 p-1 shrink-0 flex items-center justify-center bg-[#F8F9FB]/10 rounded-lg">
                    <solution.icon className="w-6 h-6 shrink-0 text-[#00FF93]" />
                  </div>
                  <h3
                    className="text-xl"
                    dangerouslySetInnerHTML={{ __html: solution.title }}
                  ></h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* <Timeline /> */}

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
            <BookAuditButton className="!text-lg !py-2.5" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Industries;

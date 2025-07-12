import React, { useEffect, useRef, useState } from "react";
import "./Timeline.css";

const eventsData = [
  {
    phase: "Phase 1: Discovery & AI Audit (Exploration & Planning)",
    duration: "1 week",
    process: [
      "Discovery Call to see <b>if we’ll be a good fit</b>",
      "You pay a <b>refundable AI Audit fee</b>",
      "We’ll have Stakeholder Interviews to understand your business inside-out",
      "We analyse your processes for 2-3 days",
      `AI Audit Presentation:
      <ul class='list-disc ml-8 -space-y-6 -mt-6  -mb-6'>
        <li>Opportunity Matrix</li>
        <li>AI Transformation Plan</li>
        <li>AI Implementation Roadmap</li>
        <li>Actionable Steps</li>
      </ul>`,
    ],
    whatYouGet: {
      heading: "What you get:",
      content: [
        "A List of High-Impact AI Opportunities",
        "Clear AI Implementation Plan",
        "Estimate of Costs",
      ],
    },
  },
  {
    phase: "Phase 2: Building, Testing & Launching",
    duration: "More than a week (scope-dependent)",
    process: [
      "<b>Audit fee refunded</b> once you commit to the transformation journey",
      "Development: We build and Integrate AI into Your Business",
      "Testing & Security: Ensure Reliability, Security and Data Privacy",
      "Training (if needed): We Upskill Your Team on Usage & Maintenance",
    ],
    whatYouGet: {
      heading: "What you get:",
      content: [
        "A live, working AI solution in your environment",
        "Test reports and security checklist",
        "User guide/Documentation",
        "Loom video walkthrough, with requests for feedback on edge cases",
      ],
    },
  },
  {
    phase: "Phase 3: Optimizing & Scaling (AI Partner Program)",
    duration: "Ongoing",
    process: [
      "<b>Performance checks:</b> Continuous Monitoring and Accuracy Tweaks",
      "<b>New features:</b> Additional Automations or AI models as needed",
      "<b>Quarterly Reviews:</b> ROI Analysis and Forward Planning",
      "<b>Priority Support:</b> Fast Responses and Unlimited Tweaks",
    ],
  },
];

const Timeline = () => {
  const timelineRef = useRef(null);
  const [scrollPercent, setScrollPercent] = useState(0);
  const [visibleSections, setVisibleSections] = useState(new Set([0])); // Start with first section visible
  const [visibleEvents, setVisibleEvents] = useState(new Set());
  const sectionRefs = useRef([]);
  const eventRefs = useRef([]);

  const [dotPositions, setDotPositions] = useState([]);

  useEffect(() => {
    // Calculate actual dot positions after render
    const calculateDotPositions = () => {
      const positions = [];
      sectionRefs.current.forEach((ref, index) => {
        if (ref) {
          const dotElement = ref.querySelector("[data-dot]");
          if (dotElement) {
            const rect = dotElement.getBoundingClientRect();
            const containerRect = timelineRef.current?.getBoundingClientRect();
            if (containerRect) {
              const relativeTop =
                rect.top - containerRect.top + timelineRef.current.scrollTop;
              positions[index] = relativeTop;
            }
          }
        }
      });
      setDotPositions(positions);
    };

    const timer = setTimeout(calculateDotPositions, 200);
    return () => clearTimeout(timer);
  }, []);

  const handleScroll = () => {
    const container = timelineRef.current;
    if (!container) return;

    const scrollTop = container.scrollTop;
    const scrollHeight = container.scrollHeight - container.clientHeight;
    const scrolled = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
    setScrollPercent(Math.min(scrolled, 100)); // Cap at 100%

    const containerRect = container.getBoundingClientRect();
    const containerTop = containerRect.top;
    const gradientLinePosition =
      containerTop + (Math.min(scrolled, 100) / 100) * containerRect.height;

    // Check visibility for sections
    const newVisibleSections = new Set([0]); // Always keep first section visible
    sectionRefs.current.forEach((ref, index) => {
      if (ref && index > 0) {
        // Skip first section as it's always visible
        const dotElement = ref.querySelector("[data-dot]");
        if (dotElement) {
          const dotRect = dotElement.getBoundingClientRect();
          const dotCenter = dotRect.top + dotRect.height / 2;

          if (gradientLinePosition >= dotCenter - 50) {
            newVisibleSections.add(index);
          }
        }
      }
    });
    setVisibleSections(newVisibleSections);

    // Check visibility for events
    const newVisibleEvents = new Set();
    eventRefs.current.forEach((ref, index) => {
      if (ref) {
        const rect = ref.getBoundingClientRect();
        const eventTop = rect.top;

        if (gradientLinePosition >= eventTop) {
          newVisibleEvents.add(index);
        }
      }
    });
    setVisibleEvents(newVisibleEvents);
  };

  useEffect(() => {
    const timer = setTimeout(handleScroll, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative z-10 max-w-6xl mx-auto px-4    text-seasalt mt-10">
      <div className="flex flex-col items-center justify-center max-w-5xl mx-auto w-full   p-4 md:py-8  relative  md:pb-0 ">
        {/* <div className="border-glow"></div> */}
        <h2 className="gradient-title font-bold text-center !my-4">
          AI Implementation Roadmap
        </h2>
        <div
          ref={timelineRef}
          onScroll={handleScroll}
          className="timeline-container  relative w-full max-w-4xl h-[80vh] overflow-y-auto pt-4 rounded-3xl"
        >
          <div className="relative w-full flex">
            {/* Timeline Line Section */}
            <div className="relative hidden md:block md:w-12 flex-shrink-0">
              {/* Reduced top spacer */}
              <div className="h-5" />

              {/* Calculate positions for first and last dots */}
              {(() => {
                let firstDotPosition,
                  lastDotPosition,
                  lineStartPosition,
                  lineEndPosition,
                  lineHeight;
                if (dotPositions.length < 2) {
                  // Fallback to manual calculation if dot positions aren't ready
                  const topSpacer = 80;
                  const sectionSpacing = 160;
                  firstDotPosition = topSpacer;
                  lastDotPosition =
                    firstDotPosition + (eventsData.length - 1) * sectionSpacing;
                  lineStartPosition = firstDotPosition;
                  lineEndPosition = lastDotPosition;
                  lineHeight = lineEndPosition - lineStartPosition;
                } else {
                  // Use actual dot positions
                  firstDotPosition = dotPositions[0];
                  lastDotPosition = dotPositions[dotPositions.length - 1];
                  lineStartPosition = firstDotPosition; // Start below first dot
                  lineEndPosition = lastDotPosition;
                  lineHeight = lineEndPosition - lineStartPosition;
                }

                return (
                  <>
                    {/* Base timeline line - starts below first dot, ends at last dot */}
                    <div
                      className="absolute w-1 bg-gradient-to-b from-gray-600 left-2.5 md:left-[30px] via-gray-400 to-gray-600"
                      style={{
                        top: `calc(${lineStartPosition}px - 10px)`,
                        height: `${lineHeight}px`,
                      }}
                    />

                    {/* Progress line - also constrained between first dot bottom and last dot center */}
                    {scrollPercent > 0 && (
                      <div
                        className="absolute w-1 transition-all duration-300 ease-out left-2.5 md:left-[30px]"
                        style={{
                          top: `calc(${lineStartPosition}px - 25px)`,
                          height: `${
                            Math.min(scrollPercent / 100, 1) * lineHeight
                          }px`,
                          background: `linear-gradient(
                            to bottom,
                            rgba(0, 255, 147, 0) 0%,
                            rgba(0, 255, 147, 0.6) 15%,
                            rgba(0, 255, 147, 1) 50%,
                            rgba(0, 255, 147, 0.6) 85%,
                            rgba(0, 255, 147, 0) 100%
                          )`,
                          zIndex: 10,
                        }}
                      />
                    )}

                    {/* Debug: Show calculated positions */}
                  </>
                );
              })()}

              {/* Timeline dots */}
              {eventsData.map((section, sectionIndex) => (
                <div
                  key={sectionIndex}
                  className={`${
                    sectionIndex === 0 ? "mt-0" : "mt-10"
                  } relative`}
                >
                  <div
                    ref={(el) => (sectionRefs.current[sectionIndex] = el)}
                    className="sticky top-10 z-20 h-5 mb-10"
                  >
                    <div
                      data-dot
                      className={`timeline-dot absolute w-3 md:w-5 h-3 md:h-5 rounded-full border-2 border-white transition-all duration-500 left-3 md:left-[32px] ${
                        visibleSections.has(sectionIndex)
                          ? "bg-[#07cc7a] active"
                          : "bg-gray-600"
                      }`}
                      style={{
                        transform: "translateX(-50%)",
                        zIndex: 10,
                      }}
                    />
                  </div>

                  {/* Spacer for events */}
                  <div
                    style={{ height: `${section.process.length * 100}px` }}
                  />
                </div>
              ))}

              {/* Reduced bottom spacer */}
              <div className="h-20" />
            </div>

            {/* Content Section */}
            <div className="flex-1  md:pl-16 max-w-4xl">
              {/* Reduced top spacer */}
              <div className="h-5" />

              {eventsData.map((section, sectionIndex) => {
                const isVisible = visibleSections.has(sectionIndex);
                return (
                  <div
                    key={sectionIndex}
                    className={` ${
                      sectionIndex === 0 ? "mt-0" : "mt-20"
                    } relative`}
                  >
                    <div
                      className={`content-box  rounded-2xl p-4 md:p-8 ${
                        sectionIndex === 2 ? "mb-0" : "mb-10"
                      } max-w-3xl transition-all duration-700 ease-out ${
                        visibleSections.has(sectionIndex)
                          ? "visible opacity-100 translate-y-0"
                          : "opacity-30 translate-y-3"
                      }`}
                    >
                      {/* Section Title */}
                      <h2
                        className={`text-xl font-bold tracking-wide mb-3 pb-3 transition-all duration-500 ${
                          visibleSections.has(sectionIndex)
                            ? "text-seasalt border-b-2 border-white"
                            : "text-gray-400 border-b border-gray-700"
                        }`}
                      >
                        {section.phase}
                      </h2>

                      {/* Events */}

                      <h4 className="text-lg  tracking-wide mb-3 leading-tight  text-[#00FF93]">
                        <span className="font-semibold">Duration: </span>{" "}
                        {section.duration}
                      </h4>

                      <ul className="list-inside list-disc space-y-1">
                        {section.process.map((step, idx) => (
                          <li
                            className={`leading-relaxed whitespace-pre-line text-sm transition-colors duration-500 ${
                              isVisible ? "text-[#F8F9FB]/70" : "text-gray-500"
                            }`}
                            key={idx}
                            dangerouslySetInnerHTML={{ __html: step }}
                          ></li>
                        ))}
                      </ul>

                      {section.whatYouGet && (
                        <div className="mt-4">
                          <h6 className=" font-semibold mb-2">
                            {section.whatYouGet.heading}
                          </h6>
                          <ul className="list-inside list-disc space-y-1">
                            {section.whatYouGet.content.map((step, idx) => (
                              <li
                                className={`leading-relaxed whitespace-pre-line text-sm transition-colors duration-500 ${
                                  isVisible
                                    ? "text-[#F8F9FB]/70"
                                    : "text-gray-500"
                                }`}
                                key={idx}
                                dangerouslySetInnerHTML={{ __html: step }}
                              ></li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}

              {/* Reduced bottom spacer */}
              {/* <div className="h-20" /> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;

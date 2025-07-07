import React, { useEffect, useRef, useState } from "react";
import "./Timeline.css";

const eventsData = [
  {
    phase: "Phase 1: Exploration & Planning (AI Consultation)",
    duration: "1 week",
    process: [
      "<b>Kick-off call:</b> We chat about your goals and pick a small, high-impact AI use case.",
      "<b>Data check:</b> We look at your existing systems and data to see what’s ready.",
      "<b>Quick prototype:</b> We build a basic demo so you can see AI in action.",
    ],
    whatYouGet: {
      heading: "What you get:",
      content: [
        "A short list of top AI ideas for your business",
        "A simple diagram showing how it all fits together",
        "A clear quote and plan for the next steps",
      ],
    },
  },
  {
    phase: "Phase 2: Building, Testing & Launching",
    duration: "1 - 2 weeks+ (depending on scope)",
    process: [
      "<b>Development:</b> We build the full AI automation—integrating AI with your processes.",
      "<b>Testing & Security:</b> We make sure everything works reliably and is locked down.",
      "<b>Training:</b> We show your team how to use and maintain the new system (If required).",
    ],
    whatYouGet: {
      heading: "What you get:",
      content: [
        "A live, working AI solution in your environment",
        "Test reports and security checklist",
        "User guide/Documentation",
        "Loom video explaining the workflow, & requesting feedback such as Edge Cases",
      ],
    },
  },
  {
    phase: "Phase 3: Optimizing & Scaling (for AI Partner clients)",
    duration: "Ongoing",
    process: [
      "<b>Performance checks:</b> We track results and tweak for better accuracy.",
      "<b>New features:</b> We add more automations or AI models as you need them.",
      "<b>Regular reviews:</b> We meet quarterly to review ROI and plan ahead.",
      "<b>Priority support:</b> Fast responses and unlimited tweaks all year long.",
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
    <section className="relative z-10 max-w-6xl mx-auto px-4 pb-24  min-h-screen text-seasalt mt-10">
      <div className="flex flex-col items-center justify-center max-w-5xl mx-auto w-full  content-box border-glow-wrapper highlighted-box-timeline  bg-[#F8F9FB]/10 backdrop-blur-lg border border-[#F8F9FB]/20 rounded-3xl p-4 md:py-8 shadow-2xl relative ">
        <div className="border-glow"></div>
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
                    sectionIndex === 0 ? "mt-0" : "mt-25"
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
                    className={`${
                      sectionIndex === 0 ? "mt-0" : "mt-20"
                    } relative`}
                  >
                    <div
                      className={`content-box  rounded-2xl p-4 md:p-8 mb-10 max-w-3xl transition-all duration-700 ease-out ${
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

                      <ul className="list-inside list-disc space-y-2">
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
                          <ul className="list-inside list-disc space-y-2">
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

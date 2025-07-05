import React, { useEffect, useRef, useState } from "react";
import "./Timeline.css";

const eventsData = [
  {
    month: "Phase 1: Exploration & Planning",
    events: [
      {
        date: "13 NOVEMBER 2021",
        title: "Duration: 1 week",
        content:
          "• Kick-off call: We chat about your goals and pick a small, high-impact AI use case.\n• Data check: We look at your existing systems and data to see what's ready.",
      },
      {
        date: "14 NOVEMBER 2021",
        title: "Event 2",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis deleniti officiis, architecto aperiam et incidunt eveniet quibusdam culpa.",
      },
    ],
  },
  {
    month: "Phase 2: Building, Testing & Launching",
    events: [
      {
        date: "16 DECEMBER 2021",
        title: "Event 1",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis deleniti officiis, architecto aperiam et incidunt eveniet quibusdam culpa.",
      },
      {
        date: "17 DECEMBER 2021",
        title: "Event 2",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis deleniti officiis, architecto aperiam et incidunt eveniet quibusdam culpa.",
      },
    ],
  },
  {
    month: "Phase 3: Optimizing & Scaling",
    events: [
      {
        date: "16 DECEMBER 2021",
        title: "Event 1",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis deleniti officiis, architecto aperiam et incidunt eveniet quibusdam culpa.",
      },
      {
        date: "17 DECEMBER 2021",
        title: "Event 2",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis deleniti officiis, architecto aperiam et incidunt eveniet quibusdam culpa.",
      },
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
      <div className="flex flex-col items-center justify-center max-w-5xl mx-auto w-full  content-box border-glow-wrapper highlighted-box-timeline  bg-[#F8F9FB]/10 backdrop-blur-lg border border-[#F8F9FB]/20 rounded-3xl p-3 md:py-8 shadow-2xl relative ">
        <div className="inside-shadow"></div>
        <div className="border-glow"></div>
        <h2 className="text-4xl font-bold text-center my-4">Timeline </h2>
        <div
          ref={timelineRef}
          onScroll={handleScroll}
          className="timeline-container  relative w-full max-w-4xl h-[80vh] overflow-y-auto pt-4 rounded-3xl"
        >
          <div className="relative w-full flex">
            {/* Timeline Line Section */}
            <div className="relative  md:w-12 flex-shrink-0">
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
                        top: `calc(${lineStartPosition}px - 25px)`,
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
                    sectionIndex === 0 ? "mt-5" : "mt-25"
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
                  <div style={{ height: `${section.events.length * 150}px` }} />
                </div>
              ))}

              {/* Reduced bottom spacer */}
              <div className="h-20" />
            </div>

            {/* Content Section */}
            <div className="flex-1 pl-10 md:pl-16 max-w-4xl">
              {/* Reduced top spacer */}
              <div className="h-5" />

              {eventsData.map((section, sectionIndex) => (
                <div
                  key={sectionIndex}
                  className={`${
                    sectionIndex === 0 ? "mt-0" : "mt-20"
                  } relative`}
                >
                  <div
                    className={`content-box  rounded-2xl p-8 mb-10 max-w-3xl transition-all duration-700 ease-out ${
                      visibleSections.has(sectionIndex)
                        ? "visible opacity-100 translate-y-0"
                        : "opacity-30 translate-y-3"
                    }`}
                  >
                    {/* Section Title */}
                    <h2
                      className={`text-xl font-bold tracking-wide mb-5 pb-3 transition-all duration-500 ${
                        visibleSections.has(sectionIndex)
                          ? "text-seasalt border-b-2 border-white"
                          : "text-gray-400 border-b border-gray-700"
                      }`}
                    >
                      {section.month}
                    </h2>

                    {/* Events */}
                    {section.events.map((event, eventIndex) => {
                      const globalEventIndex = sectionIndex * 100 + eventIndex;
                      const isVisible = visibleSections.has(sectionIndex);
                      const isLastEvent =
                        eventIndex === section.events.length - 1;

                      return (
                        <div
                          key={eventIndex}
                          ref={(el) =>
                            (eventRefs.current[globalEventIndex] = el)
                          }
                          className={`${
                            !isLastEvent
                              ? "mb-6 pb-6 border-b border-gray-800"
                              : ""
                          }`}
                        >
                          <h3 className="text-xs font-semibold opacity-70 tracking-widest uppercase mb-2 text-[#00FF93]">
                            {event.date}
                          </h3>
                          <h4
                            className={`text-lg font-semibold tracking-wide mb-3 leading-tight transition-colors duration-500 ${
                              isVisible ? "text-white" : "text-gray-400"
                            }`}
                          >
                            {event.title}
                          </h4>
                          <p
                            className={`leading-relaxed whitespace-pre-line text-sm transition-colors duration-500 ${
                              isVisible ? "text-[#F8F9FB]/60" : "text-gray-500"
                            }`}
                          >
                            {event.content}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}

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

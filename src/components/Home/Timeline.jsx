import React, { useEffect, useRef, useState } from "react";

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
  const [visibleSections, setVisibleSections] = useState(new Set()); // Start with no sections visible
  const [visibleEvents, setVisibleEvents] = useState(new Set()); // Start with no events visible
  const sectionRefs = useRef([]);
  const eventRefs = useRef([]);

  useEffect(() => {
    // Add CSS to hide scrollbar
    const style = document.createElement("style");
    style.textContent = `
      .timeline-container::-webkit-scrollbar {
        display: none;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  const handleScroll = () => {
    const container = timelineRef.current;
    if (!container) return;

    const scrollTop = container.scrollTop;
    const scrollHeight = container.scrollHeight - container.clientHeight;
    const scrolled = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
    setScrollPercent(scrolled);

    const containerRect = container.getBoundingClientRect();
    const containerTop = containerRect.top;

    // Calculate the actual position of the gradient line within the container
    const gradientLinePosition =
      containerTop + (scrolled / 100) * containerRect.height;

    // Check visibility for sections - when gradient line reaches their dot
    const newVisibleSections = new Set();
    sectionRefs.current.forEach((ref, index) => {
      if (ref) {
        const dotElement = ref.querySelector("[data-dot]");
        if (dotElement) {
          const dotRect = dotElement.getBoundingClientRect();
          const dotCenter = dotRect.top + dotRect.height / 2;

          // For the first section, make it visible earlier to account for content positioning
          const offset = index === 0 ? 150 : 0;

          // Section is visible when gradient line has reached or passed its dot (with offset for first section)
          if (gradientLinePosition >= dotCenter - offset) {
            newVisibleSections.add(index);
          }
        }
      }
    });
    setVisibleSections(newVisibleSections);

    // Check visibility for events - when gradient line reaches their position
    const newVisibleEvents = new Set();
    eventRefs.current.forEach((ref, index) => {
      if (ref) {
        const rect = ref.getBoundingClientRect();
        const eventTop = rect.top;

        // Event is visible when gradient line has reached or passed it
        if (gradientLinePosition >= eventTop) {
          newVisibleEvents.add(index);
        }
      }
    });
    setVisibleEvents(newVisibleEvents);
  };

  useEffect(() => {
    // Initial check after component mounts
    const timer = setTimeout(handleScroll, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative z-10 max-w-7xl mx-auto px-6 pt-6 pb-24">
      <div
        className=""
        style={{
          background: "transparent",
          width: "100%",
          minHeight: "100vh",
          padding: "178px 0",
        }}
      >
        <div
          className=""
          style={{
            background: "transparent",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <div
            ref={timelineRef}
            onScroll={handleScroll}
            className="timeline-container"
            style={{
              padding: "50px",
              borderRadius: "50px",
              width: "1200px",
              height: "90vh",

              overflowY: "auto",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "flex-start",
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            <div
              style={{ position: "relative", width: "1100px", display: "flex" }}
            >
              {/* Timeline section on the left */}
              <div
                style={{ position: "relative", width: "120px", flexShrink: 0 }}
              >
                {/* Extended spacer at the top */}
                <div style={{ height: "210px", width: "100%" }} />

                {/* Base line - moved more to the right */}
                <div
                  style={{
                    position: "absolute",
                    left: "120px",
                    top: "-200px",
                    bottom: 0,
                    width: "4px",
                    background:
                      "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(255,255,255,0.12) 50%, rgba(0,0,0,1) 100%)",
                    zIndex: 0,
                  }}
                />

                {/* Progress line - only appears when scrolling starts */}
                {scrollPercent > 0 && (
                  <div
                    style={{
                      position: "absolute",
                      left: "120px",
                      top: "-200px",
                      width: "4px",
                      height: `calc(${scrollPercent}% + 200px)`,
                      background: `linear-gradient(
          to bottom,
          rgba(0, 255, 147, 0) 0%,
          rgba(0, 255, 147, 0.6) 15%,
          rgba(0, 255, 147, 1) 50%,
          rgba(0, 255, 147, 0.6) 85%,
          rgba(0, 255, 147, 0) 100%
        )`,
                      transition: "height 0.2s ease-out",
                      zIndex: 10,
                    }}
                  />
                )}

                {/* Timeline dots */}
                {eventsData.map((section, sectionIndex) => (
                  <div
                    key={sectionIndex}
                    style={{
                      marginTop: sectionIndex === 0 ? "0" : "160px",
                      position: "relative",
                    }}
                  >
                    <div
                      ref={(el) => (sectionRefs.current[sectionIndex] = el)}
                      style={{
                        position: "sticky",
                        top: "40px",
                        zIndex: 20,
                        height: "20px",
                        marginBottom: "40px",
                      }}
                    >
                      <div
                        data-dot
                        style={{
                          position: "absolute",
                          left: "122px",
                          transform: "translateX(-50%)",
                          background: visibleSections.has(sectionIndex)
                            ? "#00FF93"
                            : "#666",
                          height: "20px",
                          width: "20px",
                          borderRadius: "50%",
                          border: "4px solid white",
                          zIndex: 10,
                          transition: "background-color 0.5s ease",
                          boxShadow: "0 0 0 2px #e5e7eb",
                        }}
                      />
                    </div>

                    {/* Spacer to account for events height */}
                    <div
                      style={{ height: `${section.events.length * 150}px` }}
                    />
                  </div>
                ))}

                {/* Extended spacer at the bottom */}
                <div style={{ height: "200px", width: "100%" }} />
              </div>

              {/* Content section on the right */}
              <div style={{ flex: 1, paddingLeft: "70px", maxWidth: "700px" }}>
                {/* Extended spacer at the top */}
                <div style={{ height: "200px", width: "100%" }} />

                {eventsData.map((section, sectionIndex) => (
                  <div
                    key={sectionIndex}
                    style={{
                      marginTop: sectionIndex === 0 ? "0" : "160px",
                      position: "relative",
                    }}
                  >
                    {/* Single content box containing month title and all events */}
                    <div
                      className="content-box highlighted-box bg-[#F8F9FB]/10 backdrop-blur-lg border border-[#F8F9FB]/20 rounded-3xl p-4 md:p-8 shadow-2xl"
                      style={{
                        opacity: visibleSections.has(sectionIndex) ? 1 : 0.3,
                        transform: visibleSections.has(sectionIndex)
                          ? "translateY(0)"
                          : "translateY(10px)",
                        transition: "all 0.6s ease",
                        padding: "32px",
                        background: "transparent", // fully transparent background
                        borderRadius: "20px",
                        backdropFilter: "none", // no blur if you want true transparency
                        WebkitBackdropFilter: "none",
                        border: "none",
                        boxShadow: "none",
                        marginBottom: "40px",
                        maxWidth: "720px",
                        color: "#222",
                        fontFamily: `'Segoe UI', Roboto, sans-serif`,
                      }}
                    >
                      <div class="inside-shado"></div>
                      <div class="border-glow"></div>

                      {/* Month Title */}
                      <h2
                        style={{
                          fontSize: "20px",
                          fontWeight: "700",
                          letterSpacing: "0.5px",
                          margin: "0 0 20px 0",
                          color: visibleSections.has(sectionIndex)
                            ? "white"
                            : "#999",
                          transition: "color 0.5s ease",
                          textAlign: "left",
                          borderBottom: visibleSections.has(sectionIndex)
                            ? "2px solid black"
                            : "1px solid rgba(255,255,255,0.2)",
                          paddingBottom: "12px",
                        }}
                      >
                        {section.month}
                      </h2>

                      {/* Events */}
                      {section.events.map((event, eventIndex) => {
                        const globalEventIndex =
                          sectionIndex * 100 + eventIndex;
                        const isVisible = visibleSections.has(sectionIndex);
                        return (
                          <div
                            key={eventIndex}
                            ref={(el) =>
                              (eventRefs.current[globalEventIndex] = el)
                            }
                            style={{
                              marginBottom:
                                eventIndex < section.events.length - 1
                                  ? "24px"
                                  : "0",
                              paddingBottom:
                                eventIndex < section.events.length - 1
                                  ? "24px"
                                  : "0",
                              borderBottom:
                                eventIndex < section.events.length - 1
                                  ? "1px solid rgba(0,0,0,0.08)"
                                  : "none",
                            }}
                          >
                            <h3
                              style={{
                                fontSize: "11px",
                                fontWeight: "600",
                                opacity: 0.7,
                                letterSpacing: "1.2px",
                                textAlign: "left",
                                margin: "0 0 6px 0",
                                color: "white",
                                textTransform: "uppercase",
                              }}
                            >
                              {event.date}
                            </h3>
                            <h4
                              style={{
                                fontSize: "18px",
                                fontWeight: "600",
                                letterSpacing: "0.3px",
                                textAlign: "left",
                                margin: "0 0 10px 0",
                                color: isVisible ? "white" : "#999",
                                transition: "color 0.5s ease",
                                lineHeight: "1.3",
                              }}
                            >
                              {event.title}
                            </h4>
                            <p
                              style={{
                                textAlign: "left",
                                margin: 0,
                                lineHeight: "1.5",
                                whiteSpace: "pre-line",
                                color: isVisible ? "white" : "#aaa",
                                transition: "color 0.5s ease",
                                fontSize: "14px",
                                fontWeight: "400",
                              }}
                            >
                              {event.content}
                            </p>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ))}

                {/* Extended spacer at the bottom */}
                <div style={{ height: "200px", width: "100%" }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;

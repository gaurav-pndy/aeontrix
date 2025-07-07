import { useEffect, useState } from "react";
import { getCalApi } from "@calcom/embed-react";

const BookAuditButton = ({
  label = "Book an AI Audit",
  showIcon = false,
  className = "",
}) => {
  const [calLoaded, setCalLoaded] = useState(false);

  useEffect(() => {
    (async function () {
      try {
        const cal = await getCalApi();
        cal("ui", {
          theme: "dark",
          cssVarsPerTheme: {
            light: { "cal-brand": "#00ff95" },
            dark: { "cal-brand": "#00ff95" },
          },
          layout: "month_view",
          hideEventTypeDetails: false,
        });
        setCalLoaded(true);
        console.log("Cal.com API initialized successfully");
      } catch (error) {
        console.error("Failed to initialize Cal.com API:", error);
      }
    })();
  }, []);

  return (
    <button
      data-cal-link="aeontrix-ai/aeontrix-discovery"
      data-cal-config='{"layout":"month_view","theme":"dark"}'
      onClick={() => {
        if (!calLoaded) {
          console.warn("Cal.com not loaded, opening fallback link");
          window.open(
            "https://cal.com/aeontrix-ai/aeontrix-discovery",
            "_blank"
          );
        }
      }}
      className={`glow-button group bg-[#00FF93] hover:bg-[#00FF93]/90 text-black border border-[#00FF93]/30 hover:border-[#00FF93] px-8 py-4 rounded-full font-bold transition-all duration-300 hover:scale-105 relative overflow-hidden flex items-center justify-center ${className}`}
    >
      <span className="relative z-10">{label}</span>
      {showIcon && (
        <svg
          className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300 relative z-10"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M17 8l4 4m0 0l-4 4m4-4H3"
          />
        </svg>
      )}
      <span className="cursor-glow"></span>
    </button>
  );
};

export default BookAuditButton;

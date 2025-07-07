import { useEffect, useState } from "react";
import { getCalApi } from "@calcom/embed-react";

const CalEmbed = () => {
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

        cal("inline", {
          elementOrSelector: "#cal-embed",
          calLink: "aeontrix-ai/aeontrix-discovery",
        });

        setCalLoaded(true);
        console.log("Cal.com embed loaded");
      } catch (error) {
        console.error("Failed to load Cal.com embed:", error);
      }
    })();
  }, []);

  return (
    <div className="w-full max-w-5xl z-10 relative mx-auto px-4 py-12">
      <div
        id="cal-embed"
        className="content-box border-glow-wrapper highlighted-box-timeline  bg-[#F8F9FB]/10 backdrop-blur-lg border border-[#F8F9FB]/20 rounded-3xl p-4 md:py-8 shadow-2xl relative "
      >
        <div className="border-glow"></div>
        {!calLoaded && (
          <div className="text-white text-center py-20">
            Loading Calendar...
          </div>
        )}
      </div>
    </div>
  );
};

export default CalEmbed;
